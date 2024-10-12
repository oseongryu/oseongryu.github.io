import os
import json


# 원하는 타이틀 순서를 정의합니다.
priority_titles = [
'os', 'docker', 'software', 'hadoop', 'dbms', 'springboot', 'jenkins', 'deploy', 'aws',
'flutter', 'rn', 'javascript', 'react', 'vue', 'python', 'java', 'cs', 'asp'
]

# 완료 cp -R ~/git/til/docker/ ~/git/oseongryu.github.io/docs/docker/
def generate_config_array(docs_path):
    config_array = []
    for folder_name in os.listdir(docs_path):
        folder_path = os.path.join(docs_path, folder_name)
        if os.path.isdir(folder_path):
            children = []
            for file_name in os.listdir(folder_path):
                if file_name.endswith('.md'):
                    # 파일 이름에서 확장자를 제거하고, 경로를 배열 형태로 저장
                    base_name = file_name[:-3]
                    children.append([f'/{folder_name}/{base_name}', f'{base_name}'])
            # children을 두 번째 요소를 기준으로 정렬
            children = sorted(children, key=lambda x: x[1])
            if children:
                config_array.append({
                    'title': folder_name,
                    'collapsable': False,
                    'children': children
                })
    # 여기에서 config_array를 title 키 기준으로 정렬
    # sorted_config_array = sorted(config_array, key=lambda x: x['title'])
    sorted_config_array = sorted(config_array, key=lambda x: priority_titles.index(x['title']) if x['title'] in priority_titles else len(priority_titles))
    for item in sorted_config_array:
        if 'title' in item:
            item['title'] = '#-# ' + item['title']
        if 'collapsable' in item:
            item['collapsable'] = item['collapsable']
        if 'children' in item:
            for child in item['children']:
                child[1] = '- ' + child[1]
    return sorted_config_array

docs_path = '/Users/oseongryu/git/oseongryu.github.io/docs'  # 'docs' 폴더의 경로를 지정
config_array = generate_config_array(docs_path)

json_array = json.dumps(config_array)
convert_json_array  = json_array.replace(f"#-#", '📕')
print(convert_json_array)



