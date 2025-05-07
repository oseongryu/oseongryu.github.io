import { defineUserConfig } from 'vitepress-export-pdf'

export default defineUserConfig({
  routePatterns: [
     '!/'
    , '!/index.html'
    , '!/editor/*'
    , '!/examples/*'
    , '!/page_bike/*'
    , '!/page_environment/*'
    , '!/page_partner/*'
    , '!/page_shinhan/*'
    , '!/page_weblog/*'
    , '!/page_crm/common-menu-add.html'
    , '!/page_crm/event-page-register.html'
  ],
})