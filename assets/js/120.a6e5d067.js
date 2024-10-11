(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{412:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"ubuntu-선택후-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-선택후-설치"}},[s._v("#")]),s._v(" ubuntu 선택후 설치")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("비밀번호는 App에서 확인\n")])])]),t("h2",{attrs:{id:"default-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-setting"}},[s._v("#")]),s._v(" default setting")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" net-tools\n")])])]),t("h2",{attrs:{id:"ssh-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-설정"}},[s._v("#")]),s._v(" ssh 설정")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. Port 주석해제 및 포트변경")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - '#Port 22' => 'Port 10022'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 시스템 포트 0 ~ 1023 번은 사용이 불가능")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. ListenAddress 값 주석 해제")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - '#ListenAddress 0.0.0.0' => 'ListenAddress 0.0.0.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. PasswordAuthentication 값 주석 해제")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - '#PasswordAuthentication yes' => 'PasswordAuthentication yes'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" start\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v("/tcp\n")])])]),t("h2",{attrs:{id:"sftp-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sftp-설정"}},[s._v("#")]),s._v(" sftp 설정")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/usr/lib/openssh/sftp-server\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config\n\n\nMatch LocalPort "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v("\n      X11Forwarding no\n      AllowTcpForwarding no\n      PermitTTY no\n      ForceCommand cvs server\n\n\n      X11Forwarding no\n      AllowTcpForwarding no\n      PermitTTY no\n      ForceCommand cvs server\n\nSubsystem       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v("    /usr/lib/openssh/sftp-server\n")])])]),t("h2",{attrs:{id:"sftp-설정2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sftp-설정2"}},[s._v("#")]),s._v(" sftp 설정2")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-sftp-server\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" ubuntu-userland\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v(" userland@192.168.0.1\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config\nSubsystem "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v(" /usr/lib/openssh/sftp-server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Subsystem "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v(" internal-sftp\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" start\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" restart\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-oPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v(" userland@192.168.0.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v(" userland@192.168.0.1:/home/userland/ ~/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v(" ~/test.sql userland@192.168.0.1:/home/userland/\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);