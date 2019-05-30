// 基本用法
/*ES6 新增了let命令，用来声明变量。它的用法类似于var，
但是所声明的变量，只在let命令所在的代码块内有效。*/
{
    let a = 1;
    var b = 0
}
// console.log(a)
console.log(b)

var a = [];

for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}
console.log(a[6]())

var b = [];
for (let i = 0; i < 10; i++) {
    b[i] = function () {
        console.log(i);
    };
}
b[6](); // 6
