import{_ as n,c as a,o as e,a4 as p}from"./chunks/framework.C2Gk6cJW.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"os/centos-docker.md","filePath":"os/centos-docker.md","lastUpdated":1755068404000}'),l={name:"os/centos-docker.md"};function t(o,s,c,i,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h3 id="centos-docker" tabindex="-1">centos docker <a class="header-anchor" href="#centos-docker" aria-label="Permalink to &quot;centos docker&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker cp centos-jekyll:/root/guide ~/git-personal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker cp ~/git-personal/template-jekyll centos-jekyll:/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker cp ~/git-personal/template-jekyll centos-jekyll:/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker cp -R &quot;~/git-personal/template-jekyll&quot; \`ls &quot;~/git-personal/template-jekyll&quot; | grep -v &quot;.git&quot;\` centos-jekyll:/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo docker images</span></span>
<span class="line"><span>sudo docker run -it -d --name centos-jekyll -p 8088:8088 oseongryu/centos-jekyll:0.0.1</span></span>
<span class="line"><span>sudo docker container ls -as</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo docker start centos-jekyll</span></span>
<span class="line"><span>sudo docker restart centos-jekyll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo docker exec -it centos-jekyll /bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>netstat -tnlp</span></span>
<span class="line"><span>sudo docker exec -it centos-jekyll /bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bundle exec jekyll serve --ssl-key ssl/localhost.key --ssl-cert ssl/localhost.crt</span></span></code></pre></div>`,2)]))}const _=n(l,[["render",t]]);export{u as __pageData,_ as default};
