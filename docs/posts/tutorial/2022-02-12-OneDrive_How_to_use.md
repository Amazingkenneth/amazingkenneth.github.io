---
title: "OneDrive 介绍"
date: 2022-02-12
parent: tutorial
---

# OneDrive 使用指北
{: .no_toc }

<button class="btn js-toggle-dark-mode">Switch to dark color scheme</button>

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
</script>
Windows 10、Windows 11 中其实已经预装了 OneDrive，新用户一般会分配 5GB 的空间，OneDrive 上的文件可以在 Microsoft 的几乎所有办公应用中进行文件同步。

Setup 文件在 [这里](https://go.microsoft.com/fwlink/p/?LinkID=2182910) ，下载安装即可
当你安装完 OneDrive 后，每个文件 或 文件夹后面都会有如下图的图标。

![图标含义](https://amazingkenneth.github.io/images/meanings%20of%20the%20OneDrive%20Folders.png)

当它是“仅联机可用”时，每次打开（或双击）它时，都会从云端下载文件或文件夹（索引），从而节约了磁盘空间。

要想更改文件属性，只需右键单击，如下图
![右键单击](https://amazingkenneth.github.io/images/Right-click.png)

