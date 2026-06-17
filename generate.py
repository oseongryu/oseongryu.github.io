import os
import json
import re
import shutil


priority_title_mapping = [
    {"key": "java", "title": "Java"},
    {"key": "javascript", "title": "JavaScript"},
    {"key": "python", "title": "Python"},
    {"key": "dotnet", "title": ".NET"},
    {"key": "os", "title": "OS"},
    {"key": "infra", "title": "Infrastructure"},
    {"key": "data", "title": "Data"},
    {"key": "mobile", "title": "Mobile"},
    {"key": "tools", "title": "Tools"},
    {"key": "misc", "title": "Misc"},
]


base_name_mapping = {
    "markdown-editor": "Markdown Editor",
}


def get_priority_index(key):
    for index, item in enumerate(priority_title_mapping):
        if item["key"] == key:
            return index
    return len(priority_title_mapping)


def process_sorted_config_array(sorted_config_array):
    # sorted_config_array의 text 값을 변경
    for item in sorted_config_array:
        original_text = item["text"]
        mapped_text = next(
            (
                entry["title"]
                for entry in priority_title_mapping
                if entry["key"] == original_text
            ),
            original_text,
        )
        item["text"] = f"📋 {mapped_text}"  # 변경된 text 값 설정

    return sorted_config_array


# ~/git/til 에서 docs로 파일들을 자동 동기화합니다.
def sync_til_to_docs():
    src_base = os.path.expanduser("~/git/til")
    dest_base = os.path.expanduser("~/git/oseongryu.github.io/docs")
    
    target_folders = ["data", "dotnet", "infra", "java", "javascript", "misc", "mobile", "os", "public", "python", "tools"]
    
    print("🔄 ~/git/til 에서 폴더 동기화를 시작합니다...")
    for folder in target_folders:
        src_dir = os.path.join(src_base, folder)
        dest_dir = os.path.join(dest_base, folder)
        
        if os.path.exists(src_dir):
            if os.path.exists(dest_dir):
                shutil.rmtree(dest_dir)
            shutil.copytree(src_dir, dest_dir)
            print(f"✅ {folder} 동기화 완료")

def generate_config_array(docs_path):
    config_array = []
    for folder_name in os.listdir(docs_path):
        folder_path = os.path.join(docs_path, folder_name)
        if os.path.isdir(folder_path):
            children = []
            for file_name in os.listdir(folder_path):
                if file_name.endswith(".md"):
                    # 파일 이름에서 확장자를 제거하고, 경로를 배열 형태로 저장
                    base_name = file_name[:-3]
                    base_name_title = base_name_mapping.get(base_name, base_name)
                    children.append(
                        {
                            "text": f"- {base_name_title}",
                            "link": f"/{folder_name}/{base_name}",
                        }
                    )
            # children을 정렬
            children = sorted(children, key=lambda x: x["link"])
            if children:
                # JSON 객체로 추가
                config_array.append(
                    {
                        "text": f"{folder_name}",
                        "collapsed": False,
                        "items": children,
                    }
                )
    # 여기에서 config_array를 title 키 기준으로 정렬
    sorted_config_array = sorted(
        config_array,
        key=lambda x: get_priority_index(x["text"]),
    )
    processed_config_array = process_sorted_config_array(sorted_config_array)
    return processed_config_array


docs_path = (
    os.path.expanduser("~") + "/git/oseongryu.github.io/docs"
)  # 'docs' 폴더의 경로를 지정

# 1. til 레포지토리의 파일들을 동기화
sync_til_to_docs()

# 2. sidebar config 생성
config_array = generate_config_array(docs_path)
json_array = config_array
json_array = json.dumps(
    config_array, ensure_ascii=False, indent=2
)  # False를 false로 변환
# print(json_array)

# # 파일을 읽습니다.
file_name = "./docs/.vitepress/config.mts"
with open(f"{file_name}", "r", encoding="utf-8") as file:
    content = file.read()

# # sidebar 부분을 찾습니다.
sidebar_start = content.find("sidebar: [")
sidebar_end = content.find("sidebarDepth", sidebar_start) - 1
sidebar_content = content[sidebar_start:sidebar_end]

# sidebar 부분을 수정합니다.
sidebar_data = sidebar_content.replace("sidebar:", "")
sidebar_content_new = "sidebar: " + json_array


# 수정된 내용을 파일에 다시 씁니다.
content_new = content.replace(sidebar_content, sidebar_content_new + "\n  }})")

with open(f"{file_name}", "w", encoding="utf-8") as file:
    file.write(content_new)
