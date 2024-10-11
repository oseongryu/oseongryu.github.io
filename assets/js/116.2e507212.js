(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{408:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"bash-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-setting"}},[s._v("#")]),s._v(" bash setting")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("export http_proxy='http://192.0.0.4:10001'\nexport https_proxy='http://192.0.0.4:10001'\n\nunset http_proxy\nunset https_proxy\n")])])]),t("h2",{attrs:{id:"npmrc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npmrc"}},[s._v("#")]),s._v(" .npmrc")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4:10001\n")])])]),t("h2",{attrs:{id:"proxy-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-setting"}},[s._v("#")]),s._v(" proxy setting")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy http://192.0.0.4:10001\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" https-proxy http://192.0.0.4:10001\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" strict-ssl "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npmjs.org/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# confirm: ~/.npmrc")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list\n")])])]),t("h2",{attrs:{id:"git-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-setting"}},[s._v("#")]),s._v(" git setting")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://stackoverflow.com/questions/783811/getting-git-to-work-with-a-proxy-server-fails-with-request-timed-out")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://gist.github.com/ozbillwang/005bd1dfc597a2f3a00148834ad3e551")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://publivate.tistory.com/281")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://lunatine.net/2015/08/12/tip-ssh-github-url-with-http-proxy/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://stackoverflow.com/questions/70603564/windows-ssh-proxycommand-usr-bin-bash-line-0-exec-nc-not-found-on-git-bash")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http.proxy=192.0.0.4:10001"')]),s._v(" clone https://github.com/oseongryu/docker-composes.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http.proxy=192.0.0.4:10001"')]),s._v(" clone git@github.com:oseongryu/docker-composes.git\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" http.proxy http://192.0.0.4:10001\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" http.sslVerify "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://copyprogramming.com/howto/how-can-i-change-the-system-proxy-from-the-command-line")]),s._v("\nnetsh winhttp "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy SERVER:PORT\nnetsh winhttp "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4:10001\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://proxy_userid:proxy_password@proxy_ip:proxy_port\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%HTTP_PROXY%\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTPS_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%HTTP_PROXY%\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.0.0.4:10001\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%HTTP_PROXY%\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTPS_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%HTTP_PROXY%\n\nnetsh winhttp "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy proxy-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks=localhost:9090"')]),s._v(" bypass-list"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),s._v("\nnetsh winhttp show proxy\nnetsh winhttp reset proxy\n\nnetsh winhttp "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4:10001\nnetsh winhttp "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4:10001"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('";\nnetsh winhttp set proxy proxy-server="')]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myproxy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sproxy:88"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" bypass-list="')]),s._v('*.foo.com"\n\n')])])]),t("h3",{attrs:{id:"gradle-properties-gradle-gradle-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-properties-gradle-gradle-properties"}},[s._v("#")]),s._v(" gradle.properties (~/.gradle/gradle.properties)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.http.proxyHost")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.http.proxyPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.https.proxyHost")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.https.proxyPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://sharplee7.tistory.com/12")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.http.proxyHost")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.http.proxyPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10001")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemProp.http.proxyUser=[userid]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemProp.http.proxyPassword=[password]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemProp.http.nonProxyHosts=[*.exclusiveurl.com|localhost]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.https.proxyHost")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.0")]),s._v(".0.4\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("systemProp.https.proxyPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemProp.https.proxyUser=[userid]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemProp.https.proxyPassword=[password]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemProp.https.nonProxyHosts=[*.exclusiveurl.com|localhost]")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);