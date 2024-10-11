(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{364:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"nginx-setting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-setting"}},[t._v("#")]),t._v(" Nginx Setting")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" etc/yum.repos.d/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" nginx.repo\n\n---\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx repo\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("baseurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://nginx.org/packages/centos/7/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$basearch")]),t._v("/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n---\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" nginx\n\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("/tcp\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v("/tcp\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v("/tcp\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reload")]),t._v("\nfirewall-cmd --list-ports\nfirewall-cmd --list-all\n\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-forward-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(":proto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp:toport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reload")]),t._v("\nfirewall-cmd --list-all\n\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --remove-forward-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(":proto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp:toport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reload")]),t._v("\nfirewall-cmd --list-all\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/nginx/conf.d/default.conf\n\nsystemctl start nginx\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" nginx\n\n")])])]),a("h3",{attrs:{id:"nginx-ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-ssl"}},[t._v("#")]),t._v(" Nginx SSL")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". 파일합치기\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("도메인인증서"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("체인인증서"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("루트인증서"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("도메인명.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("원하는 이름"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n반드시 vi이나 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" 명령어로 강제 개행\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/nginx/site-available/default\n\n---\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("도메인명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        ssl on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ssl_certificate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("세가지 인증서 합친 파일 경로"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ssl_certificate_key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("개인키 파일 경로"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ssl_prefer_server_ciphers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                proxy_pass http://127.0.0.1:3000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("노드 서버 실행을 위한 proxy_pass 설정"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nupstream api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.1:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass http://api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name test.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_certificate test.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_certificate_key test.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_prefer_server_ciphers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass http://192.168.0.1:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n/etc/nginx/conf.d\n\nopenssl rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("기존인증서파일"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-out")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("새로운인증서파일"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n---\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/nginx/conf.d/default.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" nginx start\nsystemctl stop nginx\n\nsystemctl restart nginx\nsystemctl stop nginx\nsystemctl start nginx\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /var/log/nginx/error.log\n\n* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(": Permission denied"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" connecting to upstream\n\nsetsebool "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" httpd_can_network_connect "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/nginx/nginx.conf\n\n* fopen:Permission denied\n")])])]),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://velog.io/@twkim8548/Nginx%EC%97%90%EC%84%9C-SSL-%EC%A0%81%EC%9A%A9%ED%95%B4%EC%84%9C-Https-%EB%A1%9C-%EC%A0%91%EC%86%8D-%EB%90%98%EA%B2%8C-%ED%95%B4%EB%B3%BC%EA%B9%8C\n\nhttps://stackoverflow.com/questions/5877929/what-does-upstream-mean-in-nginx\n\nhttps://cert.crosscert.com/nginx-ssl%EC%9D%B8%EC%A6%9D%EC%84%9C-%EC%84%A4%EC%B9%98-%EB%A7%A4%EB%89%B4%EC%96%BC/\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);