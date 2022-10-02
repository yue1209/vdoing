---
title: Java基础
date: 2021-10-22 15:36:39
permalink: /pages/6dd48e/
categories:
  - interview
  - java
tags:
  - 
---
### 1. Java 基本概念

#### 1.1 Java源程序的扩展名是什么？

.java

#### 1.2 什么是标识符？

在java语言中能够我们自己起名的都叫标识符

#### 1.3 标识符有哪些特点？

标识符是大小写字母、数字字符、$和_组成；不能以数字开头，不能是java关键字，区分大小写

#### 1.4 请说明环境变量Path 与 classpath 区别

**path**是系统用来指定可指定文件的完整路径。Path是用来搜索所执行的可执行文件路径的，如果执行的可执行文件不在当前目录下，那就会依次搜索path中设置的路径。

**classpath**是指定你在程序中所使用的类(.class)文件所在的位置。

#### 1.5 java程序经编译后产生的字节码文件扩展名是什么？

字节码文件扩展名是 .class

#### 1.6 请解释Java语言的跨平台特性？

Java语言是跨平台运行的，其实就是不同的操作系统，使用不同的JVM映射规则，让其与操作系统无关，完成了跨平台性。JVM对上层的Java源文件是不关心的，它关注的只是由源文件生成的类文件(class file)。

#### 1.7 请说明JDK、JRE、JVM的区别？

- **JDK**
  **Java Development Kit(Java开发工具包)**。JDK是整个JAVA的核心，包括了Java运行环境(Java Runtime Environment)，一堆Java工具（javac/java/javap等）
- **JRE**
  **Java Runtime Environment(java运行时环境)**。也就是我们说的JAVA平台。所有的Java程序都要在JRE下才能运行。包括JVM和JAVA核心类库和支持文件。与JDK相比，它不包含开发工具(编译器、调试器和其他工具)。
- **JVM**
  **Java Virtual Mechinal(JAVA虚拟机)**。JVM是JRE的一部分，它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的。

#### 1.8 请说出常用的DOS命令并解释？

- d: 回车 盘符切换
- dir (directory)  列出当前目录下的文件以及文件夹
- cd (change directory) 改变指定目录(进入指定目录)
- cd…  退回到上一层目录
- cd \退回到跟目录
- md (make directory)创建目录
- rd (remove directory)删除目录
- del (delete)删除文件，删除一堆后缀名一样的文件*.txt
- cls (clear screen)清屏
- exit退出dos命令行

### 2. Java 基础

#### 2.1 请说出Java中数据类型的分类?基本数据类型都有哪些?

- 基本数据类型
  - byte                     1
  - short                    2
  - int                         4
  - long                      8
  - float                      4
  - double                  8
  - char                       2
  - boolean                1
- 引用数据类型
  - 数组
  - 类
  - 接口

#### 2.2 Java中数据的类型转换有几种?分别是什么?

- **强制类型转换**
  容量大的类型向容量小的类型转换时使用
- **隐式类型转换**
  容器小的类型向容量大的类型转换时使用

#### 2.3 Java语言中的字符char可以存储一个中文汉字吗?为什么呢?

char型变量是用来存储Unicode编码的字符的，unicode编码字符集中包含了汉字，所以，char型变量中可以存储汉字。不过，如果某个特殊的汉字没有被包含在unicode编码字符集中，那么，这个char型变量中就不能存储这个特殊汉字。
补充说明：unicode编码占用两个字节，所以，char类型的变量也是占用两个字节。

#### 2.4 注释的分类及作用？

- 单行注释
  注释单行代码或为单行代码添加描述的时候使用
- 多行注释
  注释多行代码或为代码添加多行描述的时候使用
- 文档注释
  生产java帮助文档的时候使用，开发中常用来描述类、描述方法

#### 2.5 请说明 == 与 = 的区别？

- **==**
  比较运算符，用来比较操作符两边的变量的值是否相等。
- **=**
  赋值运算符，把操作符右边的值，赋值给左边的变量

#### 2.6 import的作用?

在不同包下的类之间相互访问的时候，发现，每次使用不同包下的类的时候，都需要加包的全路径。比较麻烦，这个时候，java就提供了( import )**导包**的功能。
使用import可以将包中的类导入进来，以后使用类的时候，不需导包，直接使用，**简化了书写**。

#### 2.7 请解释 ==与equals()方法的区别？

==  比较值，equal比较对象。

#### == 解读

对于基本类型和引用类型 == 的作用效果是不同的，如下所示：

- 基本类型：比较的是值是否相同；
- 引用类型：比较的是引用是否相同；

代码示例：

```java
String x = "string";
String y = "string";
String z = new String("string");
System.out.println(x==y); // true
System.out.println(x==z); // false
System.out.println(x.equals(y)); // true
System.out.println(x.equals(z)); // true
1234567
```

代码解读：因为 x 和 y 指向的是同一个引用，所以 == 也是 true，而 new String()方法则重写开辟了内存空间，所以 == 结果为 false，而 equals 比较的一直是值，所以结果都为 true。

#### equals 解读

**equals 本质上就是 ==，只不过 String 和 Integer 等重写了 equals 方法，把它变成了值比较。**看下面的代码就明白了。

首先来看默认情况下 equals 比较一个有相同值的对象，代码如下：

```java
class Cat {
  public Cat(String name) {
    this.name = name;
  }
  private String name;
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}

Cat c1 = new Cat("mbb");
Cat c2 = new Cat("mbb");
System.out.println(c1.equals(c2)); // false
```

输出结果出乎我们的意料，竟然是 false？这是怎么回事，看了 equals 源码就知道了，源码如下：

```java
public boolean equals(Object obj) {
  return (this == obj);
}
```

原来 equals 本质上就是 ==。

那问题来了，两个相同值的 String 对象，为什么返回的是 true？代码如下：

```java
String s1 = new String("mbb");
String s2 = new String("mbb");
System.out.println(s1.equals(s2)); // true
```

同样的，当我们进入 String 的 equals 方法，找到了答案，代码如下：

```java
public boolean equals(Object anObject) {

  if (this == anObject) {
    return true;
  }

  if (anObject instanceof String) {
    String anotherString = (String)anObject;
    int n = value.length;
    if (n == anotherString.value.length) {
      char v1[] = value;
      char v2[] = anotherString.value;
      int i = 0;

      while (n-- != 0) {
        if (v1[i] != v2[i])
          return false;
        i++;
      }

      return true;
    }
  }
  return false;
}
```

原来是 String 重写了 Object 的 equals 方法，把引用比较改成了值比较。

总结 ：**== 对于基本类型来说是值比较，对于引用类型来说是比较的是引用；而 equals 默认情况下是引用比较，只是很多类重新了 equals 方法，比如 String、Integer 等把它变成了值比较，所以一般情况下 equals 比较的是值是否相等。**

#### 2.8 两个对象的 hashCode() 相同，则 equals() 也一定为 true，对吗？

不对，两个对象的 hashCode() 相同，equals() **不一定** true。

代码示例：

```java
String str1 = "通话";
String str2 = "重地";
System. out. println(String. format("str1：%d | str2：%d", str1. hashCode(),str2. hashCode()));
System. out. println(str1. equals(str2));
```

执行的结果：

```java
str1：1179395 | str2：1179395
false
```

代码解读：很显然“通话”和“重地”的 hashCode() 相同，然而 equals() 则为 false，**因为在散列表(哈希表)中，hashCode() 相等即两个键值对的哈希值相等**，然而哈希值相等，并不一定能得出键值对相等。

当要存储一个数据的时候，首先用一个函数计算**数据的地址**，然后再将数据存进指定地址位置的数组里面。这个函数就是哈希函数，而这个数组就是哈希表。这就是**哈希冲突**，即不同数据通过哈希函数算出来同一个位置。

四种解决方式：开放定址法、再哈希法、链地址法、建立公共溢出区

#### 2.9 请说明 && 和 & 的区别？

&和&&都可以用作逻辑与的运算符，表示**逻辑与(and)**，当运算符两边的表达式的结果都为true时，整个运算结果才为true，否则，只要有一方为false，则结果为false。

&&还具有**短路**的功能，即如果第一个表达式为false，则不再计算第二个表达式

&还可以用作**位运算符**，当&操作符两边的表达式不是boolean类型时，&表示按位与操作。

#### 2.10 三元运算符的基本格式是什么？

三元运算符的格式是: 条件表达式 ? 表达式1 : 表达式2 --[ a==b ? true : false ]

#### 2.11 三元运算符的执行流程是什么？

三元运算符的执行流程: 首先计算条件表达式的值看其返回结果是true还是false,如果是true就执行表达式1,如果是false就执行表达式2

#### 2.12 请说明for、while、do…while三种循环的格式以及执行流程，以及它们的区别。

- for循环语句格式

  for(初始化语句;判断条件语句;控制条件语句) {

  循环体语句;

  }

  - 执行流程：
    1. 执行初始化语句
    2. 执行判断条件语句，看其结果是true还是false，如果是false，循环结束；如果是true，继续执行。
    3. 执行循环体语句
    4. 执行控制条件语句
    5. 回到b继续

- while循环语句格式

  while(判断条件语句) {

  循环体语句;

  }

  - 执行流程：
    1. 执行判断条件语句，看其结果是true还是false
       如果是false，循环结束。
       如果是true，继续执行。
    2. 执行循环体语句
    3. 回到a继续

- do…while循环语句格式

  do {

  循环体语句;

  }while((判断条件语句);

  - 执行流程：
    1. 执行循环体语句
    2. 执行判断条件语句，看其结果是true还是false，如果是false，循环结束；如果是true，继续执行。
    3. 回到a继续

- 三种循环语句的区别

  - do…while循环至少会执行一次循环体
  - for循环和while循环只有在条件成立的时候才会去执行循环体

注意：写程序优先考虑for循环，再考虑while循环，最后考虑do…while循环

#### 2.13 package它有什么作用？

package，包的意思，其实就是**文件夹**，它可以对类进行分类管理

#### 2.14 private 关键字在哪里使用？ 被 private 修饰的成员有什么特点？

类中的成员需要私有的时候使用private关键字
特点：
是一个权限修饰符。
可以修饰成员(成员变量和成员方法)
被private修饰的成员只在本类中才能访问

#### 2.15 为什么要有 this 关键字？this 关键字的含义？

this用来解决成员变量与局部变量重名问题
this关键字代表的是本类对象引用；谁调用我,this就代表谁.

#### 2.16 Java 中的 Math. round(-1. 5) 等于多少？

等于 -1，因为在数轴上取值时，中间值（0.5）**向右取整**，所以正 0.5 是往上取整，负 0.5 是直接舍弃。

#### 2.17 final 关键字是什么意思，可以修饰那些成员？被修饰的成员有哪些特点？

final最终的意思。

- 可修饰类、成员变量、成员方法
- 特点
  - final修饰类，此类是最终类，不能被继承。
  - final修饰变量，变量就成了常量，只能被赋值一次
  - final修饰方法，是最终方法不能被重写

#### 2.18 定义一个方法的格式是什么,以及方法的注意事项?

- **格式**
  修饰符 返回值类型 方法名(参数类型 参数名1, 参数类型 参数名2 ….){
  方法体 ;
  return 返回值 ;
  }
- **注意事项**
  A. 方法不调用不执行
  B. 方法与方法是平级关系，不能嵌套定义
  C. 方法定义的时候参数之间用逗号隔开
  D. 方法调用的时候不用在传递数据类型
  E. 如果方法有明确的返回值，一定要有return带回一个值

#### 2.19 请简述泛型是什么?有什么用?在哪里用？

- **泛型是什么？**
  泛型是一种**特殊的类型**，它把指定类型的工作推迟到客户端代码声明并实例化类或方法的使用进行。也被称为**参数化类型**，可以把类型当做参数一样传递过来，在传递过来之前我不明确，但是在使用的时候就就明确了。
  
- 泛型的好处
  - 提高了程序的安全性
  - 将运行期遇到的问题转移到了编译期
  - 省去了类型强转的麻烦
  
- 泛型的常见应用
  - 泛型类
  - 泛型方法
  - 泛型接口
  
- 常见的泛型

  - E - Element (在集合中使用，因为集合中存放的是元素)

  -  T - Type（Java 类）

  -  K - Key（键）

  -  V - Value（值）

  -  N - Number（数值类型）

  -  ？ -  表示不确定的java类型


#### 2.20 如何编写一个泛型方法，让它能够接受泛型参数并返回泛型类型？并举例

泛型方法，指把泛型定义在方法上，使用泛型类型来替代原始类型

```java
public static T[] sort(T[] t){
  Arrays.sort(t);
  return t;
}
```

#### 2.21 请简述Java中如何使用泛型编写带有参数的类？并举例

泛型类，指把泛型定义在类上，使用泛型类型来替代原始类型

```java
class GenericClass {
  private T t;
  public void setT(T t) {
    this.t = t;
  }
  
  public T getT() {
    return t;
  }
}
```

#### 2.22 形式参数是基本类型要的是什么?是类名、抽象类名、接口名时分别要的是什么?

形式参数是基本类型要的是一个基本类型的变量或者具体的常量值

- 类名时
  要的是一个该类的对象
- 抽象类名时
  要的是一个继承自该类的一个子类对象
- 接口时
  要的是一个实现了该接口的子类对象

#### 2.23 返回值类型是基本类型返回的是什么?是类名、抽象类名、接口名分别返回的是什么?

**返回值是基本数据类型的时候返回的是一个具体的值**

- 类名时
  本质上返回的是一个该类对应的子类对象
- 抽象类名时
  返回的应该是一个继承自该类的子类对象
- 接口名的时
  返回的是一个实现了该接口的子类对象

#### 2.24 请简述递归是什么?注意事项是什么?

所谓递归，是指**程序调用自身**。
注意，递归不会无休止地调用下去，它必然有一个出口，当满足条件时程序也就结束了，不然的话，那就是死循环了。

#### 2.25 请说说文件名称过滤器FilenameFilter的作用？

FilenameFilter是文件名过滤器，用来过滤不符合规则的文件名，并返回合格的文件。

#### 2.26 使用键盘录入数据的三个步骤是什么？

- **第一步导包**
  格式: import java.util.Scanner ;位置: 在class上边
- **第二步创建Scanner对象**
  格式: Scanner sc = new Scanner(System.in) ;
- **第三步获取键盘录入数据**
  格式: int x = sc.nextInt() ;

### 3. Java 变量

#### 3.1 变量是什么?

变量，在程序运行时，值可以被修改的量。

#### 3.2 变量的定义格式是什么?

数据类型 变量名 = 变量值

#### 3.3 成员变量与局部变量的区别？

- 在类中的位置不同
  成员变量：在类中方法外
  局部变量：在方法定义中或者方法声明上
- 在内存中的位置不同
  成员变量：在堆内存
  局部变量：在栈内存
- 生命周期不同
  成员变量：随着对象的创建而存在，随着对象的消失而消失
  局部变量：随着方法的调用而存在，随着方法的调用完毕而消失
- 初始化值不同
  成员变量：有默认初始化值
  局部变量：没有默认初始化值，必须定义，赋值，然后才能使用。

#### 3.4 请写出Java标识符的命名规则

- 包
  全部小写

- 单层包
  小写，举例：itcast，com

- 多层包
  小写，并用 . 隔开，举例：cn.itcast， com.baidu

- 类或者接口：

  - 一个单词
    首字母大写，举例：Student，Demo
  - 多个单词
    每个单词首字母大写，举例：HelloWorld，StudentName

- 方法或者变量：

  - 一个单词
    首字母小写，举例：name，main
  - 多个单词
    从第二个单词开始，每个单词首字母大写，举例：studentAge，showStudentNames()

- 常量

  全部大写

  - 一个单词
    大写，举例：PI
  - 多个单词
    大写，并用 _ 隔开，举例：STUDENT_MAX_AGE

#### 3.5 静态变量与成员变量的区别？

- 所属不同
  静态变量属于类，所以也称为为类变量
  成员变量属于对象，所以也称为实例变量(对象变量)
- 内存中位置不同
  静态变量存储于方法区的静态区
  成员变量存储于堆内存
- 内存出现时间不同
  静态变量随着类的加载而加载，随着类的消失而消失
  成员变量随着对象的创建而存在，随着对象的消失而消失
- 调用不同
  静态变量可以通过类名调用，也可以通过对象调用
  成员变量只能通过对象名调用

### 4. Java String

#### 4.1 String 类的常用方法都有那些？

- indexOf()：返回指定字符的索引。
- charAt()：返回指定索引处的字符。
- replace()：字符串替换。
- trim()：去除字符串两端空白。
- split()：分割字符串，返回一个分割后的字符串数组。
- getBytes()：返回字符串的 byte 类型数组。
- length()：返回字符串长度。
- toLowerCase()：将字符串转成小写字母。
- toUpperCase()：将字符串转成大写字符。
- substring()：截取字符串。
- equals()：字符串比较。

#### 4.2 如何将字符串反转？

使用 StringBuilder 或者 stringBuffer 的 reverse() 方法。

示例代码：

```java
// StringBuffer reverse
StringBuffer stringBuffer = new StringBuffer();
stringBuffer.append("abcdefg");
System.out.println(stringBuffer.reverse()); // gfedcba

// StringBuilder reverse
StringBuilder stringBuilder = new StringBuilder();
stringBuilder.append("abcdefg");
System. out. println(stringBuilder.reverse()); // gfedcba
123456789
```

#### 4.3 String str=“i” 与 String str=new String(“i”)一样吗？

不一样，因为内存的分配方式不一样。String str="i"的方式，Java 虚拟机会将其分配到**常量池**中；而 String str=new String(“i”) 则会被分到**堆内存**中。

#### 4.4 String 属于基础的数据类型吗？

String 不属于基础类型
基础类型有 8 种：

- byte
- boolean
- char
- short
- int
- float
- long
- double

而 String 属于对象

#### 4.5 String s = “a”+“b”+”c”; 创建了多少对象,分别是什么？

- 5个对象
  - a
  - b
  - c
  - ab
  - abc

因为String是被final修饰的，一旦被创建就不能被改变,所有在使用常量进行相加的时候,都是在创建新的字符串对象，最后在把字符串"abc"这个常量值赋值给引用变量s

#### 4.6 如何实现StringBuffer和String的相互转换？

1. 通过String类的构造方法
2. 通过StringBuffer类中的toString()方法
3. 通过StringBuffer类中的substring()方法 (注：不常用)
   String 转换到 StringBuffer的方式：
4. 通过StringBuffer类的构造方法
5. 通过StringBuffer类的append()、insert()方法

#### 4.7 如何实现String和int数据的相互转换

1. String – Integer – int通过Integer类的intValue()方法
2. 通过Integer类的parseInt(String s)方法
   Int 转换到 String的方式：
3. Int – Integer – String Integer的toSting()
4. 通过String类的valueOf()方法
5. 通过Integer类的toSting(int i)方法
6. 通过与字符串""相连接

#### 4.8 如何实现【基本数据类型】与【基本数据封装类】之间的相互转换

1. 通过包装类的构造方法
2. 通过包装类的静态方法valueOf()
   包装类 转换到 基本数据类型的方式：
3. 通过包装类的方法xxxValue()

#### 4.9 请说明String与StringBuffer二者之间的区别？

String类表示内容**不可以改变**的字符串
StringBuffer类表示内容**可以被修改**的字符串

#### 4.10 请说明StringBuffer与StringBilder二者之间的区别？

- **StringBilder**
  是线程不安全的，运行效率高

  > 如果一个字符串变量是在方法里面定义，这种情况只可能有一个线程访问它，不存在不安全的因素了，则用StringBuilder。

- **StringBuffer**
  是线程安全的，因为加了同步锁 synchronized ，运行要低于StringBilder

  > 如果要在类里面定义成员变量，并且这个类的实例对象会在多线程环境下使用，那么最好用StringBuffer。

#### 4.11 如何实现Date与String相互转换？

- Date 转 String

  - Date类的toString()方法
  - DateFormat类的format()方法

- String 转 Date

  - Date类的构造方法

    > 已过时，被DateFormat类的parse(String s)方法取代

  - DateFormat类的parse()方法

#### 4.12 如何实现Date与long相互转换?

- Date 转 long
  通过Date类的getTime()方法
- long 转 Date
  通过Date类的构造方法

#### 4.13 什么是正则表达式？

正则表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正则达表示通常被用来检索、替换那些符合某个模式的文本。

### 5. Java 类、抽象类、接口、内部类、代码块

#### 5.1 类是什么？ 对象是什么？举例说明

是一组相关属性和行为的集合是一个抽象的东西,对象则是该类的一个具体的体现。

举例: 学生就是一个类,然后每一个学生都是学生的一个个具体的体现,所以每一个学生就是一个学生。

#### 5.2 类由哪些内容组成？

类由成员变量和成员方法组成
成员变量对应的就是事物的属性(就是事物固有的信息,比如: 人的属性有身高 , 姓名 , 年龄 , 学历…) , 成员方法对应的是行为(行为: 就是该事物可以做的事情,比如:人的行为有: 吃饭,睡觉…)

#### 5.3 抽象类是什么,抽象类的特点?

- **抽象类的定义**
  使用了关键字abstract声明的类叫做“抽象类”。如果一个类里包含了一个或多个抽象方法，类就必须指定成abstract（抽象）。“抽象方法”，属于一种不完整的方法，只含有一个声明，没有方法主体。

- **抽象类的特点**:

  - 抽象类的定义格式: abstract class 类名{}

  - 抽象方法的定义格式: public abstract 返回值类型 方法名();

  - 抽象类中可以存在抽象方法,也可以存在非抽象方法

  - 抽象类不能直接进行实例化,我们可以使用多态的形式进行进行间接实例化

  - 抽象类的子类

    - 可以是抽象类

      > 如果子类还是抽象类,那么我们还是不能进行实例化，还需要一个子类去继承

    - 也可以是非抽象类

      > 子类必须重写父类的抽象方法

#### 5.4 抽象类能使用 final 修饰吗？

不能，定义抽象类就是让其他类继承的，如果定义为 final 该类就不能被继承，这样彼此就会产生矛盾，所以 final 不能修饰抽象类

#### 5.5 抽象类必须要有抽象方法吗？

不需要，抽象类不一定非要有抽象方法。

示例代码：

```java
abstract class Cat {

  public static void sayHi() {
    System.out.println("hi~");
  }
}
123456
```

上面代码，抽象类并没有抽象方法但完全可以正常运行。

#### 5.6 抽象类中有没有构造方法,如果有它是用来做什么的?

抽象类虽然不能进行实例化,但是抽象类中是存在构造方法,该构造方法的作用是用于子类访问父类数据时的初始化.

#### 5.7 接口中成员变量的特点,以及成员方法的特点?

**接口中的成员变量都是常量**,存在默认的访问修饰符:

```
public static final
1
```

**接口中的成员方法都是抽象方法**,存在默认的访问修饰符:

```
public abstract
1
```

#### 5.8 抽象类和接口的区别?

#### 成员区别

- 抽象类
  - 成员变量
    可以是变量，也可以是常量
- 构造方法
  **有**
- 成员方法
  可以抽象，也可以非抽象
- 接口：
  - 成员变量
    只可以常量
  - 成员方法
    只可以抽象

#### 关系区别

- 类与类
  继承，单继承
- 类与接口
  实现，单实现，多实现
- 接口与接口
  继承，单继承，多继承

#### 设计理念区别

- 抽象类
  被继承体现的是：“**is a**”的关系。 抽象类中定义的是该继承体系的共性功能。
- 接口
  被实现体现的是：“**like a**”的关系。 接口中定义的是该继承体系的扩展功能。

#### 5.9 请说出类与类,类与接口,以及接口与接口的关系以及特点?

- 类与类
  是**继承**的关系,`只支持单继承,可以是多层继承`。
- 类与接口
  是**实现**的关系,`可以是多实现`
- 特点
  - 一个类可以继承一个类的同时,还可以实现多个接口
  - 接口与接口是继承的关系,可以是单继承也可以是多继承

#### 5.10 构造方法的作用是什么？构造方法的特点是什么？构造方法的注意事项？ 构造方法中可不可以写return 语句呢？

构造方法的作用是用于给类的成员变量赋值,完成类的初始化工作

- 构造方法的特点:
  构造方法的名称和类名相同
  构造方法没有返回值类型,连void也没有
  构造方法没有具体的返回值
- 构造方法的注意事项:
  - 如果一个类没有给出构造方法,系统将会提供一个默认无参的构造方法
  - 如果我们给出类构造方法,系统将不会提供默认无参的构造方法,这个时候如果我们还想使用无参的构造方法来创建对象,那么就需要我们给出无参的构造方法
    可以写空的return语句.

#### 5.11 一个类的缺省构造方法可以有参数吗？

一个类的缺省构造方法没有参数

#### 5.12 子父类中构造方法的执行有什么特点？为什么要这样？

1. 子类有所有的构造方法默认都会访问父类中空参数的构造方法。
   因为子类会继承父类中的数据，可能还会使用父类的数据。所以，子类初始化之前，一定要先完成父类数据的初始化。
   **每一个构造方法的第一条语句默认都是：super()**
2. 如果父类中没有空参数的构造方法，通过下列方式解决
   - 子类通过super去显示调用父类其他的带参的构造方法
   - 子类通过this去调用本类的其他构造方法(本类其他构造也必须首先可以访问了父类构造)

> 注意：super(…)或者this(…)必须出现在第一条语句上，否则，就会有父类数据的多次初始化

#### 5.13 请说明一个对象的创建过程做了哪些事情？

Student s = new Student();

1. 将Student.class 字节码文件加载到内存
2. 在栈内存中，开辟一个空间存储 s变量，用来记录Student对象的引用
3. 在堆内存中，开辟一个空间存储 new Student()对象的成员信息
4. 加载类中静态成员
5. 执行类中静态代码块
6. 加载对象中普通成员
7. 执行构造代码块
8. 执行构造方法
9. 将new Student()的地址赋值给 s 变量

#### 5.14 匿名内部类的格式是什么?其本质是什么?

- 匿名内部类的格式
  new 类名或者接口名() {
  方法重写 ;
  } ;
- 本质
  匿名内部类本质是一个继承了某一个类或者实现了某一个接口的子类对象

#### 5.15 内部类有哪些访问特点？

1. 内部类可以直接访问外部类的成员，包括私有
2. 外部类要访问内部类的成员，必须先创建内部类对象

#### 5.16 静态代码块，构造代码块，构造方法的执行顺序是什么以及执行特点？

1. 先执行所有的静态代码块，再执行所有的构造代码块，最后执行构造方法
2. 静态代码块只执行一次, 构造代码块和构造方法,每创建一次对象就执行一次

#### 5.17 什么是匿名对象？什么时候使用匿名对象？

匿名对象指：没有起名字的对象
使用匿名对象:
a:调用方法，仅仅只调用一次的时候
b:匿名对象可以作为实际参数传递

### 6. 封装、继承、多态

#### 6.1 使用面向对象【封装】的好处有哪些？

隐藏实现细节，提供公共的访问方式；
提高了代码的复用性；
提高安全性。

#### 6.2 继承的好处是什么？

1. 提高了代码的维护型
2. 提供了代码的复用性
3. 让类与类之间产生了关系, 是多态的前提

#### 6.3 Java 中的类的继承特点是什么以及继承的注意事项？

继承的特点: 在java语言中类的继承只支持单继承,不支持多继承.但是可以多层继承。

继承的注意事项:

1. 子类只能继承父类非私有的成员
2. 子类不能继承父类的构造方法,但是可以通过super去访问父类的构造方法
3. 不要为了某个功能去使用继承

#### 6.4 this 和 super 分别是什么，他们各自的应用场景是什么？

- this
  代表的是本类对象的引用 , 谁调用我这个方法,这个方法里边的this就代表谁。一般的使用场景是,当局部变量隐藏了成员变量的时候,我们可以使用this去明确指定要访问的是成员变量
- super
  代表的是父类存储空间的一个标志(可以理解为父类对象的引用),我们可以使用super来访问父类的成员

#### 6.5 什么是方法重写？需要注意哪些问题？

方法重写：指子类中出现了和父类中一模一样的方法声明，也被称为方法覆盖，方法复写

需要注意的问题：

```
1. 父类中私有方法不能被重写
2. 子类重写父类方法时，访问权限不能更低
3. 父类静态方法，子类也必须通过静态方法进行重写。（其实这个算不上方法重写，但是现象确实如此）
123
```

#### 6.6 请解释什么是方法的重载?

方法重载指在同一个类中，允许存在一个以上的同名方法，只要它们的参数个数或者参数类型不同即可。

方法重载特点：
a) 与返回值类型无关，只看方法名和参数列表
b) 在调用时，虚拟机通过参数列表的不同来区分同名方法

#### 6.7 方法重写和重载有什么区别？

- **重载Overload**
  表示同一个类中可以有多个名称相同的方法，但这些方法的参数列表各不相同(即参数个数或类型不同),与返回值类型无关。
- **重写Override**
  发生在子父类中的一个现象, 子类中出现了和父类中一模一样的方法,与返回值有关.

#### 6.8 什么是多态,多态的前提是什么?

一种事物在不同时刻表现出来的状态就是多态

多态的前提：

- 需要有继承
- 需要有方法重写(其实没有也是可以的,但是没有意义)，不同状态的表现就是就是靠方法重写体现的
- 需要有父类的引用指向子类对象：Fu f = new 子类()

#### 6.9 多态中成员(成员变量,成员方法,静态成员方法)的访问特点是什么?

- **访问成员变量**
  编译看左边 , 运行看左边

  > 因为成员变量其实就是属性,属性就是只该事物的描述信息,所以使用父类在访问的时候,访问的就是父类的成员变量

- **成员方法**
  编译看左边,运行看右边

  > 这个是多态的本质,存在动态绑定的机制

- **静态成员方法**
  编译看左边,运行看左边

  > 所以说静态算不上重写

#### 6.10 多态的好处?

1. 提供了代码的维护性(通过继承保证)
2. 提供了代码的扩展性(通过多态保证),这个特点也体现了多态的最常见的应用,作为参数传递.

#### 6.11 多态的弊端是什么,如果我们想访问子类的特有的功能我们应该怎么办?

多态的弊端,不能访问子类中特有的功能
如果我们还想使用子类中特有的功能,我们需要使用**向下转型**

> 向下转型: 就是将父类的引用强制转换成子类的引用,在向下转型的过程中需要注意一个异常: ClassCastException

### 7. Java 容器（List、Set、Map）

#### 7.1 请简述集合和数组的异同点？

#### 集合：

- 可以存储不同类型的元素(通常使用存储一种类型元素)
- 集合的长度可以改变

#### 数组：

- 必须存储相同一类型的元素
- 数组的长度固定

#### 7.2 Iterator 和 ListIterator 有什么区别？

- Iterator 可以遍历 Set 和 List 集合，而 ListIterator 只能遍历 List。
- Iterator 只能单向遍历，而 ListIterator 可以双向遍历（向前/后遍历）。
- ListIterator 从 Iterator 接口继承，然后添加了一些额外的功能，比如添加一个元素、替换一个元素、获取前面或后面元素的索引位置。

#### 7.3 迭代器Iterator是什么？怎么使用？有什么特点？

Iterator 接口提供遍历任何 Collection 的接口。我们可以从一个 Collection 中使用迭代器方法来获取迭代器实例。迭代器取代了 Java 集合框架中的 Enumeration，迭代器允许调用者在迭代过程中移除元素。

Iterator 使用代码如下：

```java
List<String> list = new ArrayList<>();
Iterator<String> it = list.iterator();
while(it.hasNext()){
  String obj = it.next();
  System.out.println(obj);
}
123456
```

Iterator的特点是更加安全，因为它可以确保，在当前遍历的集合元素被更改的时候，就会抛出 ConcurrentModificationException 异常。

#### 7.4 请简述常见的数据结构有哪些？

- 线性表
- 链表
- 栈
- 队列
- 树
- 哈希表

#### 7.5 请简述ArrayList、Vector、LinkedList三者的特点？

#### ArrayList

底层数组结构

- 特点
  - 线程不同步
  - 效率高
  - 元素查找快
  - 增删慢；

#### LinkedList

底层链表结构

- 特点
  - 线程不同步
  - 效率高
  - 元素增删快
  - 查找慢


#### Vector

底层数组结构

- 特点
  - 线程同步
  - 安全
  - 元素查找快
  - 增删慢



#### 7.6 Array 和 ArrayList 有何区别？

- Array 可以存储基本数据类型和对象，ArrayList 只能存储对象。
- Array 是指定固定大小的，而 ArrayList 大小是自动扩展的。
- Array 内置方法没有 ArrayList 多，比如 addAll、removeAll、iteration 等方法只有 ArrayList 有。

#### 7.7 请简述ArrayList、Vector、LinkedList，分别在什么时候使用？

#### 线程安全

Vector

#### 非线程安全

- 查找多
  ArrayList
- 增删多
  LinkedList

#### 7.8 请简述并发修改异常产生的原因？如何解决？

#### 异常

ConcurrentModificationException

> 在迭代器迭代的过程中，集合中的元素个数发生了改变，此时导致并发修改异常。

#### 解决方式

1. 通过列表迭代器自带的方法完成元素增删操作。
2. 通过for循环遍历集合，使用集合中的方法完成元素增删操作。

#### 7.9 在 Queue 中 poll()和 remove()有什么区别？

- 相同点：都是返回第一个元素，并在队列中删除返回的对象。

- 不同点：如果没有元素 poll()会返回 null，而 remove()会直接抛出 NoSuchElementException 异常。

- 代码示例：

  ```java
  Queue<String> queue = new LinkedList<String>();
  queue.offer("string"); // add
  System.out.println(queue.poll());
  System.out.println(queue.remove());
  System.out.println(queue.size());
  12345
  ```

#### 7.10 请简述List<? extends T>和List<? super T>之间有什么区别？

- List<? extends T>
  **向下限制**
  ? extends T ： 代表接收的泛型类型为T类型或T子类类型
- List<? super T>
  **向上限制**
  ? super T ：代表接收的泛型类型为T类型或T父类类型

#### 7.11 Java 容器都有哪些？

Java 容器分为 Collection 和 Map 两大类，其下又有很多子类，如下所示：

- Collection
- List
  - ArrayList
  - LinkedList
  - Vector
  - Stack
- Set
  - HashSet
  - LinkedHashSet
  - TreeSet
- Map
  - HashMap
  - LinkedHashMap
  - TreeMap
  - ConcurrentHashMap
  - Hashtable

#### 7.12 说一下 HashSet 的实现原理？

HashSet 是基于 HashMap 实现的，HashSet 底层使用 HashMap 来保存所有元素，因此 HashSet 的实现比较简单，相关 HashSet 的操作，基本上都是直接调用底层 HashMap 的相关方法来完成，HashSet 不允许重复的值。

#### 7.13 List、Set、Map 之间的区别是什么？

List、Set、Map 的区别主要体现在两个方面：元素是否有序、是否允许元素重复。

三者之间的区别，如下表：
![img](https://img-blog.csdnimg.cn/img_convert/5fd0771e9cc6d7f9bb583ad92343f892.png)

#### 7.14 请简述Set集合的特点？

1. 不能存储重复元素；
2. 元素是按照某种排序规则存储的

#### 7.15 说一下 HashMap 的实现原理？

HashMap 基于 Hash 算法实现的，我们通过 put(key,value)存储，get(key)来获取。当传入 key 时，HashMap 会根据 key. hashCode() 计算出 hash 值，根据 hash 值将 value 保存在 bucket 里。当计算出的 hash 值相同时，我们称之为 hash 冲突，HashMap 的做法是用链表和红黑树存储相同 hash 值的 value。当 hash 冲突的个数比较少时，使用链表否则使用红黑树。

#### 7.16 请简述HashSet是如何保证元素唯一性的?

HashSet集合中存储的元素，通过重写hashCode() 与 equals()方法来保证元素唯一性

#### 7.17 请简述TreeSet是如何保证元素唯一性与排序的？

1. 实现自然排序接口 Comparable，重写 compareTo(T t)方法
2. 实现比较器排序接口 Comparator，重写 compare(T t1, T t2)方法

#### 7.18 请说明Map接口和Collection接口的区别

**Map接口**是双列集合顶层接口，每个位置存储一对元素(key, value)
**Collection接口**是单列集合顶层接口，每个位置存储一个元素

#### 7.19 请说出Map集合的遍历方式

1. 键找值
2. 键值对对象，找键，找值

#### 7.20 怎么确保一个集合不能被修改？

可以使用 Collections.unmodifiableCollection(Collection c) 方法来创建一个只读集合，这样改变集合的任何操作都会抛出 Java. lang. UnsupportedOperationException 异常。

示例代码如下：

```java
List<String> list = new ArrayList<>();
list. add("x");
Collection<String> clist = Collections.unmodifiableCollection(list);
clist.add("y"); // 运行时此行报错
System.out.println(list.size());
12345
```

#### 7.21 如何实现数组和 List 之间的转换？

- 数组转 List
  使用 Arrays.asList(array) 进行转换。

- List 转数组
  使用 List 自带的 toArray() 方法。

- 代码示例：

  ```java
  // list to array
  List<String> list = new ArrayList<String>();
  list.add("这个");
  list.add("小程序");
  list.add("很赞");
  list.toArray();
  
  // array to list
  String[] array = new String[]{"这个","小程序","很赞"};
  Arrays.asList(array);
  12345678910
  ```

#### 7.22 如何决定使用 HashMap 还是 TreeMap？

对于在 Map 中插入、删除、定位一个元素这类操作，HashMap 是最好的选择，因为相对而言 HashMap 的插入会更快，但如果你要对一个 key 集合进行有序的遍历，那 TreeMap 是更好的选择。

#### 7.23 请说明HashMap和Hashtable的区别

- HashMap
  - 线程不同步
  - 效率高
  - 可以存储null键null值
- Hashtable
  - 线程同步
  - 数据安全
  - 不可以存储null键null值

#### 7.24 请解释Collection与Collections的区别

- **Collection**
  单列集合的顶层接口，包含集合中常用的方法。
- **Collections**
  集合工具类，包含获取集合最大元素值、集合排序等方法。

#### 7.25 数组有几种创建的方式？分别是什么？

2种。动态创建和静态创建。

### 8. Java 异常

#### 8.1 请说说什么是异常？异常的分类？

- **什么是异常？**
  Java异常是java提供的用于`处理程序中错误的一种机制`。
  所谓错误是指在程序运行的过程中发生的一些异常事件（如：除0错误，数组下标越界，所要读取的文件不存在）。设计良好地程序应该在程序异常发生时提供处理这些错误的方法，使得程序不会因为异常的发送而阻断或产生不可预见的结果。

  Java程序的执行过程中如出现异常事件，可以生成一个异常类对象，该异常对象封装了异常事件的信息，并将被提交给java运行时系统，这个过程称为抛出异常。

  当java运行时系统接收到异常对象时，会寻找能处理这一异常的代码并把当前异常对象交其处理，这一过程称为捕获异常。

- **异常的分类**-Exception、Error、Runtime Exception

  - Exception
    所有异常类的父类，其子类对应了各种各样的可能出现的异常事件，一般需要用户显示的声明或捕获。
  - Error
    称为错误，由java虚拟机生成并抛出，包括动态链接失败，虚拟机错误等，程序对其不做处理。
  - Runtime Exception
    一类特殊的异常，如被0除、数组下标超范围等，其产生比较频繁，处理麻烦，如果显示的声明或捕获将会对程序可读性和运行效率影响很大。因此由系统自动检测并将它们交给缺省的异常处理程序（用户可不必对其处理）。

#### 8.2 请说出异常处理的方式？

- 捕获异常

  ```java
  try{
  
  }catch(XxxException e){
  
  }finally{
  
  }
  1234567
  ```

- 抛出异常

  ```java
  throw \ throws()
  1
  ```

- 异常五个关键字

  - **try**
    try{…}语句制定了一段代码，这段代码就是一次捕获并处理异常的范围。在执行过程中，这段代码可能会产生并抛出一种或几种类型的异常对象，它后面的catch语句要分别对这些异常做相应的处理。如果没有异常发生，所有的catch代码段都被略过不执行。
  - **catch**
    在catch语句块中是对异常进行处理的代码，每个try语句块可以伴随一个或多个catch语句，用于处理可能产生的不同类型的异常对象。在catch中声明的异常对象（catch(XxxException e)）封装了异常事件发生的信息，在catch语句块中可以使用这个对象的一些方法获取这些信息。
  - **finally**
    finally语句为异常处理提供一个统一的出口，使得在控制流程转到程序的其他部分以前，能够对程序的状态做统一的管理。无论try所指定的程序块中是否抛出异常，finally所指定的代码都要执行。通常在finally语句中可以进行资源的清除工作。
  - **throw**
    throws关键字通常被应用在声明方法时，用来指定可能抛出的异常。多个异常可以使用逗号隔开。当在主函数中调用该方法时，如果发生异常，就会将异常抛给指定异常对象。
  - **throws**
    throw关键字通常用在方法体中，并且抛出一个异常对象。程序在执行到throw语句时立即停止，它后面的语句都不执行。通常throw抛出异常后，如果想在上一级代码中捕获并处理异常，则需要在抛出异常的方法中使用throws关键字在方法声明中指定要抛出的异常；如果要捕获throw抛出的异常，则必须使用try{}catch{}语句。

#### 8.3 请说说编译期异常和运行期异常的区别？

- **编译时异常**
  程序正确，但因为外在的环境条件不满足引发。对商用软件系统，程序开发者必须考虑并处理这类异常。Java编译器强制要求处理这类异常，如果不捕获这类异常，程序将不能被编译。
- **运行期异常**
  这意味着程序存在bug，如数组越界，0被除，传入参数不满足规则等，这类异常需要更改程序来避免，java编译器强制要求处理这类异常。
- **错误**
  一般很少见，也很难通过程序解决。它可能源于程序的bug，但一般更可能源于环境问题，如内存耗尽。错误在程序中无须处理，而由运行环境处理。

#### 8.4 请说说throws与throw的区别？

- **throws**
  通常被应用在声明方法时，用来**指定可能抛出的异常**。多个异常可以使用逗号隔开。当在主函数中调用该方法时，如果发生异常，就会将异常抛给指定异常对象。
- **throw**
  通常用在方法体中，并且**抛出一个异常**对象。程序在执行到throw语句时立即停止，它后面的语句都不执行。通常throw抛出异常后，如果想在上一级代码中捕获并处理异常，则需要在抛出异常的方法中使用throws关键字在方法声明中指定要抛出的异常；如果要捕获throw抛出的异常，则必须使用try{}catch{}语句。

#### 8.5 请说说final、finally与finalize的区别？

- **final**
  用于声明属性，方法和类，分别表示属性不可变，方法不可覆盖，类不可继承。内部类要访问局部变量，局部变量必须定义成final类型。
- **finally**
  是异常处理语句结构的一部分，表示总是执行。
- **finalize**
  是Object类的一个方法，在垃圾收集器执行的时候会调用被回收对象的此方法，可以覆盖此方法提高垃圾收集时的其他资源回收，例如关闭文件等。JVM不保证此方法总被调用。

#### 8.6 请说说异常的注意事项及如何使用异常处理？

1. 子类重写父类方法时，子类的方法必须抛出相同的异常或父类异常的子类。
2. 如果父类抛出了多个异常，子类重写父类时，只能抛出相同的异常或者是他的子集，子类不能抛出父类没有的异常。
3. 如果被重写的方法没有异常抛出，那么子类的方法绝对不可以抛出异常，如果子类方法内有异常发生，那么子类只能try…catch，不能throws

#### 8.7 请说出最常见到的RuntimeException异常

- **NullPointerException**
  空指针引用异常
- **ClassCastException**
  类型强制转换异常
- **IllegalArgumentException**
  传递非法参数异常
- **ArithmeticException**
  算术运算异常
- **ArrayStoreException**
  向数组中存放与声明类型不兼容对象异常
- **IndexOutOfBoundsException**
  下标越界异常
- **NumberFormatException**
  数字格式异常

#### 8.8 请简述IO流的分类

- 字节流
  - 字节输入流 InputStream
  - 字节输出流 OutputStream
- 字符流
  - 字符输入流 Reader
  - 字符输出流 Writer

### 9. Java IO

#### 9.1 请简述字符编码是什么？请说出常见字符编码表？

- 字符编码是什么？
  字符编码（英语：Character encoding）也称字集码，是把字符集中的字符编码为指定集合中某一对象，以便文本在计算机中存储和通过通信网络的传递。常见的例子包括将拉丁字母表编码成摩斯电码和ASCII。其中，ASCII将字母、数字和其他符号编号，并用7比特的二进制来表示这个整数。通常会额外使用一个扩充的比特，以便以1个字节的方式存储。
- 常见的字符编码表如下
  - ASCII
  - GB2312
    是一个简体中文字符集，由6763个常用汉字和682个全角的非汉字字符组成。
  - GBK
    GBK编码标准兼容GB2312，共收录汉字21003个、符号883个，并提供1894个造字码位，简、繁体字融于一库
  - GB18030
    是在GBK基础上增加了一部分汉字
    Big5：在台湾、香港与澳门地区，使用的是繁体中文字符集
  - Unicode
    将世界上所有的符号都纳入其中，无论是英文、日文、还是中文等，大家都使用这个编码表，这样就利于同一的管理,在这个编码表中每一个字符占两个字节
  - UTF-8
    为了提高Unicode的编码效率，于是就出现了UTF-8编码。UTF-8可以根据不同的符号自动选择编码的长短。比如英文字母可以只用1个字节就够了。

#### 9.2 请说出学习过的IO流中的常用方法？

- 字节输入流 InputStream
  - read()
    读取一个字节
  - read(byte[])
    读取一个字节数组
- 字节输出流
  - write(int)
    写入一个字节
  - write(byte[])
    写入一个字节数组
- 字符输入流
  - read()
    读取一个字符
  - read(char[])
    读取一个字符数组
- 字符缓冲输入流
  - readLine()
    读取一行字符串
- 字符输出流
  - write(int)
    写入一个字符
  - write(char[])
    写入一个字符数组
  - write(String)
    写入一个字符串
- 字符缓冲输出流
  - newLine()
    写入一个换行符

#### 9.3 请说出转换流OutputStreamWriter与InputStreamReader 的作用？

- **OutputStreamWriter**
  使用编码表对字节流的数据进行编码
- **InputStreamReader**
  使用编码表对字节流中的数据进行解码

#### 9.4 Files的常用方法都有哪些？

- Files.exists()：检测文件路径是否存在。
- Files.createFile()：创建文件。
- Files.createDirectory()：创建文件夹。
- Files.delete()：删除一个文件或目录。
- Files.copy()：复制文件。
- Files.move()：移动文件。
- Files.size()：查看文件个数。
- Files.read()：读取文件。
- Files.write()：写入文件。

#### 9.5 BIO、NIO、AIO 有什么区别？

- BIO
  Block IO 同步阻塞式 IO，就是我们平常使用的传统 IO，它的特点是模式简单使用方便，并发处理能力低。
- NIO
  New IO 同步非阻塞 IO，是传统 IO 的升级，客户端和服务器端通过 Channel（通道）通讯，实现了多路复用。
- AIO
  Asynchronous IO 是 NIO 的升级，也叫 NIO2，实现了异步非堵塞 IO ，异步 IO 的操作基于事件和回调机制。

#### 9.6 请简述打印流(PrintStream、PrintWriter)的特点？

- **PrintStream的特点**
  在OutputStream基础之上提供了增强的功能，即可以方便地输出各种类型的数据（而不仅限于byte类型）的格式化表示形式。PrintStream的方法从不抛出IOException
- **PrintWriter的特点**
  提供了PrintStream的所有打印方法，其方法也从不抛出IOException。
- **区别**
  作为处理流使用时，PrintStream只能封装OutputStream类型的字节流，而PrintWriter既可以封装OutputStream类型的字节流，还能够封装Writer类型的字符输出流并增强其功能。
