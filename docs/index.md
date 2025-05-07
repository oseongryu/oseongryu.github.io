---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '가이드'
  # text: "vitepress-guide"
  # tagline: hy 프로젝트 가이드
  actions:
    - theme: alt
      text: Mac
      link: /os/mac
    - theme: alt
      text: VSCode
      link: /software/vscode
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/oseongryu.png',
    name: 'oseongryu',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/oseongryu' }
    ]
  },
  {
    avatar: '',
    name: '',
    title: '',
    links: []
  },
  {
    avatar: '',
    name: '',
    title: '',
    links: []
  },
  {
    avatar: '',
    name: '',
    title: '',
    links: []
  },
  // {
  //   avatar: '',
  //   name: '',
  //   title: '',
  //   links: []
  // },
]
</script>

<VPTeamPage>
  <VPTeamMembers size="small" :members />
</VPTeamPage>
