---
layout: post
title: "Shell 变量"
subtitle: "变量定义的使用"
category: "开发工具"
tags: [Shell,Linux]
---
{% include JB/setup %}
---
* content
{:toc}

# 变量定义 #
---

{% highlight c++ %}
i=10
str="variable"
{% endhighlight %}

定义变量时需注意：

1. 变量名和等号之间不能有空格
2. 首个字符必须为字母（a-z，A-Z）
3. 中间不能有空格，可以使用下划线（_）
4. 不能使用标点符号
5. 不能使用bash里的关键字（可用help命令查看保留关键字）

# 变量类型 #
---

## 只读变量 ##

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变.

## 局部变量 ##

局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量.

## 环境变量 ##

所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量.

## shell变量 ##

shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行.

## 特殊变量 ##

| 变量 | 含义 |
| :--- | :---:|
| $0   | 当前脚本的文件名 |
| $n   | 递给脚本或函数的参数.n 是一个数字，表示第几个参数 |
| $#   | 传递给脚本或函数的参数个数 |
| $*   | 传递给脚本或函数的所有参数 |
| $@   | 传递给脚本或函数的所有参数 |
| $?   | 上个命令的退出状态，或函数的返回值 |
| $$   | 当前Shell进程ID |
{: rules="groups"}

* $* 和 $@ 的区别 *

$* 和 $@ 都表示传递给函数或脚本的所有参数，不被双引号(" ")包含时，都以"$1" "$2" … "$n" 的形式输出所有参数.

但是当它们被双引号(" ")包含时，"$*" 会将所有的参数作为一个整体，以"$1 $2 … $n"的形式输出所有参数；"$@" 会将各个参数分开，以"$1" "$2" … "$n" 的形式输出所有参数.


# 变量使用 #
---

使用一个定义过的变量，只要在变量名前面加美元符号（$）即可.

{% highlight c++ %}
echo $i
echo ${str}
{% endhighlight %}

变量名外面的花括号是可选的，但是为了方便解释器识别变量的边界，最好是每个变量都加上花括号.

# 删除变量 #
---

使用 unset 命令可以删除变量。语法：

{% highlight c++ %}
unset variable_name
{% endhighlight %}

变量被删除后不能再次使用；unset 命令不能删除只读变量。

