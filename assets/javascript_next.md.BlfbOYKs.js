import{_ as n,c as a,o as p,a4 as e}from"./chunks/framework.C2Gk6cJW.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/next.md","filePath":"javascript/next.md","lastUpdated":1766045183000}'),l={name:"javascript/next.md"};function t(c,s,i,r,o,m){return p(),a("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>##</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/learn-starter&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd nextjs-blog</span></span>
<span class="line"><span>npm run dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs-blog --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/navigate-between-pages-starter&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### bash</span></span>
<span class="line"><span>lsof -i tcp:3000</span></span>
<span class="line"><span>kill -9 PID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs-blog --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/assets-metadata-css-starter&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs-blog --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/data-fetching-starter&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs-blog --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/dynamic-routes-starter&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs-blog --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/api-routes-starter&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app nextjs-blog --use-npm --example &quot;https://github.com/vercel/next-learn-starter/tree/master/basics-final&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx create-next-app next-js</span></span>
<span class="line"><span>npm run dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://react.semantic-ui.com/usage</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install semantic-ui-react semantic-ui-css</span></span>
<span class="line"><span>import &#39;semantic-ui-css/semantic.min.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>autoimport</span></span>
<span class="line"><span>(https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gnb</span></span>
<span class="line"><span>  &lt;Menu inverted&gt;</span></span>
<span class="line"><span>    &lt;Menu.Item</span></span>
<span class="line"><span>      name=&#39;home&#39;</span></span>
<span class="line"><span>      active={activeItem === &#39;home&#39;}</span></span>
<span class="line"><span>      onClick={this.handleItemClick}</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;Menu.Item</span></span>
<span class="line"><span>      name=&#39;messages&#39;</span></span>
<span class="line"><span>      active={activeItem === &#39;messages&#39;}</span></span>
<span class="line"><span>      onClick={this.handleItemClick}</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;Menu.Item</span></span>
<span class="line"><span>      name=&#39;friends&#39;</span></span>
<span class="line"><span>      active={activeItem === &#39;friends&#39;}</span></span>
<span class="line"><span>      onClick={this.handleItemClick}</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>  &lt;/Menu&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docu</span></span>
<span class="line"><span>https://nextjs.org/docs/advanced-features/custom-document</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install axios</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>dynamic routes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://nextjs.org/docs/routing/dynamic-routes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { useRouter } from &#39;next/router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Post = () =&gt; {</span></span>
<span class="line"><span>  const router = useRouter()</span></span>
<span class="line"><span>  const { pid } = router.query</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &lt;p&gt;Post: {id}&lt;/p&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Post</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## next/link</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## nextjs deploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git clone</span></span>
<span class="line"><span>cd next-web</span></span>
<span class="line"><span>npm install</span></span>
<span class="line"><span>npm run build</span></span>
<span class="line"><span>pm2 list</span></span>
<span class="line"><span>pm2 stop 0</span></span>
<span class="line"><span>pm2 delete 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pm2 start server.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## nextjs</span></span>
<span class="line"><span>pm2 start npm --name &#39;myserver&#39; -- start -p 3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 문자열 끝 공백</span></span>
<span class="line"><span>http://mwultong.blogspot.com/2007/02/cr-lf-enter-key-match-regex.html</span></span></code></pre></div>`,1)]))}const d=n(l,[["render",t]]);export{x as __pageData,d as default};
