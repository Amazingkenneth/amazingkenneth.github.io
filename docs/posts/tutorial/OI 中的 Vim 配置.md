---
title: "OI 中的 Vim 配置"
date: 2022-08-10
parent: tutorial
---

# OI 中的 Vim 配置
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

[Vim](https://www.vim.org/) 是一款强大的文本编辑器，可以来 [此处](https://www.vim.org/download.php#pc) 下载，用熟后可以让你的输入和编辑速度提升许多。

不过，Vim 的快捷键可不是那么好记的，多加练习才能让它用起来得心应手，而这份 [Cheet Sheet](https://vim.rtorr.com/lang/zh_cn) 可供在线查阅，并且也藏了许多生僻的命令

此外，[CCF](https://www.noi.cn/gynoi/jsgz/2021-07-16/732450.shtml) 对此也提供了支持，意味着可以在考场上使用这份非常不错的编辑器。不过如果想在考场上配出一个接近于本地 Vim 的编辑器，还需花些时间记忆以下配置：

**$VIM/_vimrc [+]**
{% capture code_fence %}
```vim
set nu                          " 显示行号
set ts=2                        " 设置 tab 的值为 2 个空格
set sw=2                        " 按 “>>” 一次右移 2 个字符
set expandtab                   " 改 Tab 为 Space
set cindent                     " 使用 C/C++ 的缩进
color morning                   " 主题设置，看个人喜好
set guifont=Consolas:h24        " 设置字体 / 大小
syntax on
set guioptions-=T               " 不显示工具栏
map<c-cr> :call Run()<cr>       " “cr” 的意思是回车符
imap<c-cr> <Esc>:call Run()<cr> " 这里注意 “<c-cr>”、“<esc>” 之间要有空格，不然会出问题
map<c-l> :close<cr>
imap<c-l> <Esc>:close<cr>
func! Run()
	exec "w"
	if &filetype == 'cpp'         " 当打开 C++ 对应文件时进行下述操作
		exec ":silent !del %<.exe"  " （悄悄地）删除之前的可执行文件
		exec ":!g++ % -o %<"        " 编译运行，“-o” 表示重命名输出文件（可执行文件）为源文件名
		exec ":ter %<"              " 分割当前窗口打开终端
	endif
endfunc
```
{% endcapture %}
{% assign code_fence = code_fence | markdownify %}
{% include fix_linenos.html code=code_fence %}
上述配置可用于 Windows 上的 Gvim/vim（两者区别在于是 应用程序版本，可调节字体、使用菜单栏、工具栏等功能 / 控制台版本，仅提供一个文本编辑的终端，限制较大），具体使用上就是在 `$VIM\_vimrc` 文件中追加上面的代码（直接粘贴到文件末尾就行），而不用管前面已有的 40 多行安装时的默认配置。

此外，要记得先把 g++ 放入系统环境变量，否则无法编译运行 C++ 程序，可参照 [这篇文章](https://amazingkenneth.github.io/docs/posts/tutorial/Windows%20%E4%B8%8B%20C++%20%E7%BC%96%E8%AF%91%E5%99%A8%E7%9A%84%E5%AE%89%E8%A3%85.html#%E5%91%BD%E4%BB%A4%E6%8F%90%E7%A4%BA%E7%AC%A6%E4%B8%8B) 进行操作。
正常的话考试中应该要在 5 分钟内配置好这些东西，尽量避免耽误写题时间。

<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
<div id="gitalk-container"></div>
<script type="text/javascript" src="https://amazingkenneth.github.io/admin/work.js"></script>