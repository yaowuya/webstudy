函数作用域：
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

