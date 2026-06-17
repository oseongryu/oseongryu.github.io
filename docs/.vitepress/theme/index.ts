// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'

import { initImageBox } from './imageBoxHandler'

import { useRoute } from 'vitepress'
import './style.css'
import './print.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router }) {
    // 활성 사이드바 항목으로 자동 스크롤
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          const active = document.querySelector('.VPSidebarItem.is-active > .item') as HTMLElement
          if (active) {
            active.scrollIntoView({ block: 'center', behavior: 'smooth' })
          }
        }, 300)
      }
    }

    app.component('vImageViewer', vImageViewer)
  },
  setup() {
    // 라우트 가져오기
    const route = useRoute()
    // 사용하기
    imageViewer(route)
    initImageBox()
  },
} satisfies Theme
