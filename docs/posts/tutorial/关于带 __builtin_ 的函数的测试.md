---
title: "关于带 __builtin_ 的函数的测试"
date: 2022-03-08
parent: tutorial
---

# 关于诸如 `__builtin_scanf()` 等带 `__builtin_` 的函数运行效率与原函数的测试
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
据说 `scanf()` 和 `printf()` 加上 `__builtin_` 后会快很多。于是，我抱着试一试的心理对 ![3 * 10^7](https://render.githubusercontent.com/render/math?math=3\times10^7) 的数据进行了文件 I/O 测试。

**read**
{% capture code_fence %}
```cpp
#include <bits/stdc++.h>
using namespace std;
const int Maxn = 3e7;
int a[Maxn];
int main() {
  freopen("test.in", "r", stdin);
  for (int i = 0; i < 3e7; ++i)
    __builtin_scanf(" %d", &a[i]); // scanf(" %d", &a[i]);
  return 0;
}
```
{% endcapture %}
{% assign code_fence = code_fence | markdownify %}
{% include fix_linenos.html code=code_fence %}
**write**
{% capture code_fence %}
```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
  freopen("test.in", "w", stdout);
  for (int i = 0; i < 3e7; ++i)
    __builtin_printf("%d ", rand()); // printf("%d ", rand());
  return 0;
}
```
{% endcapture %}
{% assign code_fence = code_fence | markdownify %}
{% include fix_linenos.html code=code_fence %}

这里没有加 `srand(time(0));` 是因为使用默认种子可以减少其随机性。

## 测试结果

|`Function` \ Time (s) |Test 1|Test 2|Test 3| Average Time |
| :---: | :--- | :--- | :--- | :--- | :---: |
|`__builtin_scanf()`|3.322|3.322|3.365|3.336333333|
|`scanf()`|3.384|3.362|3.367|3.371|
|`__builtin_printf()`|2.789|2.779|2.798|2.788666667|
|`printf()`|2.752|2.863|2.73|2.781666667|

由此可以看出，是否带 `__builtin_` 其实对运行效率的影响不大，在卡常时如果需要再加上 `#define scanf __builtin_scanf` 也没什么。

### 测试记录截屏

在 Deepin Linux 20.4 上进行测试，CPU 主频 2.51GHz。

- [__builtin_printf](https://github.com/Amazingkenneth/amazingkenneth.github.io/blob/main/images/time%20__builtin_printf.jpg)
- [printf](https://github.com/Amazingkenneth/amazingkenneth.github.io/blob/main/images/time%20printf.jpg)
- [__builtin_scanf](https://github.com/Amazingkenneth/amazingkenneth.github.io/blob/main/images/time%20__builtin_scanf.jpg)
- [scanf](https://github.com/Amazingkenneth/amazingkenneth.github.io/blob/main/images/time%20scanf.jpg)
<div id="gitalk-container"></div>
<script type="text/javascript" src="https://amazingkenneth.github.io/admin/work.js"></script>