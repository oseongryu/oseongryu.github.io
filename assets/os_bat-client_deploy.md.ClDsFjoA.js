import{_ as n,c as a,o as p,a4 as e}from"./chunks/framework.C2Gk6cJW.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"os/bat-client_deploy.md","filePath":"os/bat-client_deploy.md","lastUpdated":1770275445000}'),t={name:"os/bat-client_deploy.md"};function l(i,s,o,c,d,u){return p(),a("div",null,s[0]||(s[0]=[e(`<h3 id="_1-상대경로-사용" tabindex="-1">1. 상대경로 사용 <a class="header-anchor" href="#_1-상대경로-사용" aria-label="Permalink to &quot;1. 상대경로 사용&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>copy ..\\bin\\Release\\lib\\*.dll</span></span>
<span class="line"><span>rename *.dll *.deploy</span></span></code></pre></div><h3 id="_2-절대경로-사용" tabindex="-1">2. 절대경로 사용 <a class="header-anchor" href="#_2-절대경로-사용" aria-label="Permalink to &quot;2. 절대경로 사용&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@echo off</span></span>
<span class="line"><span>setlocal</span></span>
<span class="line"><span>:: set location</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set year=%date:~0,4%</span></span>
<span class="line"><span>set month=%date:~5,2%</span></span>
<span class="line"><span>if &quot;%month:~0,1%&quot; == &quot; &quot; set month=0%month:~1,1%</span></span>
<span class="line"><span>set day=%date:~8,2%</span></span>
<span class="line"><span>if &quot;%day:~0,1%&quot; == &quot; &quot; set day=0%day:~1,1%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set hour=%time:~0,2%</span></span>
<span class="line"><span>if &quot;%hour:~0,1%&quot; == &quot; &quot; set hour=0%hour:~1,1%</span></span>
<span class="line"><span>set min=%time:~3,2%</span></span>
<span class="line"><span>if &quot;%min:~0,1%&quot; == &quot; &quot; set min=0%min:~1,1%</span></span>
<span class="line"><span>set secs=%time:~6,2%</span></span>
<span class="line"><span>if &quot;%secs:~0,1%&quot; == &quot; &quot; set secs=0%secs:~1,1%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set current_dttm=%year%%month%%day%%hour%%min%%secs%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set dll_dir= &quot;C:\\DEV\\&quot;</span></span>
<span class="line"><span>set deploy_client_dir= &quot;C:\\DEV\\Deploy&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: mkdir</span></span>
<span class="line"><span>mkdir %deploy_client_dir%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: copy</span></span>
<span class="line"><span>copy %dll_dir%\\*.dll %deploy_client_dir%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: rename</span></span>
<span class="line"><span>rename %deploy_client_dir%\\*.dll *.deploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 년월일 시분초 세팅</span></span>
<span class="line"><span>set year=%date:~0,4%</span></span>
<span class="line"><span>set month=%date:~5,2%</span></span>
<span class="line"><span>if &quot;%month:~0,1%&quot; == &quot; &quot; set month=0%month:~1,1%</span></span>
<span class="line"><span>set day=%date:~8,2%</span></span>
<span class="line"><span>if &quot;%day:~0,1%&quot; == &quot; &quot; set day=0%day:~1,1%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set hour=%time:~0,2%</span></span>
<span class="line"><span>echo %hour%</span></span>
<span class="line"><span>if &quot;%hour:~0,1%&quot; == &quot; &quot; set hour=0%hour:~1,1%</span></span>
<span class="line"><span>set min=%time:~3,2%</span></span>
<span class="line"><span>if &quot;%min:~0,1%&quot; == &quot; &quot; set min=0%min:~1,1%</span></span>
<span class="line"><span>set secs=%time:~6,2%</span></span>
<span class="line"><span>if &quot;%secs:~0,1%&quot; == &quot; &quot; set secs=0%secs:~1,1%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set current_dttm=%year%%month%%day%%hour%%min%%secs%</span></span></code></pre></div><h3 id="reference" tabindex="-1">reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;reference&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://stackoverflow.com/questions/774175/show-a-popup-message-box-from-a-windows-batch-file</span></span></code></pre></div>`,6)]))}const m=n(t,[["render",l]]);export{h as __pageData,m as default};
