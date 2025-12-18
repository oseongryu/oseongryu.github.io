import{_ as t,c as o,o as a,a4 as r}from"./chunks/framework.C2Gk6cJW.js";const x=JSON.parse('{"title":"frontend(Nuxt.js)","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/nuxt.md","filePath":"javascript/nuxt.md","lastUpdated":1766099628000}'),n={name:"javascript/nuxt.md"};function s(i,e,c,p,d,u){return a(),o("div",null,e[0]||(e[0]=[r(`<h1 id="frontend-nuxt-js" tabindex="-1">frontend(Nuxt.js) <a class="header-anchor" href="#frontend-nuxt-js" aria-label="Permalink to &quot;frontend(Nuxt.js)&quot;">​</a></h1><h2 id="create-app" tabindex="-1">create app <a class="header-anchor" href="#create-app" aria-label="Permalink to &quot;create app&quot;">​</a></h2><pre><code>nvm use 16.17.1

yarn create nuxt-app nuxt-prac
---
Project name: nuxt-prac
Programming language: TypeScript
Package manager: Yarn
UI framework: None
Template engine: HTML
Nuxt.js modules: Axios
Linting tools: ESLint, Prettier
Testing framework: None
Rendering mode: Single Page App
Deployment target: Static(Static/Jamstack hosting)
Development tools: jsconfig.json
Continuos integration: None
Version Control System: Git
---
</code></pre><h2 id="project-setting" tabindex="-1">project setting <a class="header-anchor" href="#project-setting" aria-label="Permalink to &quot;project setting&quot;">​</a></h2><h3 id="prettier-설정" tabindex="-1">prettier 설정 <a class="header-anchor" href="#prettier-설정" aria-label="Permalink to &quot;prettier 설정&quot;">​</a></h3><pre><code>.prettierrc
</code></pre><h3 id="vscode-code-workspace-추가" tabindex="-1">vscode code-workspace 추가 <a class="header-anchor" href="#vscode-code-workspace-추가" aria-label="Permalink to &quot;vscode code-workspace 추가&quot;">​</a></h3><pre><code>VSCode &gt; File &gt; Save Workspace As...
</code></pre><h3 id="nuxt-property-decorator" tabindex="-1">nuxt-property-decorator <a class="header-anchor" href="#nuxt-property-decorator" aria-label="Permalink to &quot;nuxt-property-decorator&quot;">​</a></h3><pre><code>yarn add nuxt-property-decorator
</code></pre><h3 id="jest" tabindex="-1">jest <a class="header-anchor" href="#jest" aria-label="Permalink to &quot;jest&quot;">​</a></h3><pre><code>npm i -D ts-jest @types/jest
yarn add ts-jest @types/jest --dev
</code></pre><h2 id="jest-config-ts" tabindex="-1">jest.config.ts <a class="header-anchor" href="#jest-config-ts" aria-label="Permalink to &quot;jest.config.ts&quot;">​</a></h2><h2 id="module-exports-modulefileextensions-ts-testregex-test-spec-jsx-tsx-transform-tsx-ts-jest" tabindex="-1">module.exports = { moduleFileExtensions: [&#39;ts&#39;], testRegex: &#39;(test|spec)\\.(jsx?|tsx?)$&#39;, transform: { &#39;^.+\\tsx?$&#39;: &#39;ts-jest&#39;, }, } <a class="header-anchor" href="#module-exports-modulefileextensions-ts-testregex-test-spec-jsx-tsx-transform-tsx-ts-jest" aria-label="Permalink to &quot;module.exports = {
  moduleFileExtensions: [&#39;ts&#39;],
  testRegex: &#39;(test|spec)\\\\.(jsx?|tsx?)$&#39;,
  transform: {
    &#39;^.+\\\\tsx?$&#39;: &#39;ts-jest&#39;,
  },
}&quot;">​</a></h2><h2 id="tsconfig-json" tabindex="-1">tsconfig.json <a class="header-anchor" href="#tsconfig-json" aria-label="Permalink to &quot;tsconfig.json&quot;">​</a></h2><h2 id="compileroptions-types-nuxt-types-nuxtjs-axios-types-node-types-jest" tabindex="-1">{ &quot;compilerOptions&quot;: { &quot;types&quot;: [&quot;@nuxt/types&quot;, &quot;@nuxtjs/axios&quot;, &quot;@types/node&quot;, &quot;@types/jest&quot;] }, } <a class="header-anchor" href="#compileroptions-types-nuxt-types-nuxtjs-axios-types-node-types-jest" aria-label="Permalink to &quot;{
  &quot;compilerOptions&quot;: {
    &quot;types&quot;: [&quot;@nuxt/types&quot;, &quot;@nuxtjs/axios&quot;, &quot;@types/node&quot;, &quot;@types/jest&quot;]
  },
}&quot;">​</a></h2><h3 id="references" tabindex="-1">references <a class="header-anchor" href="#references" aria-label="Permalink to &quot;references&quot;">​</a></h3><p><a href="https://nuxtjs.org/docs/get-started/conclusion" target="_blank" rel="noreferrer">https://nuxtjs.org/docs/get-started/conclusion</a></p><h1 id="backend-springboot" tabindex="-1">backend(SpringBoot) <a class="header-anchor" href="#backend-springboot" aria-label="Permalink to &quot;backend(SpringBoot)&quot;">​</a></h1>`,19)]))}const h=t(n,[["render",s]]);export{x as __pageData,h as default};
