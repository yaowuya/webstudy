### 面试题
#### 一、函数作用域：
```js
function f1(num, num1) {
    //函数默认重新创建参数
    //var num=num;
    //var num1=num1;
    num = 100;
    num1 = 100;
    num2 = 100;

    console.log(num);
    console.log(num1);
    console.log(num2);
}
```
#### 二、变量名与函数名重名的总结：
[js中变量名与函数名重名的问题](https://blog.csdn.net/charles_tian/article/details/79775909)

1.要知道js解析变量声明的顺序。在调用变量或者一个对象属性等的时候，查找的顺序是由里向外的，js执行代码是自上往下的。

2.函数声明和变量声明会置顶且函数声明更优先！

3.作用域链的查找顺序是由里向外，js执行代码顺序是自上往下
