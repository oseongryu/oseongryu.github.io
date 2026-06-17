import { onMounted, onUnmounted, nextTick } from 'vue'

export function initImageBox() {
  let observer = null

  const processImage = (img) => {
    // 이미 처리된 이미지면 스킵
    if (img.hasAttribute('data-processed-boxes')) return

    const boxesData = img.getAttribute('data-boxes')
    if (!boxesData) return

    // 이미지 로드 대기 (크기가 필요할 수도 있으므로)
    if (!img.complete) {
      img.onload = () => processImage(img)
      return
    }

    // 래퍼 생성
    const containerClass = 'image-container'
    let wrapper = img.parentElement

    // 이미 래퍼가 있는지 확인
    if (!wrapper || !wrapper.classList.contains(containerClass)) {
      wrapper = document.createElement('div')
      wrapper.className = containerClass
      
      // 이미지의 width 스타일이나 속성이 있다면 래퍼에도 적용 고려
      // 하지만 여기서는 기본적으로 inline-block으로 이미지를 감싸기만 함
      
      img.parentNode.insertBefore(wrapper, img)
      wrapper.appendChild(img)
    }

    // 처리됨 표시
    img.setAttribute('data-processed-boxes', 'true')

    // 박스 데이터 파싱
    let boxes = []
    try {
      // JSON 시도 (배열인 경우)
      if (boxesData.trim().startsWith('[')) {
        boxes = JSON.parse(boxesData)
      } else {
        // 단일 문자열로 취급
        boxes = [boxesData]
      }
    } catch (e) {
      console.warn('Failed to parse data-boxes:', boxesData, e)
      boxes = [boxesData]
    }

    // 박스 그리기
    boxes.forEach(box => {
      let top, left, width, height, label

      if (typeof box === 'object') {
        ({ top, left, width, height, label } = box)
      } else if (typeof box === 'string') {
        const parts = box.split(',').map(s => s.trim())
        const formatVal = (val) => (!isNaN(val) && val !== '') ? `${val}%` : val
        
        top = formatVal(parts[0])
        left = formatVal(parts[1])
        width = formatVal(parts[2])
        height = formatVal(parts[3])
        label = parts[4]
      }

      const boxDiv = document.createElement('div')
      boxDiv.className = 'red-box'
      boxDiv.style.top = top
      boxDiv.style.left = left
      boxDiv.style.width = width
      boxDiv.style.height = height

      if (label) {
        const labelSpan = document.createElement('span')
        labelSpan.className = 'box-label'
        labelSpan.textContent = label
        boxDiv.appendChild(labelSpan)
      }

      wrapper.appendChild(boxDiv)
    })
  }

  const scanImages = () => {
    const images = document.querySelectorAll('img[data-boxes]:not([data-processed-boxes])')
    images.forEach(processImage)
  }

  onMounted(() => {
    // 초기 스캔
    scanImages()

    // DOM 변경 감지
    observer = new MutationObserver((mutations) => {
      let shouldScan = false
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
          shouldScan = true
        }
      })
      
      if (shouldScan) {
        // 약간의 지연을 두어 DOM이 완전히 렌더링되도록 함
        nextTick(() => scanImages())
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
