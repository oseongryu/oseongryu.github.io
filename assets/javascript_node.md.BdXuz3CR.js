import{_ as t,c as n,o as s,a4 as a}from"./chunks/framework.C2Gk6cJW.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/node.md","filePath":"javascript/node.md","lastUpdated":1770275445000}'),o={name:"javascript/node.md"};function r(i,e,p,l,c,d){return s(),n("div",null,e[0]||(e[0]=[a(`<h2 id="proxy-setting" tabindex="-1">proxy setting <a class="header-anchor" href="#proxy-setting" aria-label="Permalink to &quot;proxy setting&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://192.0.0.4:10001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https-proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://192.0.0.4:10001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> strict-ssl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://registry.npmjs.org/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># confirm: ~/.npmrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><h3 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h3><pre><code>nvm list
nvm install 12.22.9
nvm alias default 12.22.9
</code></pre><h2 id="추가로-할것" tabindex="-1">추가로 할것 <a class="header-anchor" href="#추가로-할것" aria-label="Permalink to &quot;추가로 할것&quot;">​</a></h2><pre><code>nodejs express 게시판
mongodb  https://javafa.gitbooks.io/nodejs_server_basic/content/chapter12.html
nodejs sqlite  https://kamang-it.tistory.com/entry/NodeJSExpressSQLiteNodejs-express%EC%83%81%EC%97%90%EC%84%9C-SQLite%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EC%9D%84-%EC%98%88%EC%A0%9C%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0
</code></pre><h2 id="노드-설치후-확인" tabindex="-1">노드 설치후 확인 <a class="header-anchor" href="#노드-설치후-확인" aria-label="Permalink to &quot;노드 설치후 확인&quot;">​</a></h2><pre><code>노드 확인
node -v

npm 확인
npm -v

node를 입력하고 직접 작성해도 됨

1) npm init -y를 실행 시 package.json 파일 생성
2) npm install을 하면 package.json에 있는 모듈을 설치함
</code></pre><h2 id="unable-to-verify-the-first-certificate" tabindex="-1">unable to verify the first certificate <a class="header-anchor" href="#unable-to-verify-the-first-certificate" aria-label="Permalink to &quot;unable to verify the first certificate&quot;">​</a></h2><pre><code>npm config set registry http://registry.npmjs.org/ --global 

해당 프로젝트에서만 사용하는 모듈 모카설치 (Fromt-End 단위 테스트 프레임워크)
1) npm install mocha --save-dev
2) npm install mocha -g  전역(C:\\Users\\사용자명\\AppData\\Roaming\\npm)으로 사용
3) npm link mocha  전역으로 설치한 모듈을 심볼릭링크로 사용

npm list
npm list -g
npm ls
npm ls -depth=0
http://webframeworks.kr/tutorials/nodejs/api-server-by-nodejs-01/
</code></pre><p>1.다운로드</p><pre><code>https://nodejs.org/en/download/
</code></pre><p>2.설치</p><pre><code>mkdir codlab-nodejs
cd codlab-nodejs
npm init
</code></pre><p>3.app.js const http = require(&#39;http&#39;);</p><pre><code>const hostname = &#39;127.0.0.1&#39;;const port = 3000;

const server = http.createServer((req, res) =&gt; {
res.statusCode = 200;
res.setHeader(&#39;Content-Type&#39;, &#39;text/plain&#39;);
res.end(&#39;Hello World\\n&#39;);});

server.listen(port, hostname, () =&gt; {
console.log(\`Server running at http://\${hostname}:\${port}/\`);});
</code></pre><p>4.node app.js</p><p>5.npm start</p><p>6.curl -X GET &#39;127.0.0.1:3000&#39;</p><pre><code>port number ended with
</code></pre><p>7.mysql</p><pre><code># 에러발생시 
Client does not support authentication protocol requested by server; consider upgrading MySQL client
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;비밀번호&#39;
</code></pre><p>8.스트리밍</p><pre><code>## Streaming
https://javafa.gitbooks.io/nodejs_server_basic/content/chapter11.html
https://medium.com/better-programming/video-stream-with-node-js-and-html5-320b3191a6b6
https://github.com/daspinola/video-stream-sample
</code></pre><p>9.채팅</p><pre><code>##https://github.com/adityabansod/quickgroupchat
</code></pre><p>10.Node.js 얼굴인식</p><pre><code>https://medium.com/@muehler.v/node-js-opencv-for-face-recognition-37fa7cb860e8
git clone https://turtle.scm.azurewebsites.net:443/turtle.git
##배포방법https://m.blog.naver.com/PostView.nhn?blogId=cck223&amp;logNo=220957983702&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F
##배포방법https://www.freecodecamp.org/news/how-to-deploy-your-super-cool-node-app-to-azure-from-github-47ebff6c5448/
배포시에는 반드시 80포트와 npm start를 적용해줘야함 
</code></pre><p>11.배포</p><pre><code>##azure authentication failed
https://stackoverflow.com/questions/35834117/git-error-fatal-authentication-failed/35847427
control Panel --&gt; Credential Manager --&gt; Manage Windows Credentials  제어판 자격증명
https://stackoverflow.com/questions/34837173/authentication-failed-for-azure-git

https://www.codeproject.com/Articles/1133660/Deploy-Node-js-in-Microsoft-Azure
</code></pre><p>12.Angularjs Angular ## angular + nodejs-express <a href="https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f" target="_blank" rel="noreferrer">https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f</a><a href="https://github.com/jsmuster/angular-node-express" target="_blank" rel="noreferrer">https://github.com/jsmuster/angular-node-express</a></p><pre><code>##사용법 https://forest71.tistory.com/158?category=653288
##소스 https://github.com/gujc71/angularBoard
</code></pre><p>13.Azure에 Angular 배포</p><pre><code>## https://github.com/Azure/ng-deploy-azure
## VSCode사용해서 Deploy https://dzone.com/articles/deploy-an-angular-app-from-visual-studio-code-to-a-1
##Angular Cli 배포 https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/

npm install
npm install -g @angular/cli
ng install kuduscript -g

ng build -prod

ng update @angular/cli @angular/core
</code></pre><p>14.Angular 관련</p><pre><code>https://github.com/Azure/ng-deploy-azure
https://dzone.com/articles/deploy-an-angular-app-from-visual-studio-code-to-a-1
https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/
https://github.com/gujc71/angularBoard
https://forest71.tistory.com/158?category=653288
kudu angular cli https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/
angular cli deploy to azure https://johnpapa.net/deploy-angular-to-azure-vsts-angular-cli/
</code></pre><p>15.Angular-Cli를 Azure에 배포 (20191004금)</p><pre><code>npm install -g @angular/cli
ng new hello-world --defaults
cd hello-world
ng add @azure/ng-deploy

git push https://turtle.scm.azurewebsites.net:443/turtle.git HEAD:master --tags -f


# Invalid Host header ng serve를 실행했을 떄 포트로는 접근이 가능하지만 url로 접근 시 에러가 발생함
## 서버실행시 --disalbeHostCheck
cd C:\\inetpub\\wwwroot\\node
ng serve --host 0.0.0.0 --port 4200 --disableHostCheck
pause


https://tbang.tistory.com/124
webpack.config.js
var config = {
:
devServer: {
contentBase: path.resolve(__dirname, &#39;./src&#39;),
disableHostCheck: true,
host: &quot;0.0.0.0&quot; // default : 127.0.0.1
}
:

module.exports = config;

C:\\inetpub\\wwwroot\\node\\node_modules\\@angular-devkit\\build-angular\\src\\utils

##Angular/-cli 공부
https://poiemaweb.com/angular-cli

http://www.gisdeveloper.co.kr/?p=5566


http://lab.gamecodi.com/board/zboard.php?id=GAMECODILAB_QnA_etc&amp;no=5258&amp;z=

#Running Batch Script on remote Server via PowerShell
https://stackoverflow.com/questions/32125893/running-batch-script-on-remote-server-via-powershell

https://svrstudy.tistory.com/75

https://forest71.tistory.com/158

서버 종료 https://stackoverflow.com/questions/39074678/how-to-end-ng-serve-or-firebase-serve
</code></pre><p>17.Angular 모듈 추가</p><pre><code>ng g c menu4 --module home
ng g c
</code></pre><p>18.mongodb</p><pre><code>https://javafa.gitbooks.io/nodejs_server_basic/content/chapter12.html
db.collection.insert({test:&#39;newValue&#39;})
db.collection.find()
</code></pre><p>19.Angular 기본사이트 만들기</p><pre><code>https://www.a-mean-blog.com/ko/blog/Angular-2/%EA%B8%B0%EB%B3%B8%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0
</code></pre><p>20.JSON 관련오류 크롬에서 적용 안됨</p><pre><code>--disable-web-security --user-data-dir
Oracle 11g Express 다운로드 oracle.com/database/technologies/oracle-database-software-downloads.html
</code></pre><p>21.Bootstrap</p><pre><code>https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-tabs.php
</code></pre>`,48)]))}const u=t(o,[["render",r]]);export{g as __pageData,u as default};
