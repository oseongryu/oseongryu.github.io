import json
import re

# 파일을 읽습니다.
with open('./docs/.vuepress/config.js', 'r') as file:
    content = file.read()

# sidebar 부분을 찾습니다.
sidebar_start = content.find('sidebar: [')
sidebar_end = content.find('sidebarDepth', sidebar_start) + 1
sidebar_content = content[sidebar_start:sidebar_end]

# sidebar 부분을 수정합니다.
sidebar_data = sidebar_content.replace('sidebar:', '')
for item in sidebar_data:
    if 'title' in item:
        item['title'] = '*' + item['title']
    if 'collapsable' in item:
        item['collapsable'] = 'true'
sidebar_content_new = 'sidebar: ' + sidebar_data

# 수정된 내용을 파일에 다시 씁니다.
slash = "\\"
content_new = content.replace(sidebar_content, sidebar_content_new.replace("\n",""))
with open('./docs/.vuepress/config.js', 'w') as file:
    file.write(content_new)