(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{366:function(e,t,a){"use strict";a.r(t);var n=a(10),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"원격-실행"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#원격-실행"}},[e._v("#")]),e._v(" 원격 실행")]),e._v(" "),t("h3",{attrs:{id:"원격"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#원격"}},[e._v("#")]),e._v(" 원격")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://lab.gamecodi.com/board/zboard.php?id=GAMECODILAB_QnA_etc&no=5258&z=\n")])])]),t("h3",{attrs:{id:"원격관련-오류-참조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#원격관련-오류-참조"}},[e._v("#")]),e._v(" 원격관련 오류 참조")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://m.blog.naver.com/PostView.nhn?blogId=sung487&logNo=221042683798&proxyReferer=https%3A%2F%2Fwww.google.com%2F\n")])])]),t("h3",{attrs:{id:"원격-powershell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#원격-powershell"}},[e._v("#")]),e._v(" 원격 PowerShell :")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1) Enable-PSRemoting\n2)Azure와 원격방화벽의 인바운드 포트 5985,5986 개방\n")])])]),t("h3",{attrs:{id:"로컬-powershell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#로컬-powershell"}},[e._v("#")]),e._v(" 로컬 PowerShell:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('1)winrm quickconfig --force\n\n2)winrm get winrm/config/client\n\n3)특정 IP에 접속하는 것을 허용\n-- 특정 IP허용\nSet-Item WSMan:\\localhost\\Client\\TrustedHosts -Value "52.141.18.204"\n-- 전체 허용\nSet-Item WSMan:\\localhost\\Client\\TrustedHosts -Value *\n\n4)자동접속을 하기 위한 세팅\n$MyCredential = Get-Credential "f5074"\n$MyPassword = Read-Host "Password" -AsSecureString | ConvertFrom-SecureString\n$MyPassword = $MyPassword | ConvertTo-SecureString\n$ObjectTypeName = "System.Management.Automation.PSCredential"\n$MyCredential = New-Object -TypeName $ObjectTypeName -ArgumentList "f5074",$MyPassword\n\n\n5)\n-- 직접접속해서 확인\nEnter-PSSession -ComputerName "52.141.18.204" -Credential $MyCredential\n\n-- 특정 명령어만 실행\nInvoke-Command -ComputerName "52.141.18.204" -credential $MyCredential -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'taskkill /im node.exe /f\'"}\nInvoke-Command -ComputerName "52.141.18.204" -credential "f5074" -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'C:\\inetpub\\ftproot\\stop_sv.bat\'"}\n\n--Commit&Push git\nInvoke-Command -ComputerName "52.141.18.204" -credential "f5074" -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'C:\\inetpub\\ftproot\\start_commit_git.bat\'"}\n\n--pull git\nInvoke-Command -ComputerName "52.141.18.204" -credential "f5074" -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'C:\\inetpub\\ftproot\\start_pull_git.bat\'"}\n\n-- 서버 종료\nInvoke-Command -ComputerName "52.141.18.204" -credential "f5074" -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'C:\\inetpub\\ftproot\\stop_sv.bat\'"}\nInvoke-Command -ComputerName "52.141.18.204" -credential $MyCredential -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'taskkill /im node.exe /f\'"}\n\n-- 서버 재시작\nInvoke-Command -ComputerName "52.141.18.204" -credential "f5074" -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:"cmd.exe /c \'C:\\inetpub\\ftproot\\start_sv.bat\'"}\n\n-- 확인\nf5074.koreacentral.cloudapp.azure.com:4200\n')])])]),t("h3",{attrs:{id:"보안-그룹-규칙에-의해-차단된-네트워크-연결-defaultrule-denyallinbound"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#보안-그룹-규칙에-의해-차단된-네트워크-연결-defaultrule-denyallinbound"}},[e._v("#")]),e._v(" 보안 그룹 규칙에 의해 차단된 네트워크 연결: DefaultRule_DenyAllInBound")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force\n")])])]),t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" references")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://community.spiceworks.com/topic/2242211-azure-nsg-rdp\n\nhttps://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-5.9.0\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);