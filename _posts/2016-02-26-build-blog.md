---
layout: post
title: "建立属于自己的博客"
subtitle: "开辟自己的一片天地"
category: "网站建设"
tags: [网站,Github,jekyll]
---
{% include JB/setup %}
---
* content
{:toc}

# 前言 #
---

博客(blog)以网络作为载体，方便快捷的发布个人或团体想表达的任何创作的内容，并与互联网上的人分享。

自己建立的博客可以有自己的域名、空间和页面风格，最主要的是有最大限度的管理权限。

本篇文章描述了如何利用Github Pages和jekyll建立自己的一个博客系统。

# Github Pages#
---

GitHub Pages免费的静态站点，三个特点：免费托管、自带主题、支持自制页面和Jekyll。

> 选择Github Pages搭建博客有以下几个原因:

> - 搭建简单而且免费；

> - 支持静态脚本；

> - 可以绑定你的域名；

> - DIY自由发挥，动手实践一些有意思的东西git,markdown,bootstrap,jekyll；

> - 理想写博环境，git+github+markdown+jekyll；

本节介绍了如何建立Github Pages以及关于Github Pages的常用操作。

## Github注册 & 建立仓库 ##


在建立Guthub pages前要完成github注册和仓库建立等基础知识。



> 参见另一篇文章：[Git工具](http://www.zkv5.com/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/2016/02/25/git-tools/) 中关于Github的注册和建立仓库部分。

## 建立自己的Github Pages ##

登录GitHub新建一个仓库，命名为:USERNAME.github.com。（**USERNAME是你的Github的用户名**）

## 克隆到本地 ##

克隆Github Pages的仓库到本地

```
$ git clone git@github.com:USERNAME/USERNAME.github.com.git
```

做完这一步，当前目录下就会多出一个目录:USERNAME.github.com。这个文件夹就是你的博客目录。

## 添加模板 ##

> 如果你的博客目录下海没有任何模板

本地下载基于jekyll的博客模板到Github Pages目录下。

```
$ cd username.github.com # 进入博客目录下
$ git pull origin master # 先同步远程文件，后面的参数会自动连接你远程的文件
$ git status             # 查看本地自己修改了多少文件
$ git add <files>        # 添加远程不存在的git文件
```

> 如果你想在别人的Github Pages上进行修改
> 例如:以我的这个博客为模板

```
$ git clone git@github.com:zongkaizhang/zongkaizhang.github.com.git
$ mv zongkaizhang.github.com USERNAME.github.com # 修改成你的Github pages名称
$ cd USERNAME.github.com # 进入博客目录下
$ rm -rf .git            # 删除以前版本管理信息
$ git init
$ git pull origin master # 先同步远程文件，后面的参数会自动连接你远程的文件
$ git status             # 查看本地自己修改了多少文件
$ git add <files>        # 添加远程不存在的git文件
```
本地克隆别人的Git pages仓库，改成你的Git Pages仓库名称

## 推送 ##

本地提交至Github上的仓库

```
$ git commit * -m "description" # 提交
$ git push origin master        # 推送到远程服务器上
```

# jekyll #
---

jekyll是一种简单的、适用于博客的、静态网站生成引擎。

它使用一个模板目录作为网站布局的基础框架，支持Markdown、Textile等标记语言的解析，提供了模板、变量、插件等功能，最终生成一个完整的静态Web站点。

本节介绍了本地jekyll环境的搭建，方便调试你自己的博客系统，如博客主题的更改和推送文章的查看。

## Ruby ##

### 下载 ###

> Ruby官网下载地址:[http://rubyinstaller.org/](http://rubyinstaller.org/)

到上面下载地址下载最新版本的Ruby安装包。

### 安装 ###

双击Ruby安装包开始进行安装，到下面页面这一步时，需点击中间那个选项，这样就会自动添加关于Ruby的环境变量：

<a >
    <img src="{{ site.baseurl }}/img/blog/ruby_install.png">
</a>

### 验证 ###

安装成功后，借助Gitbash来验证Ruby是否安装成功。

在桌面或任意一个文建健空白位置右击鼠标，选择Git Bash Here，进入到Gitbash界面。

输入`ruby.exe –v`，回车查看Ruby版本。

输入`gem –v`，回车查看gem版本。

<a >
    <img src="{{ site.baseurl }}/img/blog/ruby_v.png">
</a>

### 配置gem源 ###

`gem source`可以查看gem源，一般默认的gem源在国内是不能用的，需要更换至国内的淘宝提供的源。（国外不需要此步骤）

```
gem sources --remove https://rubygems.org/ # 移除默认gem源
gem sources --add https://ruby.taobao.org/ # 添加淘宝gem源
```

<a >
    <img src="{{ site.baseurl }}/img/blog/gem_source.png">
</a>

## jykell ##

### 安装 ###

`gem install Jekyll`命令开始安装jekyll，可能时间较长，耐心等待。

安装完成后可以通过`jekyll –v`查看jekyll版本号。

<a >
    <img src="{{ site.baseurl }}/img/blog/jekyll_v.png">
</a>

### 验证 ###

进入你的博客目录，通过`jekyll s`启动jekyll服务。

> 以我的博客为例子进行演示


```
$ cd zongkaizhang.github.com
$ jekyll s
```

<a >
    <img src="{{ site.baseurl }}/img/blog/jekyll_paginate.png">
</a>

提示我们没有jekyll-paginate，那就用gem安装jekyll-paginate。

<a >
    <img src="{{ site.baseurl }}/img/blog/jekyll_paginate_c.png">
</a>

继续启动jekyll

<a >
    <img src="{{ site.baseurl }}/img/blog/jekyll_feed.png">
</a>

提示我们没有jekyll-feed，那就用gem安装jekyll-feed。

<a >
    <img src="{{ site.baseurl }}/img/blog/jekyll_feed_c.png">
</a>

继续启动jekyll

<a >
    <img src="{{ site.baseurl }}/img/blog/jekyll_succes.png">
</a>

Bingo！打开浏览器，输入`http://127.0.0.1:4000`或`http://localhost:4000`就可以在本地看到博客的页面。

<a >
    <img src="{{ site.baseurl }}/img/blog/blog_success.png">
</a>

**在启动jekyll服务的界面按ctrl+c 即可停止服务**

# 发布 #
---

> 本节以我自己的博客为例为大家演示发布一篇博客。

## markdown ##

我们采用markdown编辑器作为写博客的主要编写工具。

> Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。
 
>关于markdown请参考[http://wowubuntu.com/markdown/#list](http://wowubuntu.com/markdown/#list)


## 新建文档 ##

在博客目录下输入命令`rake post title="abc" subtitle="123" date="2016-02-25" tags=[tag1,tag2] category="category"`。

*title:文章主标题。例子中用的是abc作为主标题*

*subtitle:文章副标题。例子中用的是123作为副标题*

*date:时间。注意格式*

*tags:标签。支持多个标签。例子中设置了两个标签tag1,tag2*

*category:分类。例子中设置了分类为category*

<a >
    <img src="{{ site.baseurl }}/img/blog/post_new.png">
</a>

输入命令后，已经生成博客文本，执行git命令：git status可以看到在_post文件夹下新生成的.md文本(markdown文本)。

<a >
    <img src="{{ site.baseurl }}/img/blog/post_new_file.png">
</a>

## 填充文档 ##

打开新生成的文档，我们可以看到生成的内容有：

```
---
layout: post          # post类文章，与page类分开
title: "abc"          # 主标题
subtitle: "123"       # 副标题
category: "category"  # 分类
tags: [tag1,tag2]     # 文章标签
---
{% include JB/setup %}# 文章框架
---
* content             # 目录
                      # 以下为文章内容
```

我们在目录后面添加文章内容：`这是我的第一篇文章。`后保存。

## 本地调试 ##

博客目录下启动jekyll服务。

浏览器输入[http://localhost:4000](http://localhost:4000)。

<a >
    <img src="{{ site.baseurl }}/img/blog/home_post.png">
</a>

在主页我们看到了新发布的文章，标题，副标题，时间都与我们设置的吻合。点击文章标题进入文章页面。

<a >
    <img src="{{ site.baseurl }}/img/blog/post_new_docment.png">
</a>

文章页面显示的文章内容也没错，发布成功！

## 提交至Github服务器 ##

文章编写完成，通过Git命令提交至你的Github pages仓库内，刷新你的Github pages网址，即可看到新发布的文章。
