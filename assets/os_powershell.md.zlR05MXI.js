import{_ as s,c as n,o as e,a4 as p}from"./chunks/framework.C2Gk6cJW.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"os/powershell.md","filePath":"os/powershell.md","lastUpdated":1755068404000}'),t={name:"os/powershell.md"};function o(l,a,i,r,c,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="원격-실행" tabindex="-1">원격 실행 <a class="header-anchor" href="#원격-실행" aria-label="Permalink to &quot;원격 실행&quot;">​</a></h2><h3 id="원격" tabindex="-1">원격 <a class="header-anchor" href="#원격" aria-label="Permalink to &quot;원격&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://lab.gamecodi.com/board/zboard.php?id=GAMECODILAB_QnA_etc&amp;no=5258&amp;z=</span></span></code></pre></div><h3 id="원격관련-오류-참조" tabindex="-1">원격관련 오류 참조 <a class="header-anchor" href="#원격관련-오류-참조" aria-label="Permalink to &quot;원격관련 오류 참조&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://m.blog.naver.com/PostView.nhn?blogId=sung487&amp;logNo=221042683798&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F</span></span></code></pre></div><h3 id="원격-powershell" tabindex="-1">원격 PowerShell : <a class="header-anchor" href="#원격-powershell" aria-label="Permalink to &quot;원격 PowerShell :&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1) Enable-PSRemoting</span></span>
<span class="line"><span>2)Azure와 원격방화벽의 인바운드 포트 5985,5986 개방</span></span></code></pre></div><h3 id="로컬-powershell" tabindex="-1">로컬 PowerShell: <a class="header-anchor" href="#로컬-powershell" aria-label="Permalink to &quot;로컬 PowerShell:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1)winrm quickconfig --force</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2)winrm get winrm/config/client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3)특정 IP에 접속하는 것을 허용</span></span>
<span class="line"><span>-- 특정 IP허용</span></span>
<span class="line"><span>Set-Item WSMan:\\localhost\\Client\\TrustedHosts -Value &quot;52.141.18.204&quot;</span></span>
<span class="line"><span>-- 전체 허용</span></span>
<span class="line"><span>Set-Item WSMan:\\localhost\\Client\\TrustedHosts -Value *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4)자동접속을 하기 위한 세팅</span></span>
<span class="line"><span>$MyCredential = Get-Credential &quot;f5074&quot;</span></span>
<span class="line"><span>$MyPassword = Read-Host &quot;Password&quot; -AsSecureString | ConvertFrom-SecureString</span></span>
<span class="line"><span>$MyPassword = $MyPassword | ConvertTo-SecureString</span></span>
<span class="line"><span>$ObjectTypeName = &quot;System.Management.Automation.PSCredential&quot;</span></span>
<span class="line"><span>$MyCredential = New-Object -TypeName $ObjectTypeName -ArgumentList &quot;f5074&quot;,$MyPassword</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>5)</span></span>
<span class="line"><span>-- 직접접속해서 확인</span></span>
<span class="line"><span>Enter-PSSession -ComputerName &quot;52.141.18.204&quot; -Credential $MyCredential</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 특정 명령어만 실행</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential $MyCredential -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;taskkill /im node.exe /f&#39;&quot;}</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential &quot;f5074&quot; -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;C:\\inetpub\\ftproot\\stop_sv.bat&#39;&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--Commit&amp;Push git</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential &quot;f5074&quot; -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;C:\\inetpub\\ftproot\\start_commit_git.bat&#39;&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--pull git</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential &quot;f5074&quot; -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;C:\\inetpub\\ftproot\\start_pull_git.bat&#39;&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 서버 종료</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential &quot;f5074&quot; -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;C:\\inetpub\\ftproot\\stop_sv.bat&#39;&quot;}</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential $MyCredential -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;taskkill /im node.exe /f&#39;&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 서버 재시작</span></span>
<span class="line"><span>Invoke-Command -ComputerName &quot;52.141.18.204&quot; -credential &quot;f5074&quot; -ErrorAction Stop -ScriptBlock {Invoke-Expression -Command:&quot;cmd.exe /c &#39;C:\\inetpub\\ftproot\\start_sv.bat&#39;&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 확인</span></span>
<span class="line"><span>f5074.koreacentral.cloudapp.azure.com:4200</span></span></code></pre></div><h3 id="보안-그룹-규칙에-의해-차단된-네트워크-연결-defaultrule-denyallinbound" tabindex="-1">보안 그룹 규칙에 의해 차단된 네트워크 연결: DefaultRule_DenyAllInBound <a class="header-anchor" href="#보안-그룹-규칙에-의해-차단된-네트워크-연결-defaultrule-denyallinbound" aria-label="Permalink to &quot;보안 그룹 규칙에 의해 차단된 네트워크 연결: DefaultRule_DenyAllInBound&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force</span></span></code></pre></div><h3 id="references" tabindex="-1">references <a class="header-anchor" href="#references" aria-label="Permalink to &quot;references&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://community.spiceworks.com/topic/2242211-azure-nsg-rdp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-5.9.0</span></span></code></pre></div>`,13)]))}const h=s(t,[["render",o]]);export{m as __pageData,h as default};
