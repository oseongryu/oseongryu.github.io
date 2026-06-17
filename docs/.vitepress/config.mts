import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { fileURLToPath } from 'url'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: 'ko', // Sets the language to Korean
    title: '프로젝트 가이드',
    description: '프로젝트 가이드 설명',
    base: '/',
    // srcDir: "src",
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    mermaidPlugin: {
      class: 'mermaid my-class', // set additional css classes for parent container
    },
    sitemap: {
      hostname: 'https://oseongryu.github.io',
    },
    head: [
      // ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
      ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
      ['link', { rel: 'alternate icon', href: '/logo.svg' }],
    ],
    vite: {
      server: {
        host: true,
        port: 5173,
        // open: true,
      },
      ssr: {
        noExternal: [],
      },
      optimizeDeps: {
        exclude: [],
      },
      build: {
        minify: 'terser',
        cssMinify: true,
        reportCompressedSize: false,
        chunkSizeWarningLimit: 1024,
      },

    },
    markdown: {
      image: {
        lazyLoading: true,
      },
    },
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
      // @ts-ignore
      apiBaseUrl: '',
      editLink: {
        pattern: '/editor/markdown-editor?path=:path',
        text: '이 페이지 수정하기',
      },

      logo: {
        light: '/logo.svg',
        dark: '/logo.svg',
      },
      outline: 'deep',
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        // { text: 'Editor', link: '/editor/markdown-editor' },
        // { text: 'Examples', link: '/examples/markdown-examples' },
      ],
      search: {
        provider: 'local',
        options: {
          detailedView: true,
          miniSearch: {
            searchOptions: {
              combineWith: 'AND',
              fuzzy: false
            }
          }
        }
      },
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium',
        },
      },
      // socialLinks: [{ icon: 'github', link: 'https://github.com/oseongryu/vitepress-template' }],
      sidebar: [
  {
    "text": "📋 Java",
    "collapsed": false,
    "items": [
      {
        "text": "- java",
        "link": "/java/java"
      },
      {
        "text": "- springboot",
        "link": "/java/springboot"
      }
    ]
  },
  {
    "text": "📋 JavaScript",
    "collapsed": false,
    "items": [
      {
        "text": "- javascript",
        "link": "/javascript/javascript"
      },
      {
        "text": "- next",
        "link": "/javascript/next"
      },
      {
        "text": "- node",
        "link": "/javascript/node"
      },
      {
        "text": "- nuxt",
        "link": "/javascript/nuxt"
      },
      {
        "text": "- packages",
        "link": "/javascript/packages"
      },
      {
        "text": "- react-boilerplate",
        "link": "/javascript/react-boilerplate"
      },
      {
        "text": "- vue",
        "link": "/javascript/vue"
      }
    ]
  },
  {
    "text": "📋 Python",
    "collapsed": false,
    "items": [
      {
        "text": "- python",
        "link": "/python/python"
      },
      {
        "text": "- selenium",
        "link": "/python/selenium"
      }
    ]
  },
  {
    "text": "📋 .NET",
    "collapsed": false,
    "items": [
      {
        "text": "- asp",
        "link": "/dotnet/asp"
      },
      {
        "text": "- cs",
        "link": "/dotnet/cs"
      },
      {
        "text": "- cs-privatefontcollection",
        "link": "/dotnet/cs-privatefontcollection"
      },
      {
        "text": "- devexpresswinforms",
        "link": "/dotnet/devexpresswinforms"
      },
      {
        "text": "- mybatis",
        "link": "/dotnet/mybatis"
      },
      {
        "text": "- wcf",
        "link": "/dotnet/wcf"
      },
      {
        "text": "- wpf",
        "link": "/dotnet/wpf"
      }
    ]
  },
  {
    "text": "📋 OS",
    "collapsed": false,
    "items": [
      {
        "text": "- azure",
        "link": "/os/azure"
      },
      {
        "text": "- bat-client_deploy",
        "link": "/os/bat-client_deploy"
      },
      {
        "text": "- centos",
        "link": "/os/centos"
      },
      {
        "text": "- mac",
        "link": "/os/mac"
      },
      {
        "text": "- powershell",
        "link": "/os/powershell"
      },
      {
        "text": "- shell",
        "link": "/os/shell"
      },
      {
        "text": "- ubuntu",
        "link": "/os/ubuntu"
      },
      {
        "text": "- windows",
        "link": "/os/windows"
      },
      {
        "text": "- wsl",
        "link": "/os/wsl"
      }
    ]
  },
  {
    "text": "📋 Infrastructure",
    "collapsed": false,
    "items": [
      {
        "text": "- aws",
        "link": "/infra/aws"
      },
      {
        "text": "- deploy-heroku",
        "link": "/infra/deploy-heroku"
      },
      {
        "text": "- docker",
        "link": "/infra/docker"
      },
      {
        "text": "- jenkins",
        "link": "/infra/jenkins"
      }
    ]
  },
  {
    "text": "📋 Data",
    "collapsed": false,
    "items": [
      {
        "text": "- dbms-dynamodb",
        "link": "/data/dbms-dynamodb"
      },
      {
        "text": "- dbms-mssql",
        "link": "/data/dbms-mssql"
      },
      {
        "text": "- dbms-mysql",
        "link": "/data/dbms-mysql"
      },
      {
        "text": "- dbms-oracle",
        "link": "/data/dbms-oracle"
      },
      {
        "text": "- dbms-sql",
        "link": "/data/dbms-sql"
      },
      {
        "text": "- hadoop",
        "link": "/data/hadoop"
      }
    ]
  },
  {
    "text": "📋 Mobile",
    "collapsed": false,
    "items": [
      {
        "text": "- android",
        "link": "/mobile/android"
      },
      {
        "text": "- flutter-ubuntu",
        "link": "/mobile/flutter-ubuntu"
      },
      {
        "text": "- rn",
        "link": "/mobile/rn"
      }
    ]
  },
  {
    "text": "📋 Tools",
    "collapsed": false,
    "items": [
      {
        "text": "- 3dprinter-meshmixer",
        "link": "/tools/3dprinter-meshmixer"
      },
      {
        "text": "- chrome",
        "link": "/tools/chrome"
      },
      {
        "text": "- eclipse",
        "link": "/tools/eclipse"
      },
      {
        "text": "- etc",
        "link": "/tools/etc"
      },
      {
        "text": "- git",
        "link": "/tools/git"
      },
      {
        "text": "- github-action",
        "link": "/tools/github-action"
      },
      {
        "text": "- googlesheet",
        "link": "/tools/googlesheet"
      },
      {
        "text": "- intellij",
        "link": "/tools/intellij"
      },
      {
        "text": "- jekyll",
        "link": "/tools/jekyll"
      },
      {
        "text": "- vba",
        "link": "/tools/vba"
      },
      {
        "text": "- vscode",
        "link": "/tools/vscode"
      },
      {
        "text": "- vscode-setting",
        "link": "/tools/vscode-setting"
      }
    ]
  },
  {
    "text": "📋 Misc",
    "collapsed": false,
    "items": [
      {
        "text": "- domain-spc",
        "link": "/misc/domain-spc"
      },
      {
        "text": "- education-education",
        "link": "/misc/education-education"
      },
      {
        "text": "- education-querydsl",
        "link": "/misc/education-querydsl"
      },
      {
        "text": "- etc-firebase-studio",
        "link": "/misc/etc-firebase-studio"
      },
      {
        "text": "- etc-gpt",
        "link": "/misc/etc-gpt"
      },
      {
        "text": "- etc-stock",
        "link": "/misc/etc-stock"
      },
      {
        "text": "- project",
        "link": "/misc/project"
      },
      {
        "text": "- project-management",
        "link": "/misc/project-management"
      }
    ]
  }
]
  }}))
