(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{370:function(e,t,l){"use strict";l.r(t);var o=l(12),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("docker cp centos-jekyll:/root/guide ~/git-personal")]),e._v(" "),t("p",[e._v("docker cp ~/git-personal/template-jekyll centos-jekyll:/root")]),e._v(" "),t("p",[e._v("docker cp ~/git-personal/template-jekyll centos-jekyll:/root")]),e._v(" "),t("p",[e._v('docker cp -R "~/git-personal/template-jekyll" '),t("code",[e._v('ls "~/git-personal/template-jekyll" | grep -v ".git"')]),e._v(" centos-jekyll:/root")]),e._v(" "),t("p",[e._v("sudo docker images\nsudo docker run -it -d --name centos-jekyll -p 8088:8088 oseongryu/centos-jekyll:0.0.1\nsudo docker container ls -as")]),e._v(" "),t("p",[e._v("sudo docker start centos-jekyll\nsudo docker restart centos-jekyll")]),e._v(" "),t("p",[e._v("sudo docker exec -it centos-jekyll /bin/bash")]),e._v(" "),t("p",[e._v("netstat -tnlp\nsudo docker exec -it centos-jekyll /bin/bash")]),e._v(" "),t("p",[e._v("bundle exec jekyll serve --ssl-key ssl/localhost.key --ssl-cert ssl/localhost.crt")])])}),[],!1,null,null,null);t.default=s.exports}}]);