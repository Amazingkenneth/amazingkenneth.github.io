---
layout: default
title: "Windows 下 C++ 编译器的安装"
date: 2022-02-19
---
# Windows (64 位系统) 下 C++ 编译器的安装
众所周知，如果想在 Windows 上使用免费而开源的 C++ 编译器，就只能使用 GCC/G++。原因是 Microsoft 的 Visual C++ 的编辑 / 编译器是需要付费的，而 GCC/G++ 的编译工具原本是在 Linux 上运行的，所以为了在 Windows 上也能使用 GCC/G++ 编译器，我们需要用到一些对针对平台的 environment。

## MinGW-w64

### 优点
它 **只能** 运行 C++ 的运行时库和 Windows API，不支持 Linux 的 API。
好处是占用磁盘空间小，能够编译出原生 Windows 的 exe 程序。
> 注意
> 使用 Windows API 时，有的接口还需要调用 `w32api.h`，例如在使用系统套接字（socket）时，需要加 `-lWs2_32` 的编译选项

### 缺点
不支持 Linux 的那一套系统调用接口。

### 安装
[这里](https://winlibs.com/) 提供下载速度较快的安装，同时包含 GCC 最新版本（推荐）

[在这儿](https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/) 可以进行较为传统的安装，一般的安装版本会比 [GCC 官网](https://gcc.gnu.org) 发布的最新版本稍后，而且一般是第一个稳定版本。

## Cygwin
### 优点
它除了 MinGW-w64 所具有的功能外，还支持 Linux 的 API，拥有完整的 Linux 环境，理论上只要是 Linux 上的源代码迁移到 Crywin 上都可以编译。
> 对于 Linux API 的支持，其实是通过 `cygwin1.dll`（约 2MB）对 Linux / Windows 进行转换的。并且在运行时需要把 `cygwin1.dll` 放入环境变量。
> 因此，它的运行速度会比 MinGW-w64 慢一些。

### 缺点
因为它拥有完整的 Linux 环境，所以其占用磁盘空间偏大，且运行速度稍慢。

### 安装
[这里](https://www.cygwin.com/install.html) 是 Cygwin 的官网，如果嫌下载速度太慢，可以尝试下 [这些镜像](https://www.cygwin.com/mirrors.html)。
具体安装只需运行 [setup-x86_64.exe](https://www.cygwin.com/setup-x86_64.exe)。

## 对于 OIer……
![DevC++Version](https://amazingkenneth.github.io/images/DevC++_GCC_Version.jpg)

可以发现，多数省份目前的 Windows 竞赛环境下使用的 Dev-C++ 的版本尚停留在于 2014 年 10 月发布的 GCC [4.9.2](https://gcc.gnu.org/gcc-4.9/) 版本，而如今的 [NOI Linux 2.0](https://www.noi.cn/gynoi/jsgz/2021-07-16/732450.shtml)（正式编译环境）已经用上了 GCC 9.3.0。
相较于 Dev-C++ 的 GCC 版本，NOI Linux 2.0（GCC 9.3）对`-fsanitize=address,undefined`、多数 C++20 功能提供了支持，所以 Update 一下还是很有必要的。

### But how?
其实，只要按照前文所说进行安装，并将新安装的目录覆盖掉原来的 [环境变量](https://baike.baidu.com/item/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F) 就可以了。

在搜索栏中搜索“环境变量”然后按下图进行操作：
![PathA](https://amazingkenneth.github.io/images/PathA.png)

![PathB](https://amazingkenneth.github.io/images/PathB.png)

![PathC](https://amazingkenneth.github.io/images/PathC.png)

在地址栏中输入你安装的路径中的`bin`文件夹的位置（形如“C:\...\...\mingw810_64\bin”），并把原来 `Dev-C++` 的路径删除，保存后就可以了。
