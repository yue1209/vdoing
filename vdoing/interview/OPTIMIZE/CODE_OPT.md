---
title: code
date: 2022-10-02 18:50:29
categories:
  - interview
tags:
  - 
---

[TOC]

### 1.尽量重用对象

特别是String对象的使用，出现字符串连接时应该使用StringBuilder/StringBuffer代替。由于Java虚拟机不仅要花时间生成对象，以后可能还需要花时间对这些对象进行垃圾回收和处理，因此，生成过多的对象将会给程序的性能带来很大的影响。

### 2.不要在循环内创建对象(引用)

例如：

```
for(int i = 1; i <= count; i++) {
    Object obj = new Object();
}
```

这种做法会导致内存中有count份Object对象引用存在，count很大的话，就耗费内存了，建议为改为：

```
Object obj = null;for (int i = 0; i <= count; i++) { obj = new Object(); }
```

这样的话，内存中只有一份Object对象引用，每次new Object()的时候，Object对象引用指向不同的Object罢了，但是内存中只有一份，这样就大大节省了内存空间了。

### 3.使用懒加载的策略，在需要的时候才创建对象

例如：

```
String str = "aaa";
if(i == 1) {
  list.add(str);
}
```

建议替换为：

```
if(i == 1) {
  String str = "aaa";
  list.add(str);
}
```

### 4.去除没有用到的类和包引用

这毫无意义，如果代码中出现”The value of the local variable i is not used”、”The import java.util is never used”，那么请删除这些无用的

### 6.使用final修饰方法

带有final修饰符的类是不可派生的。在Java核心API中，有许多应用final的例子，例如java.lang.String，整个类都是final的。为类指定final修饰符可以让类不可以被继承，为方法指定final修饰符可以让方法不可以被重写。如果指定了一个类为final，则该类所有的方法都是final的。Java编译器会寻找机会内联所有的final方法，内联对于提升Java运行效率作用重大，具体参见Java运行期优化。此举能够使性能平均提高50% 。

### 7.使用static final声明常量，并以大写命名

这样在编译期间就可以把这些内容放入常量池中，避免运行期间计算生成常量的值。另外，将常量的名字以大写命名也可以方便区分出常量与变量。

### 8.使用局部变量

调用方法时传递的参数以及在调用中创建的临时变量都保存在栈中速度较快，其他变量，如静态变量、实例变量等，都在堆中创建，速度较慢。另外，栈中创建的变量，随着方法的运行结束，这些内容就没了，不需要额外的垃圾回收。

### 9.避免使用静态变量

要知道，当某个对象被定义为static的变量所引用，那么gc通常是不会回收这个对象所占有的堆内存的，如：

```
public class A {
  private static B b = new B();
}
```

此时静态变量b的生命周期与A类相同，如果A类不被卸载，那么引用B指向的B对象会常驻内存，直到程序终止

### 10.使用equals时候保证前面是常量不为空

这是一个比较常见的小技巧了，如果有以下代码：

```
String str = "123";
if(str.equals("123")) {
	...
}
```

建议修改为：

```
String str = "123";
if("123".equals(str)) {
  ...
}
```

这么做主要是可以避免空指针异常

### 11.使用同步代码块替代同步方法

这点在多线程模块中的synchronized锁方法块一文中已经讲得很清楚了，除非能确定一整个方法都是需要进行同步的，否则尽量使用同步代码块，避免对那些不需要进行同步的代码也进行了同步，影响了代码执行效率。

### 12.Integer转String用toString方法

把一个基本数据类型转为一般有三种方式，我有一个Integer型数据i，可以使用i.toString()、String.valueOf(i)、i+””三种方式，三种方式的效率如何，看一个测试：

```
public static void main(String args)
{
    int loopTime = 50000;
    Integer i = 0;
    long startTime = System.currentTimeMillis();
    for(int j = 0; j < loopTime; j++)
    {
        String str = String.valueOf(i);
    }
    System.out.println("String.valueOf()：" + (System.currentTimeMillis() - startTime) + "ms");
    startTime = System.currentTimeMillis();
    for(int j = 0; j < loopTime; j++)
    {
        String str = i.toString();
    }
    System.out.println("Integer.toString()：" + (System.currentTimeMillis() - startTime) + "ms");
    startTime = System.currentTimeMillis();
    for(int j = 0; j < loopTime; j++)
    {
        String str = i + "";
    }
    System.out.println("i + \"\"：" + (System.currentTimeMillis() - startTime) + "ms");
}
```

运行结果为：

```
String.valueOf()：11ms 
Integer.toString()：5ms 
i + ""：25ms
```

所以以后遇到把一个基本数据类型转为String的时候，优先考虑使用toString()方法。至于为什么，很简单：

1. String.valueOf()方法底层调用了Integer.toString()方法，但是会在调用前做空判断
2. Integer.toString()方法就不说了，直接调用了
3. i + “”底层使用了StringBuilder实现，先用append方法拼接，再用toString()方法获取字符串

三者对比下来，明显是2最快、1次之、3最慢

### 13.数组不能使用toString()方法，会打印对象。集合可以

看一下对数组使用toString()打印出来的是什么：

```
public static void main(String args) {
  int is = new int {
    1, 2, 3
  };
  System.out.println(is.toString());
}
```

结果是：

```
I@18a992f
```

本意是想打印出数组内容，却有可能因为数组引用is为空而导致空指针异常。不过虽然对数组toString()没有意义，但是对集合toString()是可以打印出集合里面的内容的，因为集合的父类AbstractCollections重写了Object的toString()方法。

### 14.不要将数组声明为public static final

因为这毫无意义，这样只是定义了引用为static final，数组的内容还是可以随意改变的，将数组声明为public更是一个安全漏洞，这意味着这个数组可以被外部类所改变。

### 15.实现RandomAccess接口的集合比如ArrayList，应当使用最普通的for循环而不是foreach循环来遍历

这是JDK推荐给用户的。JDK API对于RandomAccess接口的解释是：实现RandomAccess接口用来表明其支持快速随机访问，此接口的主要目的是允许一般的算法更改其行为，从而将其应用到随机或连续访问列表时能提供良好的性能。实际经验表明，实现RandomAccess接口的类实例，假如是随机访问的，使用普通for循环效率将高于使用foreach循环；反过来，如果是顺序访问的，则使用Iterator会效率更高。可以使用类似如下的代码作判断：

```
if (list instanceof RandomAccess)
        { for (int i = 0; i < list.size(); i++){}
        }else{
        Iterator<?> iterator = list.iterable(); while (iterator.hasNext()){iterator.next()}
        }
```

foreach循环的底层实现原理就是迭代器Iterator，参见Java语法糖1：可变长度参数以及foreach循环原理。所以后半句”反过来，如果是顺序访问的，则使用Iterator会效率更高”的意思就是顺序访问的那些类实例，使用foreach循环去遍历。

### 16.减少对变量的重复计算，比如循环时判断集合长度

明确一个概念，对方法的调用，即使方法中只有一句语句，也是有消耗的，包括创建栈帧、调用方法时保护现场、调用方法完毕时恢复现场等。所以例如下面的操作：

```
for(int i = 0; i < list.size(); i++) {.
  ..
}
```

建议替换为：

```
for(int i = 0, int length = list.size(); i <
  length; i++) {...
}
```

这样，在list.size()很大的时候，就减少了很多的消耗

### 16.不要让public方法中有太多的形参

public方法即对外提供的方法，如果给这些方法太多形参的话主要有两点坏处：

1. 违反了面向对象的编程思想，Java讲求一切都是对象，太多的形参，和面向对象的编程思想并不契合
2. 参数太多势必导致方法调用的出错概率增加

至于这个”太多”指的是多少个，3、4个吧。比如我们用JDBC写一个insertStudentInfo方法，有10个学生信息字段要插如Student表中，可以把这10个参数封装在一个实体类中，作为insert方法的形参。

### 17.及时关闭流

Java编程过程中，进行数据库连接、I/O流操作时务必小心，在使用完毕后，及时关闭以释放资源。因为对这些大对象的操作会造成系统大的开销，稍有不慎，将会导致严重的后果。

### 18.慎用异常

异常对性能不利。抛出异常首先要创建一个新的对象，Throwable接口的构造函数调用名为fillInStackTrace()的本地同步方法，fillInStackTrace()方法检查堆栈，收集调用跟踪信息。只要有异常被抛出，Java虚拟机就必须调整调用堆栈，因为在处理过程中创建了一个新的对象。异常只能用于错误处理，不应该用来控制程序流程。

不要在循环中使用try…catch…，应该把其放在最外层

除非不得已。如果毫无理由地这么写了，只要你的领导资深一点、有强迫症一点，八成就要骂你为什么写出这种垃圾代码来了。

### 19.工具类指定初始长度

比如ArrayList、LinkedLlist、StringBuilder、StringBuffer、HashMap、HashSet等等，以StringBuilder为例：

1. StringBuilder() // 默认分配16个字符的空间
2. StringBuilder(int size) // 默认分配size个字符的空间
3. StringBuilder(String str) // 默认分配16个字符+str.length()个字符空间

可以通过类（这里指的不仅仅是上面的StringBuilder）的来设定它的初始化容量，这样可以明显地提升性能。比如StringBuilder吧，length表示当前的StringBuilder能保持的字符数量。因为当StringBuilder达到最大容量的时候，它会将自身容量增加到当前的2倍再加2，无论何时只要StringBuilder达到它的最大容量，它就不得不创建一个新的字符数组然后将旧的字符数组内容拷贝到新字符数组中—-这是十分耗费性能的一个操作。试想，如果能预估到字符数组中大概要存放5000个字符而不指定长度，最接近5000的2次幂是4096，每次扩容加的2不管，那么：

1. 在4096 的基础上，再申请8194个大小的字符数组，加起来相当于一次申请了12290个大小的字符数组，如果一开始能指定5000个大小的字符数组，就节省了一倍以上的空间；
2. 把原来的4096个字符拷贝到新的的字符数组中去。

这样，既浪费内存空间又降低代码运行效率。所以，给底层以数组实现的集合、工具类设置一个合理的初始化容量是错不了的，这会带来立竿见影的效果。但是，注意，像HashMap这种是以数组+链表实现的集合，别把初始大小和你估计的大小设置得一样，因为一个table上只连接一个对象的可能性几乎为0。初始大小建议设置为2的N次幂，如果能估计到有2000个元素，设置成new HashMap(128)、new HashMap(256)都可以。

### 20.乘法和除法使用移位操作

例如：

```
for(val = 0; val < 100000; val += 5) {
  a = val * 8;
  b = val / 2;
}
```

用移位操作可以极大地提高性能，因为在计算机底层，对位的操作是最方便、最快的，因此建议修改为：

```
for(val = 0; val < 100000; val += 5) {
  a = val << 3;
  b = val >> 1;
}
```

移位操作虽然快，但是可能会使代码不太好理解，因此最好加上相应的注释。

### 21.尽量在合适的场合使用单例

使用单例可以减轻加载的负担、缩短加载的时间、提高加载的效率，但并不是所有地方都适用于单例，简单来说，单例主要适用于以下三个方面：

1. 控制资源的使用，通过线程同步来控制资源的并发访问
2. 控制实例的产生，以达到节约资源的目的
3. 控制数据的共享，在不建立直接关联的条件下，让多个不相关的进程或线程之间实现通信

### 22.及时清除不再需要的会话

date: 2022-10-02 18:50:29

### 23.程序运行过程中避免使用反射

关于，请参见反射。反射是Java提供给用户一个很强大的功能，功能强大往往意味着效率不高。不建议在程序运行过程中使用尤其是频繁使用反射机制，特别是Method的invoke方法，如果确实有必要，一种建议性的做法是将那些需要通过反射加载的类在项目启动的时候通过反射实例化出一个对象并放入内存—-用户只关心和对端交互的时候获取最快的响应速度，并不关心对端的项目启动花多久时间。

### 24.使用数据库连接池和线程池

这两个池都是用于重用对象的，前者可以避免频繁地打开和关闭连接，后者可以避免频繁地创建和销毁线程

### 25.使用带缓冲的输入输出流进行IO操作

带缓冲的输入输出流，即BufferedReader、BufferedWriter、BufferedInputStream、BufferedOutputStream，这可以极大地提升IO效率

### 26.顺序插入和随机访问比较多的场景使用ArrayList，元素删除和中间插入比较多的场景使用LinkedList这个，理解ArrayList和LinkedList的原理就知道了

### 27.不要对超出范围的基本数据类型做向下强制转型

这绝不会得到想要的结果：

```
public static void main(String args) {
    long l = 12345678901234 L;
    int i = (int) l;
    System.out.println(i);
}
```

我们可能期望得到其中的某几位，但是结果却是：

```
1942892530
```

解释一下。Java中long是8个字节64位的，所以12345678901234在计算机中的表示应该是：

0000 0000 0000 0000 0000 1011 0011 1010 0111 0011 1100 1110 0010 1111 1111 0010

一个int型数据是4个字节32位的，从低位取出上面这串二进制数据的前32位是：

0111 0011 1100 1110 0010 1111 1111 0010

这串二进制表示为十进制1942892530，所以就是我们上面的控制台上输出的内容。从这个例子上还能顺便得到两个结论：

1. 整型默认的数据类型是int，long l = 12345678901234L，这个数字已经超出了int的范围了，所以最后有一个L，表示这是一个long型数。顺便，浮点型的默认类型是double，所以定义float的时候要写成””float f = 3.5f”
2. 接下来再写一句”int ii = l + i;”会报错，因为long + int是一个long，不能赋值给int

### 28.公用的集合类中不使用的数据一定要及时remove掉

如果一个集合类是公用的（也就是说不是方法里面的属性），那么这个集合里面的元素是不会自动释放的，因为始终有引用指向它们。所以，如果公用集合里面的某些数据不使用而不去remove掉它们，那么将会造成这个公用集合不断增大，使得系统有内存泄露的隐患。

### 29.使用最有效率的方式去遍历Map

遍历Map的方式有很多，通常场景下我们需要的是遍历Map中的Key和Value，那么推荐使用的、效率最高的方式是：

```
public static void main(String args)
{
    HashMap < String, String > hm = new HashMap < String, String > ();
    hm.put("111", "222");
    Set < Map.Entry < String, String >> entrySet = hm.entrySet();
    Iterator < Map.Entry < String, String >> iter = entrySet.iterator();
    while(iter.hasNext())
    {
        Map.Entry < String, String > entry = iter.next();
        System.out.println(entry.getKey() + "\t" + entry.getValue());
    }
}
```

如果你只是想遍历一下这个Map的key值，那用”Set keySet = hm.keySet();”会比较合适一些
