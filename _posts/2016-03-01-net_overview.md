---
layout: post
title: "计算机网络概述"
subtitle: "计算机网络学习"
category: "计算机"
tags: [网络,计算机,TCP/IP]
---
{% include JB/setup %}
---
* content
{:toc}

# 概述 #
---

计算机网络（computer network）通常人们说的网络就是指电脑网络，也就是消息网络，是利用通信设备和线路将地理位置不同的、功能独立的多个计算机系统连接起来，以功能完善的网络软件实现网络的硬件、软件及资源共享和信息传递的系统。

简单的说即连接两台或多台计算机进行通信的系统。

# 分层 #
---

*为什么要分层？*

要实现网络通信是非常复杂的工作，有了分层，我们就可以：

- 不同厂商的设备无论在接口还是功能上都能够兼容。
- 设备可以专注与某一层功能，交换机工作在第二层，路由器工作在第三层，光纤就是物理层的设备。
- 简化了网络通信的复杂性，方便厂商和个人专注于某一层或者某个模块甚至某一个协议就可。
- 方便网络故障排错
- 有了以上有点，就可以加快通信网络技术的发展

如今关于通信网络的分层主要有两种，OSI和TCP/IP分层模型，两种模型可以相互转化：

<a>
    <img src="{{ site.baseurl }}/img/net/OSI_TCP-IP.png">
</a>

## OSI ##

OSI模型，即开放式通信系统互联参考模型(Open System Interconnection,OSI/RM,Open Systems Interconnection Reference Model)，是国际标准化组织(ISO)提出的一个试图使各种计算机在世界范围内互连为网络的标准框架，简称OSI。

OSI/RM协议是由ISO(国际标准化组织）制定的，它有三个基本的功能：提供给开发者一个必须的、通用的概念以便开发完善、可以用来解释连接不同系统的框架。

关于OSI七层模型的具体功能和实现的范例如下图所示：

<a>
    <img src="{{ site.baseurl }}/img/net/OSI.png">
</a>

## TCP/IP ##

TCP/IP通常被认为是一个四层协议系统，如图下图所示。
每一层负责不同的功能

<a>
    <img src="{{ site.baseurl }}/img/net/tcp_ip.png">
</a>

# 分类 #
---

计算机网络的分类有很多方式。

## 覆盖范围 ##

按照其覆盖范围分成以下类别：

- 个人网
	- 无线局域网
- 局域网
	- 有线局域网
		- 以太网
		- 令牌环
		- 光纤分布式数据接口
	- 无线局域网
		- 蓝牙
		- Wi-Fi
		- ZigBee
		- MMDS
		- SMDS
- 校园网
- 城域网
- 广域网
	- 异步传输模式
	- 帧中继
	- SDH

## 功能 ##

按照不同节点之间的功能关系分为：

- B/S(浏览器/服务器)结构
- C/S(客户端/服务器)结构
- 多层结构
- P2P(点对点)结构

## 拓扑结构 ##

按照计算机网络的拓扑结构可分为：

- 线型拓扑星型网(Line)
- 星型拓扑星型网(Star)
- 网型拓扑网型网(Mesh)
- 环型拓扑环型网(Ring)
- 树状拓扑树型网(Tree)
- 总线拓扑总线网(Bus)
- 混合拓扑(Fully)

<a>
    <img src="{{ site.baseurl }}/img/net/NetworkTopologies.png">
</a>

## 传输媒体 ##

按照传输媒体（Transmission Media）可分为：

* 有线传输（Wire Transmission）
	* 光导纤维
	* 同轴电缆
	* 双绞线
* 无线传输（Wireless Transmission）
	+ 卫星传输（Satellite Microwave）
	+ 红外线传输（Infrared Transmission）
	+ 激光传输（Laser Transmission）
	+ 无线电波

