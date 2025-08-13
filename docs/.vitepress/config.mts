import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({

    lang: 'en-US', // Sets the language to English
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container
    },
    title: "가이드",
    description: "설명",
    sitemap: {
      hostname: 'https://oseongryu.github.io',
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
      ['meta', { name: 'description', content: 'gptinfo' }],
      ['meta', { name: 'keywords', content: 'gptinfo' }],
      ['meta', { name: 'author', content: 'gptinfo' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      ['meta', { name: 'robots', content: 'index,follow' }],
      ['meta', { name: 'naver-site-verification', content: '9136c9826ed6d77f9dfd834e26f534c34b885f9a' }],
      ['meta', { name: 'google-adsense-account', content: 'ca-pub-9121212535131272' }],
      ['meta', { property: 'og:type', content: 'gptinfo' }],
      ['meta', { property: 'og:title', content: 'gptinfo' }],
      ['meta', { property: 'og:description', content: 'gptinfo' }],
      ['meta', { property: 'og:image', content: 'https://gptinfo.co.kr/ogimage.jpg' }],
      ['meta', { property: 'og:url', content: 'https://gptinfo.co.kr' }],
      ['meta', { name: 'twitter:card', content: 'gptinfo' }],
      ['meta', { name: 'twitter:title', content: 'gptinfo' }],
      ['meta', { name: 'twitter:description', content: 'gptinfo' }],
      ['meta', { name: 'twitter:image', content: 'https://gptinfo.co.kr' }],
      ['meta', { name: 'twitter:domain', content: 'gptinfo' }],


    ],
    themeConfig: {
      logo: {
        light: "/logo.svg",
        dark:  "/logo.svg"
      },
      outline: 'deep',
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Editor', link: '/editor/markdown-editor' },
        // { text: 'Examples', link: '/examples/markdown-examples' },
      ],
      search: {
        provider: 'local'
      },
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],
      sidebar: [
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
        "text": "- centos-docker",
        "link": "/os/centos-docker"
      },
      {
        "text": "- centos-error",
        "link": "/os/centos-error"
      },
      {
        "text": "- centos-nginx",
        "link": "/os/centos-nginx"
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
    "text": "📋 Docker",
    "collapsed": false,
    "items": [
      {
        "text": "- docker",
        "link": "/docker/docker"
      },
      {
        "text": "- docker-1_setup",
        "link": "/docker/docker-1_setup"
      },
      {
        "text": "- docker-2_using",
        "link": "/docker/docker-2_using"
      },
      {
        "text": "- docker-centos",
        "link": "/docker/docker-centos"
      },
      {
        "text": "- docker-env",
        "link": "/docker/docker-env"
      },
      {
        "text": "- docker-jekyll",
        "link": "/docker/docker-jekyll"
      },
      {
        "text": "- docker-mac-m1",
        "link": "/docker/docker-mac-m1"
      },
      {
        "text": "- docker-mariadb",
        "link": "/docker/docker-mariadb"
      }
    ]
  },
  {
    "text": "📋 Software",
    "collapsed": false,
    "items": [
      {
        "text": "- 3dprinter-meshmixer",
        "link": "/software/3dprinter-meshmixer"
      },
      {
        "text": "- activemq",
        "link": "/software/activemq"
      },
      {
        "text": "- appium",
        "link": "/software/appium"
      },
      {
        "text": "- chocolatey",
        "link": "/software/chocolatey"
      },
      {
        "text": "- chrome",
        "link": "/software/chrome"
      },
      {
        "text": "- dbeaver",
        "link": "/software/dbeaver"
      },
      {
        "text": "- eclipse",
        "link": "/software/eclipse"
      },
      {
        "text": "- edge",
        "link": "/software/edge"
      },
      {
        "text": "- fiddler",
        "link": "/software/fiddler"
      },
      {
        "text": "- git",
        "link": "/software/git"
      },
      {
        "text": "- github-action",
        "link": "/software/github-action"
      },
      {
        "text": "- github-slack",
        "link": "/software/github-slack"
      },
      {
        "text": "- googlesheet",
        "link": "/software/googlesheet"
      },
      {
        "text": "- httpie",
        "link": "/software/httpie"
      },
      {
        "text": "- intellij",
        "link": "/software/intellij"
      },
      {
        "text": "- jekyll",
        "link": "/software/jekyll"
      },
      {
        "text": "- kstudio-edu",
        "link": "/software/kstudio-edu"
      },
      {
        "text": "- mobaxterm",
        "link": "/software/mobaxterm"
      },
      {
        "text": "- mysqlworkbench",
        "link": "/software/mysqlworkbench"
      },
      {
        "text": "- n8n",
        "link": "/software/n8n"
      },
      {
        "text": "- notepad++",
        "link": "/software/notepad++"
      },
      {
        "text": "- notion",
        "link": "/software/notion"
      },
      {
        "text": "- office",
        "link": "/software/office"
      },
      {
        "text": "- pi",
        "link": "/software/pi"
      },
      {
        "text": "- proxy",
        "link": "/software/proxy"
      },
      {
        "text": "- quartz",
        "link": "/software/quartz"
      },
      {
        "text": "- software",
        "link": "/software/software"
      },
      {
        "text": "- sqlserver2017",
        "link": "/software/sqlserver2017"
      },
      {
        "text": "- userland",
        "link": "/software/userland"
      },
      {
        "text": "- vba",
        "link": "/software/vba"
      },
      {
        "text": "- visualstudio",
        "link": "/software/visualstudio"
      },
      {
        "text": "- vscode",
        "link": "/software/vscode"
      },
      {
        "text": "- vscode-setting",
        "link": "/software/vscode-setting"
      },
      {
        "text": "- zebra",
        "link": "/software/zebra"
      }
    ]
  },
  {
    "text": "📋 Hadoop",
    "collapsed": false,
    "items": [
      {
        "text": "- hadoop",
        "link": "/hadoop/hadoop"
      }
    ]
  },
  {
    "text": "📋 DBMS",
    "collapsed": false,
    "items": [
      {
        "text": "- dynamodb",
        "link": "/dbms/dynamodb"
      },
      {
        "text": "- mssql",
        "link": "/dbms/mssql"
      },
      {
        "text": "- mssql-backup",
        "link": "/dbms/mssql-backup"
      },
      {
        "text": "- mssql-copytablesyno",
        "link": "/dbms/mssql-copytablesyno"
      },
      {
        "text": "- mysql",
        "link": "/dbms/mysql"
      },
      {
        "text": "- oracle",
        "link": "/dbms/oracle"
      },
      {
        "text": "- oracle-index",
        "link": "/dbms/oracle-index"
      },
      {
        "text": "- sql",
        "link": "/dbms/sql"
      }
    ]
  },
  {
    "text": "📋 Spring Boot",
    "collapsed": false,
    "items": [
      {
        "text": "- springboot-eatgo",
        "link": "/springboot/springboot-eatgo"
      },
      {
        "text": "- springboot-jpa",
        "link": "/springboot/springboot-jpa"
      },
      {
        "text": "- springboot-jsp",
        "link": "/springboot/springboot-jsp"
      },
      {
        "text": "- springboot-lecture",
        "link": "/springboot/springboot-lecture"
      }
    ]
  },
  {
    "text": "📋 Jenkins",
    "collapsed": false,
    "items": [
      {
        "text": "- jenkins",
        "link": "/jenkins/jenkins"
      }
    ]
  },
  {
    "text": "📋 Deploy",
    "collapsed": false,
    "items": [
      {
        "text": "- heroku",
        "link": "/deploy/heroku"
      }
    ]
  },
  {
    "text": "📋 AWS",
    "collapsed": false,
    "items": [
      {
        "text": "- aws",
        "link": "/aws/aws"
      },
      {
        "text": "- aws-api",
        "link": "/aws/aws-api"
      },
      {
        "text": "- aws-certified-cloud-practitioner",
        "link": "/aws/aws-certified-cloud-practitioner"
      }
    ]
  },
  {
    "text": "📋 Flutter",
    "collapsed": false,
    "items": [
      {
        "text": "- flutter-ubuntu",
        "link": "/flutter/flutter-ubuntu"
      }
    ]
  },
  {
    "text": "📋 React Native",
    "collapsed": false,
    "items": [
      {
        "text": "- rn",
        "link": "/rn/rn"
      },
      {
        "text": "- rn-expo",
        "link": "/rn/rn-expo"
      },
      {
        "text": "- rn-lecture",
        "link": "/rn/rn-lecture"
      },
      {
        "text": "- rn-mac",
        "link": "/rn/rn-mac"
      },
      {
        "text": "- rn-setting",
        "link": "/rn/rn-setting"
      },
      {
        "text": "- rn-windows",
        "link": "/rn/rn-windows"
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
        "text": "- node-se2",
        "link": "/javascript/node-se2"
      },
      {
        "text": "- nuxt",
        "link": "/javascript/nuxt"
      },
      {
        "text": "- packages",
        "link": "/javascript/packages"
      }
    ]
  },
  {
    "text": "📋 React",
    "collapsed": false,
    "items": [
      {
        "text": "- react-boilerplate",
        "link": "/react/react-boilerplate"
      }
    ]
  },
  {
    "text": "📋 Vue",
    "collapsed": false,
    "items": [
      {
        "text": "- vue",
        "link": "/vue/vue"
      },
      {
        "text": "- vue-devextreme",
        "link": "/vue/vue-devextreme"
      },
      {
        "text": "- vue-lecture",
        "link": "/vue/vue-lecture"
      },
      {
        "text": "- vue-typescirpt",
        "link": "/vue/vue-typescirpt"
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
        "text": "- python-pyinstaller",
        "link": "/python/python-pyinstaller"
      },
      {
        "text": "- python-selenium",
        "link": "/python/python-selenium"
      }
    ]
  },
  {
    "text": "📋 Java",
    "collapsed": false,
    "items": [
      {
        "text": "- android",
        "link": "/java/android"
      },
      {
        "text": "- java",
        "link": "/java/java"
      }
    ]
  },
  {
    "text": "📋 Computer Science",
    "collapsed": false,
    "items": [
      {
        "text": "- cs",
        "link": "/cs/cs"
      },
      {
        "text": "- cs-privatefontcollection",
        "link": "/cs/cs-privatefontcollection"
      },
      {
        "text": "- devexpresswinforms",
        "link": "/cs/devexpresswinforms"
      },
      {
        "text": "- mybatis",
        "link": "/cs/mybatis"
      },
      {
        "text": "- wcf",
        "link": "/cs/wcf"
      },
      {
        "text": "- wpf",
        "link": "/cs/wpf"
      }
    ]
  },
  {
    "text": "📋 ASP",
    "collapsed": false,
    "items": [
      {
        "text": "- asp",
        "link": "/asp/asp"
      }
    ]
  },
  {
    "text": "📋 education",
    "collapsed": false,
    "items": [
      {
        "text": "- education",
        "link": "/education/education"
      },
      {
        "text": "- querydsl",
        "link": "/education/querydsl"
      }
    ]
  },
  {
    "text": "📋 etc",
    "collapsed": false,
    "items": [
      {
        "text": "- gpt",
        "link": "/etc/gpt"
      },
      {
        "text": "- stock",
        "link": "/etc/stock"
      }
    ]
  },
  {
    "text": "📋 project",
    "collapsed": false,
    "items": [
      {
        "text": "- project",
        "link": "/project/project"
      },
      {
        "text": "- project-management",
        "link": "/project/project-management"
      }
    ]
  },
  {
    "text": "📋 domain",
    "collapsed": false,
    "items": [
      {
        "text": "- spc-controlchart",
        "link": "/domain/spc-controlchart"
      },
      {
        "text": "- spc-processcapability",
        "link": "/domain/spc-processcapability"
      }
    ]
  }
]
  }}));