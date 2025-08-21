---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Meiyu's
  text: 前端导航
  tagline: 基于 VitePress 的个人前端导航页面模板
  image:
    src: /logo.png
    alt: MeiyuRain
  actions:
    - text: 博客🏴‍☠️
      link: https://blog.meiyukj.cn
    - text: 导航🧭
      link: /nav/
      theme: alt
    - text: 文档📖
      link: https://docs.meiyukj.cn
features:
  - icon: 📖
    title: 文档
    details: 整理互联网收集的信息<br />如有异议按你的理解为主，不接受反驳
    link: https://docs.meiyukj.cn
    linkText: 文档
  - icon: 📘
    title: 源码分享
    details: 分享各种收集到的源码
    link: https://alist.meiyukj.cn
    linkText: 源码分享
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: https://notes.fe-mm.com/workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: https://notes.fe-mm.com/efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: https://notes.fe-mm.com/pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
