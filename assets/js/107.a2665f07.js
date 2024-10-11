(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{399:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[s._v("#")]),s._v(" 사용법")]),s._v(" "),a("h2",{attrs:{id:"_1-루비설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-루비설치"}},[s._v("#")]),s._v(" 1. 루비설치")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ruby\nruby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n\n* ruby update\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" gcc gcc-c++, readline-devel, zlib-devel, libyaml-devel, libffi-devel, openssl-devel, autoconf, automake, libtool, bison\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSL")]),s._v(" https://rvm.io/mpapis.asc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gpg2 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSL")]),s._v(" https://rvm.io/pkuczynski.asc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gpg2 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://get.rvm.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" stable "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ruby")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://get.rvm.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" stable "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ruby")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".10\n\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile.d/rvm.sh\nor "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /home/azureadmin/.rvm/scripts/rvm\n\nrvm reload\nrvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".10\nrvm reinstall ruby-2.6.10\nruby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])])]),a("h2",{attrs:{id:"rbenv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rbenv"}},[s._v("#")]),s._v(" rbenv")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rbenv 설치")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rbenv ruby-build\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rbenv 설치 확인")]),s._v("\nrbenv versions\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 버전")]),s._v("\nrbenv "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n\nrbenv "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),s._v(".4\nrbenv global "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".10\nruby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" libssl-dev\n\n")])])]),a("h2",{attrs:{id:"_2-지킬-jekyll-설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-지킬-jekyll-설치하기"}},[s._v("#")]),s._v(" 2. 지킬 (Jekyll) 설치하기")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("gem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jekyll\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" minima\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bundler\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jekyll-feed\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tzinfo-data\n")])])]),a("h2",{attrs:{id:"_3-로컬에서-블로그-생성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-로컬에서-블로그-생성하기"}},[s._v("#")]),s._v(" 3. 로컬에서 블로그 생성하기")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("jekyll new my-awesome-site\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-awesome-site\nbundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll serve\nbundle "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" webrick\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 블로그 저장 폴더로 이동한다.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 인코딩 에러 발생시 다음의 코드를 실행한다.")]),s._v("\nchcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65001")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 지킬 실행")]),s._v("\nbundle "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\njekyll serve\n\nbundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll serve "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[j]ekyll'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 테마변경")]),s._v("\n\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" just-the-docs\nbundle show just-the-docs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 1. Gemfile 에 다음을 추가")]),s._v("\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"just-the-docs"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 2. _config.yml 파일에 다음을 추가")]),s._v("\ntheme: just-the-docs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 3. 터미널에서 다음을 실행")]),s._v("\nbundle "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Azure에서 Jekyll을 bat로 실행하기")]),s._v("\nAzure에 Jekyll 설정을 완료하고, 원격에서 실행하려면 host를 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0로 세팅해야 하지만,\nAzure의 가상환경의 경우 DNS주소로 host를 설정할 수 없을 때, _site는 DNS주소로 생성하고\n실행 시에는 원격에서 실행하는 형태로하고 build를 하지 않도록 해서 처리함\n\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DEV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("workspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("f5074.github.io\n:start cmd /c bundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll serve "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),s._v(" f5074.koreacentral.cloudapp.azure.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("\n:timeout /t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n:bundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll serve --skip-initial-build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("\n\ncmd /c bundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll serve "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),s._v(" f5074.koreacentral.cloudapp.azure.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("\nIF "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ERRORLEVEL%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" goto ERROR\nELSE goto EXEC\n\n:EXEC\nbundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll serve --skip-initial-build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("\n\n:ERROR\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" error\npause\n")])])]),a("h3",{attrs:{id:"centos-방화벽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-방화벽"}},[s._v("#")]),s._v(" CentOS 방화벽")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 방화벽 상태 확인")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--state")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 방화벽 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firewalld\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start firewalld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 서비스로 방화벽 해제 / 제거")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --remove-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --remove-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 특정 포트 방화벽 해제")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 방화벽설정이후 reload 필요")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\nfirewall-cmd --list-all\n\nsystemctl stop firewalld\nsystemctl start firewalld\nsystemctl status firewalld\n")])])]),a("h3",{attrs:{id:"jekyll-setting-on-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jekyll-setting-on-docker"}},[s._v("#")]),s._v(" jekyll setting on docker")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("yum install ruby\nruby -v\nyum install -y git-core zlib zlib-devel gcc-c++ patch readline readline-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison curl sqlite-devel\ngem install jekyll\nyum install which\ncurl -L https://get.rvm.io | bash -s stable --ruby\ncurl -L https://get.rvm.io | bash -s stable --ruby=2.6.10\nyum install -y git-core zlib zlib-devel gcc-c++ patch readline readline-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison curl sqlite-devel\ngit clone https://github.com/sstephenson/rbenv.git .rbenvcd\necho 'export PATH=\"$HOME/.rbenv/bin:$PATH\"' >> ~/.bash_profile\necho 'eval \"$(rbenv init -)\"' >> ~/.bash_profile\nexec $SHELL\ngit clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build\necho 'export PATH=\"$HOME/.rbenv/plugins/ruby-build/bin:$PATH\"' >> ~/.bash_profile\nexec $SHELL\nyum install which\ncurl -L https://get.rvm.io | bash -s stable --ruby\ncurl -L https://get.rvm.io | bash -s stable --ruby=2.6.10\nsource /etc/profile.d/rvm.sh\nrvm install 2.6.10\ncd ~\nls -al\ngit clone https://github.com/sstephenson/rbenv.git .rbenvcd\necho 'export PATH=\"$HOME/.rbenv/bin:$PATH\"' >> ~/.bash_profile\necho 'eval \"$(rbenv init -)\"' >> ~/.bash_profile\nexec $SHELL\ngit clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build\ngit clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build\necho 'export PATH=\"$HOME/.rbenv/plugins/ruby-build/bin:$PATH\"' >> ~/.bash_profile\nexec $SHELL\nll\nnetstat -tnlp\ni\nbundle exec jekyll serve --skip-initial-build --host 0.0.0.0 --port 8088 > /dev/null 2>&1 &\n")])])]),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" reference")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://shryu8902.github.io/_posts/2018-06-22-jekyll-on-windows/\nhttps://min9nim.github.io/2018/07/jekyll-theme/\n백그라운드실행: https://taewooblog.tistory.com/152\n방화벽해제: https://ux.stories.pe.kr/162\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);