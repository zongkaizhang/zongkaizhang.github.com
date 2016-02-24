---
layout: post
title: "计算机的编年史"
subtitle: "站在巨人的肩膀上"
category: "计算机"
tags: [计算机,系统架构]
---
{% include JB/setup %}
---
* content
{:toc}

## 纯机械计算机 ##
---
> 工具是人类思维精华的凝聚
<table class="table">
	<tr>
		<th>时间</th><th>人物</th><th>事件</th>
	</tr>
	<tr>
		<td>1614</td><td>约翰·纳皮耶<br>John Napier</td><td>发表了一篇论文 ，其中提到他发明了一种可以进行四则运算和方根运算的精巧装置。</td>
	</tr>
	<tr>
		<td>1623</td><td>威廉·史卡克<br>Wilhelm Schickard</td><td>制作了一个能进行6 位数以内加减法运算，并能通过铃声输出答案的"计算钟"。该装置通过转动齿轮来进行操作。</td>
	</tr>
	<tr>
		<td>1668</td><td>塞缪·尔莫尔<br>Samuel Morl</td><td>制作了一个非十进制的加法装置，适宜计算钱币。</td>
	</tr>
	<tr>
		<td>1822</td><td nowrap="true">查尔斯·巴贝奇</br>Charles Babbage</td><td>设计了差分机和分析机，其设计理论非常超前，类似于百年后的电子计算机，特别是利用卡片输入程序和数据的设计被后人所采用。</td>
	</tr>
	<tr>
		<td>1834</td><td>查尔斯·巴贝奇</br>Charles Babbage</td><td>设想制造一台通用分析机，在只读存储器(穿孔卡片)中存储程序和数据 。并于1840 年将操作位数提高到了40 位，并基本实现了控制中心(CPU)和存储程序的设想，而且程序可以根据条件进行跳转，能在几秒内做出一般的加法，几分钟内做出乘、除法。</td>
	</tr>
	<tr>
		<td>1848</td><td>乔治·布尔</br>George Boole</td><td>创立二进制代数学，提前近一个世纪为现代二进制计算机的发展铺平了道路。</td>
	</tr>
	<tr>
		<td>1890</td><td>赫尔曼·霍尔瑞斯</br>Herman Hollerith</td><td>借鉴Babbage 的发明，用穿孔卡片存储数据，并设计了机器。仅用6周就帮助美国人口普查部门得出了准确的人口统计数据(如果用人工方法，大概要花10 年时间)。</td>
	</tr>
	<tr>
		<td>1896</td><td>赫尔曼·霍尔瑞斯</br>Herman Hollerith</td><td>创办了制表机器公司Tabulating Machine Computer，即IBM 公司的前身。</td>
	</tr>
</table>

## 半机械半电子计算机 ##
---
> 继电器的天下

<table class="table">
	<tr>
		<th>时间</th><th>代表</th><th>事件</th>
	</tr>
	<tr>
		<td>1906</td><td>李·德·富雷斯特<br>Lee De Forest</td><td>发明电子管，为电子计算机的发展奠定了基础。</td>
	</tr>
	<tr>
		<td>1924</td><td>IBM</td><td>IBM 公司成立，从此一个具有划时代意义的公司诞生。</td>
	</tr>
	<tr>
		<td>1935</td><td>IBM</td><td>推出IBM 601 机。它能在一秒钟内算出乘法的穿孔卡片计算机 。</td>
	</tr>
	<tr>
		<td>1937</td><td>阿兰·M·图灵<br>Alan M.Turing</td><td>出版了他的论文 ，并提出了被后人称之为"图灵机"的数学模型。</td>
	</tr>
	<tr>
		<td>1937</td><td>乔治·斯蒂比兹<br>George Stibitz</td><td>在贝尔实验室展示了用继电器表示二进制的装置。尽管仅仅是个展示品，但却是第一台二进制电子计算机。</td>
	</tr>
	<tr>
		<td>1940</td><td>塞缪尔·威廉姆斯<br>Samuel Williams<br>乔治·斯蒂比兹<br>George Stibitz</td><td>制造成功了一个能进行复杂运算的计算机。该机器大量使用了继电器，并借鉴了一些电话技术，采用了先进的编码技术。</td>
	</tr>
	<tr>
		<td>1941</td><td nowrap="true">约翰·阿塔那索夫<br>John Vincent Atanasoff</td><td>和学生Berry 完成了能解线性代数方程的计算机，取名叫"ABC "(Atanasoff-Berry Computer)，用电容作存储器 ，用穿孔卡片作辅助存储器，那些孔实际上是"烧"上去的，时钟频率是60Hz，完成一次加法运算用时一秒。</td>
	</tr>
	<tr>
		<td>1943</td><td>Mark I</td><td>美国研制自动顺序控制计算机，整个机器有51 英尺长 、5 吨重 、75万个零部件。该机使用了3304 个继电器，60 个开关作为机械只读存储器。程序存储在纸带上 ，数据可以来自纸带或卡片阅读器。Mark I 被用来为美国海军计算弹道火力表。</td>
	</tr>
	<tr>
		<td>1943</td><td>Williams&Stibitz</td><td>完成了"Model II Relay Calculator"的可编程计算机，使用纸带输入程序和数据。它运行可靠，每个数用7个继电器表示，可进行浮点运算</td>
	</tr>
</table>

## 第一代 ##
---
> 真空电子管大显神威

<table>
	<tr>
		<th>时间</th><th>代表</th><th>事件</th>
	</tr>
	<tr>
		<td>1946</td><td>John W.Mauchly<br>J.Presper Eckert</td><td>ENIAC诞生 ，这是第一台真正意义上的数字电子计算机。开始研制于1943 年，完成于1946 年，重30 吨，用了18000 个电子管，功率25 千瓦，主要用于计算弹道和氢弹的研制。</td>
	</tr>
	<tr>
		<td>1947</td><td>William B.Shockley<br>John Bardeen<br>Walter H.Brattain</td><td>在Bell 实验室发明了晶体管，开辟了电子时代新纪元。</td>
	</tr>
	<tr>
		<td>1949</td><td>Wilkes </td><td>和他的小组制成了一台可以存储程序的计算机，输入输出设备仍是纸带</td>
	</tr>
	<tr>
		<td>1949</td><td>John von Neumann</td><td>EDVAC--第一台使用磁带的计算机。这是一个突破，可以多次在磁带上存储程序。</td>
	</tr>
	<tr>
		<td>1950</td><td>Yoshiro Nakamats</td><td>发明了软磁盘 ，其销售权由IBM公司获得 。由此开创了存储时代的新纪元。</td>
	</tr>
	<tr>
		<td>1951</td><td nowrap="true">Grace Murray Hopper </td><td>完成了高级语言编译器。</td>
	</tr>
	<tr>
		<td>1951</td><td>J.Presper Eckert<br>John Mauchly</td><td>UNIVAC-1 --第一台商用计算机系统诞生</td>
	</tr>
	<tr>
		<td>1953</td><td></td><td>磁芯存储器被开发出来。</td>
	</tr>
	<tr>
		<td>1954</td><td>John Backus </td><td>在IBM和他的研究小组开始开发FORTRAN(FORmula TRANslation) ，1957 年完成。这是一种适合科学研究使用的计算机高级语言。</td>
	</tr>
	<tr>
		<td>1957</td><td>IBM</td><td>开发成功第一台点阵式打印机。</td>
	</tr>
</table>

## 第二代 ##
---
> 晶体管更胜一筹

<table>
	<tr>
		<th>时间</th><th>代表</th><th>事件</th>
	</tr>
	<tr>
		<td>1958</td><td>Robert Noyce</td><td>带领团队相继研发出集成电路诞生，微处理器。</td>
	</tr>
	<tr>
		<td>1959</td><td nowrap="true">Grace Murray Hopper</td><td>开始开发COBOL(COmmon Business-Oriented Language)语言 ，完成于1961 年。</td>
	</tr>
	<tr>
		<td>1960</td><td></td><td>ALGOL --第一个结构化程序设计语言推出。</td>
	</tr>
	<tr>
		<td>1961</td><td>Kennth Iverson</td><td>在IBM公司推出APL 编程语言</td>
	</tr>
	<tr>
		<td>1964</td><td>IBM</td><td>发布PL/1 编程语言。</td>
	</tr>
	<tr>
		<td>1964</td><td>IBM</td><td>发布IBM 360 首套系列兼容机。</td>
	</tr>
</table>

## 第三代 ##
---
> 小规模集成电路

<table>
	<tr>
		<th>时间</th><th>代表</th><th>事件</th>
	</tr>
	<tr>
		<td>1964</td><td>DEC</td><td>发布PDB-8小型计算机。</td>
	</tr>
	<tr>
		<td>1965</td><td></td><td>摩尔定律发表，处理器的晶体管数量每18 个月增加一倍，价格下降一半。</td>
	</tr>
	<tr>
		<td>1965</td><td>Lofti Zadeh</td><td>创立模糊逻辑，用来处理近似值问题。</td>
	</tr>
	<tr>
		<td>1965</td><td nowrap="true">Thomas E.Kurtz<br>John Kemeny</td><td>完成BASIC(Beginner All-purpose Symbolic In-struction Code)语言的开发。特别适合计算机教育和初学者使用，得以广泛推广。</td>
	</tr>
	<tr>
		<td>1965</td><td>Douglas Englebart</td><td>提出鼠标器的设想，但没有进一步研究，直到1983年才被苹果电脑公司大量采用。</td>
	</tr>
	<tr>
		<td>1965</td><td></td><td>第一台超级计算机CD6600 开发成功。</td>
	</tr>
	<tr>
		<td>1967</td><td>Niklaus Wirth</td><td>开始开发PASCAL 语言，1971 年完成。</td>
	</tr>
	<tr>
		<td>1968</td><td>Robert Noyce</td><td>和他的几个朋友创办了Intel 公司。</td>
	</tr>
	<tr>
		<td>1968</td><td>Seymour Paper</td><td>和他的研究小组在MIT 开发了LOGO 语言。</td>
	</tr>
	<tr>
		<td>1969</td><td>ARPANet</td><td>ARPANet(Advanced Research Projects Agency Network)计划开始启动，这是现代Internet 的雏形。1970年完成</td>
	</tr>
	<tr>
		<td>1969</td><td></td><td>第一个网络协议标准RFC 推出。</td>
	</tr>
	<tr>
		<td>1970</td><td>Intel</td><td>第一块RAM芯片推出，容量1KB 。</td>
	</tr>
	<tr>
		<td>1970</td><td>Ken Thomson<br>Dennis Ritchie</td><td>开始开发UNIX操作系统。</td>
	</tr>
	<tr>
		<td>1970</td><td></td><td>Forth编程语言开发完成。</td>
	</tr>
	<tr>
		<td>1971</td><td>Marcian E.Hoff</td><td>在Intel 公司开发成功第一块微处理器4004，含2300 个晶体管，字长为4 位，时钟频率为108KHz，每秒执行6 万条指令。</td>
	</tr>
	<tr>
		<td>1972</td><td>Dennis Ritche</td><td>C 语言开发完成。这是一个非常强大的语言，特别受人喜爱。</td>
	</tr>
	<tr>
		<td>1972</td><td>Hewlett Packard</td><td>发明了第一个手持计算器。</td>
	</tr>
</table>

## 第四代 ##
---
> 大/超大规模集成电路

<table>
	<tr>
		<th>时间</th><th>代表</th><th>事件</th>
	</tr>
	<tr>
		<td>1972</td><td>Intel</td><td>推出8008 微处理器。</td>
	</tr>
	<tr>
		<td>1972</td><td>ARPANet</td><td>开始走向世界，Internet 革命拉开序幕。</td>
	</tr>
	<tr>
		<td>1974</td><td></td><td>第一个具有并行计算机体系结构的CLIP-4 推出。</td>
	</tr>
	<tr>
		<td>1974</td><td>Intel</td><td>发布其8 位微处理器芯片8080。</td>
	</tr>
	<tr>
		<td>1975</td><td>Bill Gates<br>Paul Allen</td><td>完成了第一个在MIT(麻省理工学院)的Altair 计算机上运行的BASIC 程序。创办了Microsoft公司</td>
	</tr>
	<tr>
		<td>1976</td><td>Stephen Wozinak<br>Stephen Jobs</td><td>创办苹果计算机公司，并推出其Apple Ⅰ计算机。</td>
	</tr>
	<tr>
		<td>1978</td><td>Intel</td><td>发布16位微处理器8086 。</td>
	</tr>
	<tr>
		<td>1979</td><td>Intel</td><td>推出准16 位的8088 来满足市场对低价处理器的需要，并被IBM 的第一代PC 机所采用。该处理器的时钟频率为4.77MHz 、8MHz和10MHz，大约有300 条指令，集成了29000 个晶体管。</td>
	</tr>
	<tr>
		<td>1979</td><td>Intel</td><td>低密软磁盘诞生。</td>
	</tr>
	<tr>
		<td>1979</td><td>IBM</td><td>开始开发计算机(Microsoft开发操作系统)</td>
	</tr>
	<tr>
		<td>1981</td><td>Xerox</td><td>开始致力于图形用户界面、图标、菜单和定位设备(如鼠标)的研制。</td>
	</tr>
	<tr>
		<td>1981</td><td>IBM<br>Microsoft</td><td>MS-DOS1.0 和PC-DOS1.0 发布。</td>
	</tr>
	<tr>
		<td>1982</td><td></td><td>基于TCP/IP 协议的Internet 初具规模</td>
	</tr>
	<tr>
		<td>1982</td><td>Intel</td><td>80286 发布，时钟频率提高到20MHz 、增加了保护模式、可访问16MB 内存、支持1GB以上的虚拟内存、每秒执行270 万条指令、集成了13.4 万个晶体管。</td>
	</tr>
	<tr>
		<td>1983</td><td>IBM</td><td>IBM XT 机发布，增加了10MB 硬盘、128KB 内存、一个软驱、单色显示器、一台打印机、可以增加一个8087 数字协处理器。当时的价格为5000 美元。</td>
	</tr>
	<tr>
		<td>1983</td><td>IBM<br>Microsoft</td><td>MS-DOS 2.0 和PC-DOS 2.0 增加了类似UNIX 分层目录的管理形式。</td>
	</tr>	
	<tr>
		<td>1984</td><td></td><td>DNS(Domain Name Server)域名服务器发布，互联网上有1000 多台主机运行。</td>
	</tr>
	<tr>
		<td>1984</td><td>Compaq</td><td>开始开发IDE 接口，能以更快的速度传输数据，并被许多同行采纳，后来在此基础上开发出了性能更好的EIDE 接口。</td>
	</tr>
	<tr>
		<td>1985</td><td>Philips<br>SONY</td><td>合作推出CD-ROM驱动器。</td>
	</tr>
	<tr>
		<td>1985</td><td>Intel</td><td>80386 DX 推出 。时钟频率达到33MHz 、可寻址1GB 内存 、每秒可执行600万条指令、集成了275000 个晶体管。</td>
	</tr>
	<tr>
		<td>1985</td><td>Microsoft</td><td>Microsoft Windows 发布。该操作系统需要DOS 的支持</td>
	</tr>
	<tr>
		<td>1985</td><td>IBM<br>Microsoft</td><td>MS-DOS 3.2 和PC-DOS 3.2 发布。这是第一个支持3.5 英寸磁盘的系统，但只支持到720KB，3.3 版才支持1.44MB 。</td>
	</tr>
	<tr>
		<td>1987</td><td>Microsoft</td><td>Microsoft Windows 2.0 发布。</td>
	</tr>
	<tr>
		<td>1988</td><td></td><td>EISA 标准建立。</td>
	</tr>
	<tr>
		<td>1989</td><td>Tim Berners-Lee</td><td>在欧洲物理粒子研究所创立World Wide Web雏形。通过超文本链接，新手也可以轻松上网浏览。这大大促进了Internet 的发展。</td>
	</tr>
	<tr>
		<td>1989</td><td></td><td>EIDE 标准确立，可以支持超过528MB 的硬盘，能达到33.3MB/s 的传输速度，并被许多CD-ROM 所采用。</td>
	</tr>
	<tr>
		<td>1989</td><td>IBM</td><td>80486 DX 发布。该处理器集成了120 万个晶体管，其后继型号的时钟频率达到100MHz 。</td>
	</tr>
	<tr>
		<td>1989</td><td></td><td>Sound Blaster Card(声卡)发布</td>
	</tr>
	<tr>
		<td>1990</td><td>Microsoft</td><td>发布Windows 3.0，兼容MS-DOS 模式。</td>
	</tr>
	<tr>
		<td>1990</td><td></td><td>第一代MPC(多媒体个人电脑标准)发布。该标准要求处理器至少为80286/12MHz(后来增加到80386SX/16MHz)及一个光驱，至少150KB/sec 的传输率。</td>
	</tr>
	<tr>
		<td>1991</td><td></td><td>ISA 标准发布。</td>
	</tr>
	<tr>
		<td>1991</td><td>IBM<br>Microsoft</td><td>MS-DOS 5.0 和PC-DOS 5.0 发布。为了促进OS/2 的发展，Bill Gates 说DOS 5.0 是 DOS终结者，今后将不再花精力于此。该版本突破了640KB 的基本内存限制。这个版本也标志着微软与IBM 在DOS 上合作的终结。</td>
	</tr>
	<tr>
		<td>1992</td><td>Microsoft</td><td>Windows NT 发布，可寻址2GB 内存。</td>
	</tr>
	<tr>
		<td>1992</td><td>Microsoft</td><td>Windows 3.1 发布。</td>
	</tr>
	<tr>
		<td>1993</td><td></td><td>Internet 开始商业化运行。</td>
	</tr>
	<tr>
		<td>1993</td><td>Inter</td><td>Pentium 发布，该处理器集成了300 多万个晶体管、早期版本的核心频率为60-66MHz 、每秒钟执行1 亿条指令。</td>
	</tr>
	<tr>
		<td>1993</td><td></td><td>MPC 标准2 发布，要求CD-ROM 传输率达到300KB/s，在320 ×240 的窗口中每秒播放15 帧图像。</td>
	</tr>
	<tr>
		<td>1993</td><td>Inter</td><td>Intel 发布90-100MHz Pentium 处理器。</td>
	</tr>
	<tr>
		<td>1994</td><td></td><td>Netscape 1.0 浏览器发布。</td>
	</tr>	
	<tr>
		<td>1995</td><td>Inter</td><td>Intel 发布120MHz 的Pentium 处理器。</td>
	</tr>
	<tr>
		<td>1995</td><td>Inter</td><td>Intel 发布133MHz 的Pentium 处理器。</td>
	</tr>
	<tr>
		<td>1995</td><td>Microsoft</td><td>纯32 位的多任务操作系统Windows 95 发布。该操作系统大大不同于以前的版本 ，完全脱离MS-DOS，但为照顾用户习惯还保留了DOS 模式。Windows 95 取得了巨大成功。</td>
	</tr>
	<tr>
		<td>1995</td><td>Inter</td><td>Pentium Pro 发布，主频可达200MHz 、每秒可执行4.4 亿条指令、集成了550万个晶体管。</td>
	</tr>
	<tr>
		<td>1995</td><td></td><td>Netscape 发布其javascript 。</td>
	</tr>
	<tr>
		<td>1996</td><td></td><td>Netscape Navigator 2.0 发布。这是第一个支持javascript 的浏览器。</td>
	</tr>
	<tr>
		<td>1996</td><td>Intel</td><td>发布150 ～166MHz 的Pentium 处理器，集成了310 ～330 万个晶体管。</td>
	</tr>
	<tr>
		<td>1997</td><td>Intel</td><td>发布Pentium MMX CPU，处理器的游戏和多媒体功能得到增强。</td>
	</tr>
	<tr>
		<td>1997</td><td>Intel</td><td>发布Pentium Ⅱ，增加了更多的指令和Cache 。</td>
	</tr>
	<tr>
		<td>1997</td><td>Intel</td><td>发布233MHz Pentium MMX </td>
	</tr>
	<tr>
		<td>1998</td><td>Intel</td><td>发布333MHz Pentium Ⅱ处理器，采用0.25 μm 工艺制造，在速度提升的同时减少了发热量。</td>
	</tr>
	<tr>
		<td>1998</td><td>Microsoft</td><td>发布Windows 98</td>
	</tr>
	<tr>
		<td>1999</td><td>Linux</td><td>Linux Kernel 2.2.0 发布，人们对其寄予厚望。</td>
	</tr>
	<tr>
		<td>1999</td><td>AMD</td><td>公司发布K6-3 400MHz 处理器。</td>
	</tr>
	<tr>
		<td>1999</td><td>Intel</td><td>Pentium Ⅲ发布，最初时钟频率在450MHz 以上，总线速度在100MHz 以上，采用0.25μm工艺制造，支持SSE多媒体指令集，集成有512KB 以上的二级缓存。</td>
	</tr>
	<tr>
		<td>1999</td><td>Intel</td><td>代号为Coppermine(铜矿)的Pentium Ⅲ处理器发布。采用0.18 μm 工艺制造的Coppermine 芯片内核尺寸进一步缩小，虽然内部集成了256KB 全速On-Die L2 Cache ，内建2800万个晶体管，但其尺寸却只有106 平方毫米。</td>
	</tr>
	<tr>
		<td>2000</td><td>Intel</td><td>发布代号为"Coppermine 128 "的新一代的Celeron 处理器。新款Celeron 与老C eleron 处理器最显著的区别就在于采用了与新P Ⅲ处理器相同的Coppermine核心及同样的FC-PGA封装方式，同时支持SSE 多媒体扩展指令集。</td>
	</tr>
	<tr>
		<td>2000</td><td>AMD</td><td>宣布正式推出Duron 作为其新款廉价处理器的商标，并以此准备在低端向Intel 发起更大的冲击，同时，面向高端的ThunderBird 也在其后的一个月间发布。</td>
	</tr>
	<tr>
		<td>2000</td><td>AMD</td><td>领先Intel 发布了1GHz 的Athlon 处理器，随后又发布了1.2GMHz Athlon 处理器。</td>
	</tr>
	<tr>
		<td>2000</td><td>Intel</td><td>发布研发代号为Willamette 的Pentium 4 处理器，管脚为423 或478 根，其芯片内部集成了256KB 二级缓存，外频为400MHz，采用0.18 μm 工艺制造 ，使用SSE2指令集，并整合了散热器，其主频从1.4GHz 起步。</td>
	</tr>
	<tr>
		<td>2001</td><td>AMD</td><td>发布用于笔记本电脑的Athlon 4处理器。该处理器采用0.18微米工艺造，前端总线频率为200MHz，有256KB二级缓存和128KB一级缓存。</td>
	</tr>
	<tr>
		<td>2001</td><td>VIA</td><td>发布C3 出处理器　。该处理器采用　0.15 微米工艺制造(处理器核心仅为2mm 2 )， 包括192KB 全速缓存(128KB一级缓存、64KB 二级缓存)，并采用Socket 370 接口。支持133MHz 前端总线频率和3DNow！、MMX 多媒体指令集。</td>
	</tr>
	<tr>
		<td>2001</td><td>VIA</td><td>宣布其兼容DDR 和SDRAM 内存的P4芯片组P4X266 将大量出货。该芯片组的内存带宽达到4GB，是i850 的两倍。</td>
	</tr>
	<tr>
		<td>2001</td><td>Intel</td><td>发布主频高达2GHz 的P4 处理器。每千片的批发价为562 美元。</td>
	</tr>

