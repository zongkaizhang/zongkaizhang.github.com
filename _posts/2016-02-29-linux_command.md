---
layout: post
title: "linux命令"
subtitle: "linux常用命令集"
category: "操作系统"
tags: [linux]
---
{% include JB/setup %}
---
* content
{:toc}

# 概述 #
---

本篇文章介绍了linux系统下的常用命令，这些命令是学习linux的最基础的知识。

# 快捷键 #
---

*常用的一些快捷键*

```
Enter键         # 执行命令
history         # 显示历史命令列表
↑/Ctrl+p        # 显示上一条命令
↓/Ctrl+n        # 显示下一条命令
Ctrl+r          # 搜寻执行过的命令
Ctrl+z          # 将执行中的命令丢到后台继续运行
Ctrl+c          # 终止执行中的命令
Ctrl+l          # 清屏，同clear
命令｜more      # 命令输出满一页暂停，按q跳出
命令｜less      # 同上一功能，但能按上下键往上下移动一列
!!              # 再次执行上一个命令
命令 !$         # 取上一个命令的参数当作此命令的参数
Esc + .         # 显示上一命令的参数、修改后执行
Ctrl+a          # 游标移回开头位置
Ctrl+e          # 游标移回最后位置
Ctrl+u          # 剪下游标前方所有文字并复制到暂存剪贴板
Ctrl+k          # 剪下游标後方所有文字并复制到暂存剪贴板
Ctrl+y          # 由暂存剪贴板贴上Ctrl+U与Ctrl+K剪下的文字
Ctrl+t          # 对调游标左侧两个字符
Ctrl+w          # 刪除游标前方的单字(Word)
Ctrl+d          # 退出Terminal，同exit
Ctrl+Shift+c    # 复制选中的文字
Ctrl+Shift+v    # 粘贴之前复制的文字到Terminal
```

# 命令学习 #
---

*一些命令的具体用法可以通过man命令查看*

```
man 命令       # 显示命令的手册內容（man=manual）
man -k 关键字  # 显示含有关键字的手冊
man -t 手册主题｜ps2pdf –> 手册主题.pdf # 将指定的手册输出成PDF
```

# 系统 #
---

*系统相关的命令*

```
date                # 显示系统日期与时间
cal                 # 显示日历
uptime              # 显示系统负载
w                   # 显示线上用户清单
whoami              # 显示目前用户名
uname -a            # 显示系统信息
cat /proc/cpuinfo   # 显示CPU信息
cat /proc/meminfo   # 显示系统RAM信息
df -h               # Disk Free 显示磁盘信息
du                  # Directory Usage显示磁盘用量
free                # 显示物理内存和Swap区信息
```

# 目录文件 #
---

*针对目录和文件的一些操作命令*

## 权限 ##

- chmod 权限数值 目录文件

变更档案或目录的存取权限为指定的权限数值chmod的ch是change，mod是mode

数值为3个八进位数字，依序代表用戶（u）、群組（g）与其他用戶（Other）权限，每个数字可为

4(或r，表示可读read）

2（或w，表示可写write）

1（或ｘ，表示可执行execute）

例：`chmod 755 myfile`

第一个数字是设定用戶权限具有所有权限（7=4+2+1）

第二个数字是设定群組权限具有读取与执行权限（5=4+1）

第三个数字设定其他人的权限为读取与执行权限

- chmod 权限字串 目录文件

r、w或x，字串前用`+`、`-`表示增加或移除，或`=`直接指派权限。

例：`chmod 777 myfile`或`chmod a+rwx myfile` 设定myfile的存取权限为所有人皆可读、可写、可执行

例：`chmod a+x myfile`所有人（all）增加执行权限

- charp 用户组 目录文件

- chown 用户名:用户组 文件目录

**上述命令可添加-R用于递归**


## 查找 ##

```
grep 样式 文件s       # 在文件s里查找符合样式的內容
grep -r 样式 目录     # 在目录里查找符合样式的內容
命令｜grep 样式       # 在命令的输出里查找符合样式的內容，如 ps aux | smb
locate 文件目录       # 查找符合的文件或目录；必須先用updatedb建立档名索引
locate -b ‘\name’     # 列出名为name的档案，沒加反斜线的话也会列出部份符合的档案
which 执行程序        # 列出可执行程序所在路径
find / -name 档名     # 由根目录开始查找文件名
```

## 显示 ##

```
ls          # 显示目前所在目录的档案清单（ls=list）
ls -l       # 显示长格式以呈现更多档案信息
ls _al      # 以长格式显示包含隐藏档在內的所有档案
ls -F       # 附加档案类型，目录附加/，执行档附加`*
cat 文件    # 显示文件內容（cat=concatenate，连接）
cat 文件1 文件2 > 文件3  # 连接文件1与2的內容并输出为文件3
more 文件       # 显示文件內容并做分页处理
head 文件       # 显示文件开头10行內容
head -nn 文件   # 显示文件开头nn行內容
tail 文件       # 显示文件倒数10行內容
tail -nn 文件   # 显示文件倒数nn行內容
```

## 修改 ##

```
cd 目录      # 切换目录到指定的目录（cd=Change Directory）
cd -；       # 切换目录到前一个目录
cd ~         # 切换目录回家目录
mkdir 目录   # 建立目录
pwd          # 显示目前位置（pwd=print Working Directory）
rm 文件      # 删除文件（rm=remove）
rm -r 目录   # 删除目录
rm -rf 目录或文件   # 强制刪除档案或目录
cp 档案1 档案2      # 复制档案1为档案2
cp -r 目录1 目录2   # 复制目录1为目录2，目录2不存在时会建立
ln -s 实体文件 链接名       # 建立符号链接
touch 文件                  # 变更档案时间为目前时间
mv 文件或目录1 文件或目录2  # 档案2不存在时是改名，档案2存在且为目录時是搬移
dd if=/dev/zero bs=1024 count=2 of=2m.file #生成一个2M的文件
```

## 解压缩 ##

```
tar cf 压缩文件.tar 要压缩文件或目录 # 將指定的文件或目录压缩到压缩文件.tar（tar=tape archice，c=create）
tar xf 压缩文件.tar                # 解压缩 压缩文件.tar（x=extract）
tar tvf 压缩文件.tar               # 不解压文件查看压缩文件内容
tar cfz 压缩文件.tar.gz            # 把.tar压缩再用GZip压缩
tar xfz 压缩文件.tar.gz            # 用GZip解压缩压缩文件.tar.gz
tar cfj 压缩文件.tar.bz2           # 把.tar压缩后再用BZip2压缩
tar xfj 压缩文件.tar.bz2           # 用BZip2解压缩.tar档案
gzip 压缩文件                      # 将文件或目录压缩为压缩文件.gz
```

# 网络 #
---

```
ifconfig       # 列出本机的IP位址
ping 主机      # ping指定的主机
whois 网域     # 显示网域主机信息
dig 网域       # 显示网域的DNS
host -a 网域   # 显示网域的DNS详细信息
wget 网址      # 下载网络文件
ssh 帐号@主机  # 用SSH登录主机
```

# 进程管理 #
---

```
ps               # 显示运行中的所有进程
ps | grep 字串   # 过滤含有字串的进程
top              # 依CPU占用率显示进程信息
kill 进程号      # 刪除指定的行程
killall 进程名   # 刪除所有指定的进程
bg               # 列出暂停或后台进程（bg=background）
fg               # 将最近一个后台进程变更到到前台（fg=foreground）
```
