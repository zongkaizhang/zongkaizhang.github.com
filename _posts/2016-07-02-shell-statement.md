---
layout: post
title: "Shell 语句"
subtitle: "Shel常用语句"
category: "开发工具"
tags: [Shell,Linux]
---
{% include JB/setup %}
---
* content
{:toc}

# if else语句 #
---

{% highlight c++ %}
if [ expression ]; then
	statement;
elif [ expression ]; then
	statement;
else
	statement;
fi
{% endhighlight %}

如果哪个expression为ture,执行其后面的语句,否则执行else后面的语句.

# case esac语句 #
---

{% highlight c++ %}
case 值 in
模式1)
	command
	;;
模式2）
	command
	;;
*)
	command
	;;
esac
{% endhighlight %}

case工作方式如上所示.取值后面必须为关键字 in,每一模式必须以右括号结束.取值可以为变量或常数.匹配发现取值符合某一模式后,其间所有命令开始执行直至 ;;

取值将检测匹配的每一个模式.一旦模式匹配,则执行完匹配模式相应命令后不再继续其他模式.如果无一匹配模式,使用星号 * 捕获该值,再执行后面的命令.

# for语句 #
---

{% highlight c++ %}
for 变量 in 列表
do
	command
done
{% endhighlight %}

列表是一组值（数字、字符串等）组成的序列,每个值通过空格分隔.每循环一次,就将列表中的下一个值赋给变量.

in 列表是可选的,如果不用它,for 循环使用命令行的位置参数.

# while语句 #
---

while循环用于不断执行一系列命令,也用于从输入文件中读取数据;命令通常为测试条件.
{% highlight c++ %}
while command
do
	statement
done
{% endhighlight %}
命令执行完毕,控制返回循环顶部,从头开始直至测试条件为假.

# until语句 #
---

until 循环执行一系列命令直至条件为 true 时停止.until 循环与 while 循环在处理方式上刚好相反.一般while循环优于until循环,但在某些时候,也只是极少数情况下,until 循环更加有用.

{% highlight c++ %}
until command
do
	statement
done
{% endhighlight %}

command 一般为条件表达式,如果返回值为 false,则继续执行循环体内的语句,否则跳出循环

# 跳出循环语句 #
---

## break ##

break命令允许跳出所有循环(终止执行后面的所有循环),在嵌套循环中,break 命令后面还可以跟一个整数,表示跳出第几层循环.

{% highlight c++ %}
break (n)
{% endhighlight %}

## continue ##

continue命令与break命令类似,只有一点差别,它不会跳出所有循环,仅仅跳出当前循环

