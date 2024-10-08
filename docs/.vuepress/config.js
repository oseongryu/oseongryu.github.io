module.exports = {
  title: 'github.io',
  description: 'Description',
  email: 'oseongryu@gmail.com',
  base: '',
  head: [
    ['link', { rel: 'icon', href: `/images/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {'title': 'os', 'collapsable': false, 'children': [['/os/centos', 'centos'], ['/os/centos-nginx', 'centos-nginx'], ['/os/centos-docker', 'centos-docker'], ['/os/mac', 'mac'], ['/os/ubuntu', 'ubuntu'], ['/os/windows', 'windows'], ['/os/centos-error', 'centos-error'], ['/os/powershell', 'powershell'], ['/os/wsl', 'wsl'], ['/os/bat-client_deploy', 'bat-client_deploy'], ['/os/shell', 'shell'], ['/os/azure', 'azure']]}, 
      {'title': 'docker', 'collapsable': false, 'children': [['/docker/docker-mariadb', 'docker-mariadb'], ['/docker/docker-1_setup', 'docker-1_setup'], ['/docker/docker-jekyll', 'docker-jekyll'], ['/docker/docker-2_using', 'docker-2_using'], ['/docker/docker-centos', 'docker-centos'], ['/docker/docker', 'docker'], ['/docker/docker-env', 'docker-env'], ['/docker/docker-mac-m1', 'docker-mac-m1']]}, 
      {'title': 'software', 'collapsable': false, 'children': [['/software/intellij', 'intellij'], ['/software/userland', 'userland'], ['/software/3dprinter-meshmixer', '3dprinter-meshmixer'], ['/software/github-slack', 'github-slack'], ['/software/httpie', 'httpie'], ['/software/fiddler', 'fiddler'], ['/software/appium', 'appium'], ['/software/vba', 'vba'], ['/software/chocolatey', 'chocolatey'], ['/software/software', 'software'], ['/software/quartz', 'quartz'], ['/software/notion', 'notion'], ['/software/chrome', 'chrome'], ['/software/github-action', 'github-action'], ['/software/edge', 'edge'], ['/software/mobaxterm', 'mobaxterm'], ['/software/visualstudio', 'visualstudio'], ['/software/activemq', 'activemq'], ['/software/jekyll', 'jekyll'], ['/software/mysqlworkbench', 'mysqlworkbench'], ['/software/git', 'git'], ['/software/zebra', 'zebra'], ['/software/office', 'office'], ['/software/vscode-setting', 'vscode-setting'], ['/software/eclipse', 'eclipse'], ['/software/vscode', 'vscode'], ['/software/pi', 'pi'], ['/software/notepad++', 'notepad++'], ['/software/googlesheet', 'googlesheet'], ['/software/dbeaver', 'dbeaver'], ['/software/kstudio-edu', 'kstudio-edu'], ['/software/proxy', 'proxy'], ['/software/sqlserver2017', 'sqlserver2017'], ['/software/n8n', 'n8n']]}, 
      {'title': 'hadoop', 'collapsable': true, 'children': [['/hadoop/hadoop', 'hadoop']]}, 
      {'title': 'dbms', 'collapsable': true, 'children': [['/dbms/oracle-index', 'oracle-index'], ['/dbms/mysql', 'mysql'], ['/dbms/oracle', 'oracle'], ['/dbms/sql', 'sql'], ['/dbms/dynamodb', 'dynamodb'], ['/dbms/mssql', 'mssql'], ['/dbms/mssql-backup', 'mssql-backup'], ['/dbms/mssql-copytablesyno', 'mssql-copytablesyno']]}, 
      {'title': 'springboot', 'collapsable': true, 'children': [['/springboot/springboot-lecture', 'springboot-lecture'], ['/springboot/springboot-jpa', 'springboot-jpa'], ['/springboot/springboot-jsp', 'springboot-jsp'], ['/springboot/springboot-eatgo', 'springboot-eatgo']]}, 
      {'title': 'jenkins', 'collapsable': true, 'children': [['/jenkins/jenkins', 'jenkins']]}, 
      {'title': 'deploy', 'collapsable': true, 'children': [['/deploy/heroku', 'heroku']]}, 
      {'title': 'aws', 'collapsable': true, 'children': [['/aws/aws', 'aws'], ['/aws/aws-api', 'aws-api']]}, 


      {'title': 'flutter', 'collapsable': true, 'children': [['/flutter/flutter-ubuntu', 'flutter-ubuntu']]}, 
      {'title': 'rn', 'collapsable': true, 'children': [['/rn/rn-mac', 'rn-mac'], ['/rn/rn-windows', 'rn-windows'], ['/rn/rn', 'rn'], ['/rn/rn-expo', 'rn-expo'], ['/rn/rn-setting', 'rn-setting'], ['/rn/rn-lecture', 'rn-lecture']]}, 

      {'title': 'javascript', 'collapsable': true, 'children': [['/javascript/node-se2', 'node-se2'], ['/javascript/next', 'next'], ['/javascript/node', 'node'], ['/javascript/javascript', 'javascript'], ['/javascript/packages', 'packages'], ['/javascript/nuxt', 'nuxt']]}, 
      {'title': 'react', 'collapsable': true, 'children': [['/react/react-boilerplate', 'react-boilerplate']]}, 
      {'title': 'vue', 'collapsable': true, 'children': [['/vue/vue-devextreme', 'vue-devextreme'], ['/vue/vue', 'vue'], ['/vue/vue-typescirpt', 'vue-typescirpt'], ['/vue/vue-lecture', 'vue-lecture']]},
      {'title': 'python', 'collapsable': true, 'children': [['/python/python', 'python'], ['/python/python-pyinstaller', 'python-pyinstaller'], ['/python/python-selenium', 'python-selenium']]}, 
      {'title': 'java', 'collapsable': true, 'children': [['/java/android', 'android'], ['/java/java', 'java']]}, 
      {'title': 'cs', 'collapsable': true, 'children': [['/cs/mybatis', 'mybatis'], ['/cs/devexpresswinforms', 'devexpresswinforms'], ['/cs/cs', 'cs'], ['/cs/wcf', 'wcf'], ['/cs/wpf', 'wpf'], ['/cs/cs-privatefontcollection', 'cs-privatefontcollection']]}, 

      {'title': 'project', 'collapsable': true, 'children': [['/project/project', 'project'], ['/project/project-management', 'project-management']]}, 

      {'title': 'asp', 'collapsable': true, 'children': [['/asp/asp', 'asp']]}, 
      {'title': 'domain', 'collapsable': true, 'children': [['/domain/spc-controlchart', 'spc-controlchart'], ['/domain/spc-processcapability', 'spc-processcapability']]}, 
      {'title': 'education', 'collapsable': true, 'children': [['/education/education', 'education'], ['/education/querydsl', 'querydsl']]}, 
      {'title': 'etc', 'collapsable': true, 'children': [['/etc/gpt', 'gpt'], ['/etc/stock', 'stock']]}, 
    ],
    sidebarDepth: 0,
    nav: [
      { text: 'Home', link: 'https://oseongryu.github.io/', target: '_self' },
      {
        text: 'Github',
        link: 'https://github.com/oseongryu/',
      },
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated',
  },
}
