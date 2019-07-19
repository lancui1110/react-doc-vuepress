module.exports = {
  title: 'React 入门学习',
  description: 'React, React Router, umijs, dva, mobx, rudux',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    // ['meta', { name: 'twitter:card', content: 'summary' }],
    // ['meta', { name: 'twitter:description', content: '基礎から学ぶ Vue.js サポートページ' }],
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:site_name', content: '基礎から学ぶ Vue.js' }],
    // ['meta', { property: 'og:title', content: '基礎から学ぶ Vue.js' }],
    // ['meta', { property: 'og:image', content: 'https://cr-vue.mio3io.com/summary.png' }],
    ['link', { rel: 'icon', href: '/icon.png' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/react-doc-vuepress/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '微博', link: 'https://baidu.com' }
    ],
    sidebar: ['/guide/', '/guide/react-router', '/guide/umijs', '/guide/dva', '/guide/ant-design-pro', '/guide/easy-mock'],
    // sidebar: {
    //   '/': [''],
    //   '/guide/': [''],
    //   '/guide/react-router': ['react-router.md']
    // },
    // repo: 'mio3io/cr-vue',
    repoLabel: 'GitHub',
    // docsRepo: 'mio3io/cr-vue',
    editLinks: true,
    docsDir: 'docs',
    // editLinkText: 'プルリクする',
    // 侧边栏配置
    sidebarDepth: 0 // 侧边栏显示2级
  }
}
