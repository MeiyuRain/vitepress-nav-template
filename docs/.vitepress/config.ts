import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: '/',

  lang: 'zh-CN',
  title: 'MeiyuRain',
  description: 'Meiyu的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    nav,
    sidebar,
    outline: {
      level: 'deep',
      label: '目录',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }],
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    visitor: {
      badgeId: 'maomao1996.vitepress-nav-template',
    },
    comment: {
      repo: 'maomao1996/vitepress-nav-template',
      repoId: 'R_kgDOJC09Jg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJC09Js4Cekn0',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
