---
layout: default
title: report
has_children: true
---
# 值周报告
<button class="btn js-toggle-dark-mode">Switch to Dark color scheme</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = 'Switch to dark color scheme';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = 'Return to the light scheme';
  }
});
这里是经过 Markdown 排版的值周的述职报告，欢迎关注微信公众号“有你才是一班”！

{: .fs-6 .fw-300 }
