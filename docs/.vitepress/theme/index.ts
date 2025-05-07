// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import VueMarkdownEditor from '@kangc/v-md-editor';
// import VueMarkdownEditor from '@kangc/v-md-editor/lib/codemirror-editor';
// import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import './style.css'
import './print.css'
// highlightjs
import hljs from 'highlight.js';
// // Resources for the codemirror editor
// import Codemirror from 'codemirror';
// // mode
// import 'codemirror/mode/markdown/markdown';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/mode/vue/vue';
// // edit
// import 'codemirror/addon/edit/closebrackets';
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/edit/matchbrackets';
// // placeholder
// import 'codemirror/addon/display/placeholder';
// // active-line
// import 'codemirror/addon/selection/active-line';
// // scrollbar
// import 'codemirror/addon/scroll/simplescrollbars';
// import 'codemirror/addon/scroll/simplescrollbars.css';
// // style
// import 'codemirror/lib/codemirror.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';
import koKR from '@kangc/v-md-editor/lib/lang/ko-KR';

// https://code-farmer-i.github.io/vue-markdown-editor/Internationalization.html#modify-default-configs
// https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html#base-editor
VueMarkdownEditor.lang.use('ko-KR', koKR);
// VueMarkdownEditor.use(vuepressTheme);
// VueMarkdownEditor.use(githubTheme, {  Hljs: hljs,});
// VueMarkdownEditor.Codemirror = Codemirror;
VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
});


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('vImageViewer', vImageViewer);
    app.component('v-md-editor', VueMarkdownEditor);
  },
      setup() {
        // 라우트 가져오기
        const route = useRoute();
        // 사용하기
        imageViewer(route);
    }
} satisfies Theme
