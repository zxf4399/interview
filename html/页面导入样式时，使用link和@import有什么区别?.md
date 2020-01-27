1. link 是 HTML 标签，@import 是 css 语法
2. link 引入的样式与页面加载是同时进行的，@import 引入的样式需等页面加载完成后再加载
3. link 没有兼容性问题，@import 不兼容 ie5 及以下
4. link 可以通过 js 操作 DOM 动态引入样式表改变样式，而 @import 不可以
