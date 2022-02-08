---
layout: default
title: "教你搭建 Gitpages 博客"
date: 2022-02-03
---

#### 如何搭建 Gitpages 博客

1. 按照[官方教程](https://docs.github.com/cn/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)新建一个名为`username.github.io`的仓库，在仓库 Settings 中找到 Pages 进行博客配置。

2. 编辑（新建） */_config.xml* 文件。
```
theme: 博客的主题
title: 主标题和标题栏上显示的东西
description: 副标题和描述
permalink: /博客的URL地址 （就是说别人看文章的时候访问的是“username.github.io/permalink”）
```

3. 由于 GitHub 用的是 Jekyll，所以不需要给每一个博客都建一个 html 文件，可以直接用 markdown 写。把 `.html` 或 `.md` 的文章放到 `_post` 文件夹中就大功告成了。

#### 注意事项

1. 建议每篇 `.md` 文章的正文前面加上这样几行
```
---
layout: default
title: "文章标题"
date: YYYY-MM-DD hh:mm:ss -0000
categories: 分类一 分类二
---
```

2. Markdown文件以 *YYYY-MM-DD-你的主题.md* 命名。
