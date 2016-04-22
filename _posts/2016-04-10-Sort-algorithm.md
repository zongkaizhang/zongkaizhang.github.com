---
layout: post
title: "排序算法"
subtitle: "八大排序算法详解"
category: "算法"
tags: [算法]
---
{% include JB/setup %}
---
* content
{:toc}

> 本文转自：[http://www.cricode.com/3212.html](http://www.cricode.com/3212.html)

*排序算法可以分为内部排序和外部排序，内部排序是数据记录在内存中进行排序，而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。*

*常见的内部排序算法有：插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序等。*

*本文将依次介绍上述八大排序算法*

# 插入排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/insert-sort.gif">
</a>

*插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。*

## 算法步骤 ##

1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

## 程序示例 ##

{% highlight c++ %}
void Insert(int *a, int n)
{
	int i, j, key;

	for (i = 1; i < n; i ++) {
		key = a[i];
		for( j = i; (j > 0) && (a[j-1] > key);j --) {
			a[j] = a[j-1];
		}
		a[j] = key;
	}   
}
{% endhighlight %}

# 希尔排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/shellsort_anim.gif">
</a>

**希尔排序**，也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

- 插入排序在对几乎已经排好序的数据操作时， 效率高， 即可以达到线性排序的效率
- 但插入排序一般来说是低效的， 因为插入排序每次只能将数据移动一位
- 
希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。

## 算法步骤 ##

1. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
2. 按增量序列个数k，对序列进行k 趟排序；
3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度

## 程序示例 ##

{% highlight c++ %}
void Shell(int *a, int n)
{
	int i, j, k, tmp;

	for(i = n/2; i > 0; i/=2) {
		for(j = i; j < n; j ++) {
			tmp = a[j];
			for(k = j - i; (k >= 0 && tmp < a[k]); k -= i) {
				a[k + i] = a[k];
			}
			a[k + i] = tmp;
		}
	}   
}
{% endhighlight %}

# 选择排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/selection_sort_animation.gif">
</a>

*选择排序(Selection sort)也是一种简单直观的排序算法。*

## 算法步骤 ##

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

## 程序示例 ##

{% highlight c++ %}
void Select(int *a, int n)
{
	int tmp, i, j;
	int select_po;

	for(i = 0; i < n - 1; i ++) {
		tmp = a[i];
		select_po = i;
		for(j = i + 1; j < n; j ++) {
			if(a[j] < tmp) {
				tmp = a[j];
				select_po = j;
			}
		}
		a[select_po] = a[i];
		a[i] = tmp;
	}
}
{% endhighlight %}

# 冒泡排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/bubble_sort_animation.gif">
</a>

**冒泡排序**（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

## 算法步骤 ##

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

## 程序示例 ##

{% highlight c++ %}
void Bubble(int* a,int n)
{
	int tmp, i, j;
	for(i = 1; i < n; i ++) {
		for(j = n - 1; j >= i; j --) {
			if(a[j] < a[j-1]) {
				tmp = a[j-1];
				a[j-1] = a[j];
				a[j] = tmp;
			}
		}
	}
}
{% endhighlight %}

# 归并排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/merge_sort_animation2.gif">
</a>

## 算法步骤 ##

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
4. 重复步骤3直到某一指针达到序列尾
5. 将另一序列剩下的所有元素直接复制到合并序列尾

## 程序示例 ##

{% highlight c++ %}
void merge(int *a, int start, int mid, int end)
{
	int n1 = mid - start + 1;
	int n2 = end - mid;
	int left[n1], right[n2];
	int i, j, k;

	for (i = 0; i < n1; i++)
		left[i] = a[start+i];
	for (j = 0; j < n2; j++)
		right[j] = a[mid+1+j];
	i = j = 0;
	k = start;
	while (i < n1 && j < n2)
		if (left[i] < right[j])
			a[k++] = left[i++];
		else
			a[k++] = right[j++];

	while (i < n1) 
		a[k++] = left[i++];
	while (j < n2) 
		a[k++] = right[j++];
}

void Merge_Recursion(int *a, int start, int end)
{
	int mid;
	if (start < end)
	{   
		mid = (start + end) / 2;

		Merge_Recursion(a, start, mid);
		Merge_Recursion(a, mid+1, end);
		merge(a, start, mid, end);

	}   
}

void Merge(int* a, int n)
{
	Merge_Recursion(a, 0, n - 1); 
}
{% endhighlight %}

# 快速排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/Sorting_quicksort_anim.gif">
</a>

**快速排序**是由东尼·霍尔所发展的一种排序算法。在平均状况下，排序 n 个项目要Ο(n log n)次比较。在最坏状况下则需要Ο(n2)次比较，但这种状况并不常见。事实上，快速排序通常明显比其他Ο(n log n) 算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地被实现出来。

快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

## 算法步骤 ##

1. 从数列中挑出一个元素，称为 “基准”（pivot）
2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。

递归的最底部情形，是数列的大小是零或一，也就是永远都已经被排序好了。虽然一直递归下去，但是这个算法总会退出，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。

## 程序示例 ##

{% highlight c++ %}
void Quick_Recursion(int *a, int left, int right)
{
	int i,j;
	int middle,tmp;
	i = left;
	j = right;
	middle = a[(left+right)/2];
	do{
		while((a[i] < middle) && (i < right))
			i ++;
		while((a[j] > middle) && (j > left))
			j --;
		if(i <= j) {
			tmp = a[i];
			a[i] = a[j];
			a[j] = tmp;
			i ++;
			j --;
		}
	}while(i <= j);
	if(left<j)
		Quick_Recursion(a, left, j);
	if(right>i)
		Quick_Recursion(a, i, right);
}

void Quick(int* a, int n)
{
	Quick_Recursion(a, 0, n - 1);
}
{% endhighlight %}

# 堆排序 #

<a >
    <img src="{{ site.baseurl }}/img/algorithm/Sorting_heapsort_anim.gif">
</a>

**堆排序**（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

堆排序的平均时间复杂度为Ο(nlogn) 。

## 算法步骤 ##

1. 创建一个堆H[0..n-1]
2. 把堆首（最大值）和堆尾互换
3. 把堆的尺寸缩小1，并调用shift_down(0),目的是把新的数组顶端数据调整到相应位置
4. 重复步骤2，直到堆的尺寸为1

## 程序示例 ##

{% highlight c++ %}
void Max_Heap(int *a, int i, int n)
{
	int j, tmp;

	tmp = a[i];
	j = 2 * i + 1;
	while(j < n){ 
		if(j + 1 < n && a[j + 1] > a[j])
			j ++; 
		if(a[j] <= tmp)
			break;

		a[i] = a[j];
		i = j;
		j = 2 * i + 1;
	}   
	a[i] = tmp;
}

void Heap(int* a, int n)
{
	int i, tmp;

	for(i = n/2; i >= 0; i--)
		Max_Heap(a, i, n); 
	for(i = n - 1; i >= 1; i--)
	{   
		tmp = a[i];
		a[i] = a[0];
		a[0] = tmp;
		Max_Heap(a, 0, i); 
	}   
}
{% endhighlight %}

# 基数排序 #

**基数排序**是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

说基数排序之前，我们简单介绍桶排序：

## 桶排序 ##

### 算法思想 ###

是将阵列分到有限数量的桶子里。每个桶子再个别排序（有可能再使用别的排序算法或是以递回方式继续使用桶排序进行排序）。桶排序是鸽巢排序的一种归纳结果。当要被排序的阵列内的数值是均匀分配的时候，桶排序使用线性时间（Θ（n））。但桶排序并不是 比较排序，他不受到 O(n log n) 下限的影响。

简单来说，就是把数据分组，放在一个个的桶中，然后对每个桶里面的在进行排序。

例如要对大小为[1..1000]范围内的n个整数A[1..n]排序

首先，可以把桶设为大小为10的范围，具体而言，设集合B[1]存储[1..10]的整数，集合B[2]存储   (10..20]的整数，……集合B[i]存储(   (i-1)*10,   i*10]的整数，i   =   1,2,..100。总共有  100个桶。

然后，对A[1..n]从头到尾扫描一遍，把每个A[i]放入对应的桶B[j]中。  再对这100个桶中每个桶里的数字排序，这时可用冒泡，选择，乃至快排，一般来说任  何排序法都可以。

最后，依次输出每个桶里面的数字，且每个桶中的数字从小到大输出，这  样就得到所有数字排好序的一个序列了。

假设有n个数字，有m个桶，如果数字是平均分布的，则每个桶里面平均有n/m个数字。如果

对每个桶中的数字采用快速排序，那么整个算法的复杂度是

O(n   +   m   *   n/m*log(n/m))   =   O(n   +   nlogn   –   nlogm)

从上式看出，当m接近n的时候，桶排序复杂度接近O(n)

当然，以上复杂度的计算是基于输入的n个数字是平均分布这个假设的。这个假设是很强的  ，实际应用中效果并没有这么好。如果所有的数字都落在同一个桶中，那就退化成一般的排序了。

前面说的几大排序算法 ，大部分时间复杂度都是O（n2），也有部分排序算法时间复杂度是O(nlogn)。而桶式排序却能实现O（n）的时间复杂度。但桶排序的缺点是：

1）首先是空间复杂度比较高，需要的额外开销大。排序有两个数组的空间开销，一个存放待排序数组，一个就是所谓的桶，比如待排序值是从0到m-1，那就需要m个桶，这个桶数组就要至少m个空间。

2）其次待排序的元素都要在一定的范围内等等。

## 程序示例 ##

{% highlight c++ %}
{% endhighlight %}

# 总结 #

各种排序的稳定性，时间复杂度、空间复杂度、稳定性总结如下图：

<a >
    <img src="{{ site.baseurl }}/img/algorithm/sort_table.jpg">
</a>

## 时间复杂度 ##

1. 平方阶(O(n2))排序

    各类简单排序:直接插入、直接选择和冒泡排序；

2. 线性对数阶(O(nlog2n))排序

    快速排序、堆排序和归并排序；

3. O(n1+§))排序,§是介于0和1之间的常数

    希尔排序;

4. 线性阶(O(n))排序

   基数排序，此外还有桶、箱排序。


## 稳定性 ##

- 稳定的排序算法：冒泡排序、插入排序、归并排序和基数排序

- 不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序
