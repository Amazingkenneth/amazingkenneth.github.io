---
title: "Windows 下 C++ 编译器的安装"
date: 2022-02-19
parent: tutorial
---
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "bb27tb3p62");
</script>

# Windows 下 C++ 编译器的安装
{: .no_toc }

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
</script>

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---
当前主流的 C++ 编译器有这样几个：
1. Clang
2. Microsoft Visual C++
3. GCC (G++) 【推荐】

## Clang
它是遵循 Apache 2.0 协议的开源编译器。它在 Windows 上的安装是最简单的，直接从 [GitHub 的仓库](https://github.com/llvm/llvm-project/releases) 上的 Assets 中找到 .exe 文件下载并安装就可以了，只是文件稍大，需要时间。

## Microsoft Visual C++
[这款](https://visualstudio.microsoft.com/zh-hans/vs/features/cplusplus/)编译器同时也是代码编辑器，并且它能够提供 Windows 原生支持，一般适用于开发大工程。如果只是平时写题、开发小程序则不建议使用，因为它所占用的空间巨大，磁盘空间占用以 10GB 计。
建议安装 Community 版本，因为其他版本仅供免费试用。

## GCC
GCC(G++) 是遵循 GNU GPLv3 协议的开源编译器，对新标准的支持最多，也是一般竞赛的默认编译环境。由于其编译工具是基于 Linux 的，为了在 Windows 上也能使用 GCC(G++) 编译器，我们需要用到一些对针对平台的 environment，例如 MinGW-w64 和 Cygwin。

### Cygwin
#### 优点
它除了 MinGW-w64 所具有的功能外，还支持 Linux 的 API，拥有完整的 Linux 环境，理论上只要是 Linux 上的源代码迁移到 Crywin 上都可以编译。
> 对于 Linux API 的支持，其实是通过 `cygwin1.dll`（约 2MB）对 Linux / Windows 进行转换的。并且在运行时需要把 `cygwin1.dll` 放入环境变量。
> 因此，它的运行速度会比 MinGW-w64 慢一些。

#### 缺点
因为它拥有完整的 Linux 环境，所以其占用磁盘空间偏大，且运行速度稍慢。

#### 安装
[这里](https://www.cygwin.com/install.html) 是 Cygwin 的官网，如果嫌下载速度太慢，可以尝试下 [这些镜像](https://www.cygwin.com/mirrors.html)。
具体安装只需运行 [setup-x86_64.exe](https://www.cygwin.com/setup-x86_64.exe)。

### MinGW-w64

#### 优点
它 **只能** 运行 C++ 的运行时库和 Windows API，不支持 Linux 的 API。
好处是占用磁盘空间小，能够编译出原生 Windows 的 exe 程序。
> 注意
>
> 使用 Windows API 时，有的接口还需要调用 `w32api.h`，例如在使用系统套接字（socket）时，需要加 `-lWs2_32` 的编译选项

#### 缺点
不支持 Linux 的那一套系统调用接口。

#### 安装
[这里](https://github.com/mmozeiko/build-gcc-mingw/releases/tag/latest) 提供比较实用的安装（包括 GCC 最新版本、MinGW-w64、GDB、Make），但它构建静态链接到编译器的依赖项，并且仅提供静态运行时库（也就是不会有 `.dll` 的依赖）。【推荐】

[Winlibs.com](https://winlibs.com/) / [GitHub上的仓库](https://github.com/brechtsanders/winlibs_mingw/releases/latest) 附带除前者有的工具外 LLVM/Clang/LLD/LLDB（可选）、Ninja、NASM、doxygen 等更多编译及调试工具的安装，不过解压后文件会较大。

[SourceForge](https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/) 上可以进行较为传统的安装，其版本一般会比 [GCC 官网](https://gcc.gnu.org) 发布的最新版本稍后，更新迭代速度较慢，而且通常是第一个稳定版本。


## 对于 OIer……
![DevC++Version](https://amazingkenneth.github.io/images/DevC++_GCC_Version.jpg)

可以发现，多数省份目前的 Windows 竞赛环境下使用的 Dev-C++ 的版本尚停留在于 2014 年 10 月发布的 GCC [4.9.2](https://gcc.gnu.org/gcc-4.9/) 版本，而如今的 [NOI Linux 2.0](https://www.noi.cn/gynoi/jsgz/2021-07-16/732450.shtml)（正式编译环境）已经用上了 GCC 9.3.0。
相较于 Dev-C++ 的 GCC 版本，NOI Linux 2.0（GCC 9.3）对`-fsanitize=address,undefined`、多数 C++20 功能提供了支持，所以 Update 一下还是很有必要的。

### But how?

#### 命令提示符下
其实，只要按照前文所说进行安装，并将新安装的目录覆盖掉原来的 [环境变量](https://baike.baidu.com/item/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F) 就可以了。

在搜索栏中搜索 `编辑系统环境变量` 然后按下图进行操作：
![PathA](https://amazingkenneth.github.io/images/PathA.png)

![PathB](https://amazingkenneth.github.io/images/PathB.png)

![PathC](https://amazingkenneth.github.io/images/PathC.png)

在文本框内输入你安装的路径中的 `bin` 文件夹的位置（形如 `C:\...\...\mingw810_64\bin`）这样可以把你的 binary 加入到环境变量中，也就是说可以直接在命令提示符中输入编译器名称（如 `gcc`）编译运行 C/C++ 程序。

#### 修改 Dev-C++ 的编译器
在 Dev-C++ 中随便运行一个 C++ 程序，在弹出的编译日志框中找到这样的两行：（对应的路径不一定完全一致）
{% capture code_fence %}
```
处理 C++ 源文件...
- C++编译器：C:\Program Files (x86)\Dev-Cpp\MinGW64\bin\g++.exe
```
{% endcapture %}
{% assign code_fence = code_fence | markdownify %}

接着在文件资源管理器中输入对应的路径，（在这个例子中是 `C;\Program Files (x86)\Dev-Cpp\` 把下载好的文件解压后放在这个地方，如果是从 `winlibs.com` 下载解压的，记得要把 `mingw64` 的文件夹名称重命名为 `MinGW64`，然后就可以了。

### 效果演示（命令提示符下）

如图所示，（随便）写一个会发生运行时错误的 C++ 程序：
![Compile](https://amazingkenneth.github.io/images/compile.png)
尝试运行，会发现并没有输出本应有的 `is a error!`
![Error Occurs](https://amazingkenneth.github.io/images/erroccurs.png)
如果想知道错误出在了哪里，可以这样做：
1. 在命令提示符中输入 `gdb`，后面跟着可执行文件的名称，这一步之前要确认编译时有开 ` -g`（生成调试信息）选项。
![Open GDB](https://amazingkenneth.github.io/images/gdb.png)
2. 在紧接着的提示符中输入 `run`（或者直接简写为 `r`）。
![Then,](https://amazingkenneth.github.io/images/run.png)
![Run](https://amazingkenneth.github.io/images/typerun.png)
3. 运行程序后会发现没有正常终止，而是返回了 `SIGSEGV`，即段错误，内存访问越界。它也明确指出了发生错误的位置：

{% capture code_fence %}
```cpp
main () at a.cpp:4
4         std::cout << s.top() << "is a error!\n";
```
{% endcapture %}
{% assign code_fence = code_fence | markdownify %}
{% include fix_linenos.html code=code_fence %}
![](https://amazingkenneth.github.io/images/causeerror.png)
最后找到错误后关闭 gdb，不能直接用 `Ctrl + C` 结束进程，而是应该输入 `quit`（或者直接简写为 `q`）。
![](https://amazingkenneth.github.io/images/quit.png)
在 gdb 的询问中回答 `Y`。
![](https://amazingkenneth.github.io/images/back.png)
对于更多 `gdb` 这一强大的调试工具的使用，详见 [Documention](https://www.sourceware.org/gdb/documentation/)。