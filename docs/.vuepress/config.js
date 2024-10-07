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
      { title: 'os', collapsable: false, children: [['/os/mac', 'mac'], ['/os/windows', 'windows'], ['/os/ubuntu', 'ubuntu'], ['/os/centos', 'centos'], ['/os/wsl', 'wsl']] },
      { title: 'docker', collapsable: false, children: [['/docker/docker-1_setup', 'docker-1_setup'], ['/docker/docker-2_using', 'docker-2_using'], ['/docker/docker-centos', 'docker-centos'], ['/docker/docker-env', 'docker-env'], ['/docker/docker-jekyll', 'docker-jekyll'], ['/docker/docker-mac-m1', 'docker-mac-m1'],['/docker/docker-mariadb', 'docker-mariadb'], ['/docker/docker', 'docker']] },
     
      { title: 'jenkins', collapsable: true, children: [['/jenkins/jenkins', 'jenkins']] },

      { title: 'asp', collapsable: true, children: [['/asp/asp', 'asp']] },
      { title: 'aws', collapsable: true, children: [['/aws/aws', 'aws']] },
      { title: 'cs', collapsable: true, children: [['/cs/cs', 'cs']] },
      { title: 'dbms', collapsable: true, children: [['/dbms/oracle', 'oracle']] },
      { title: 'deploy', collapsable: true, children: [['/deploy/heroku', 'heroku']] },
      { title: 'domain', collapsable: true, children: [['/domain/spc-controlchart', 'domain']] },
      { title: 'education', collapsable: true, children: [['/education/education', 'education']] },
      { title: 'etc', collapsable: true, children: [['/etc/gpt', 'etc']] },
      { title: 'flutter', collapsable: true, children: [['/flutter/flutter-ubuntu', 'flutter']] },
      { title: 'hadoop', collapsable: true, children: [['/hadoop/hadoop', 'hadoop']] },
      { title: 'java', collapsable: true, children: [['/java/java', 'java']] },
      { title: 'javascript', collapsable: true, children: [['/javascript/javascript', 'javascript']] },
      { title: 'project', collapsable: true, children: [['/project/project', 'project']] },
      { title: 'python', collapsable: true, children: [['/python/python', 'python']] },
      { title: 'react', collapsable: true, children: [['/react/react-boilerplate', 'react']] },
      { title: 'rn', collapsable: true, children: [['/rn/rn', 'rn']] },
      { title: 'software', collapsable: true, children: [['/software/chrome', 'software']] },
      { title: 'springboot', collapsable: true, children: [['/springboot/springboot-lecture', 'springboot']] },
      { title: 'vue', collapsable: true, children: [['/vue/vue', 'vue']] },
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
