var num1 = 55;
var num2 = 66;

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

f1(num1, num2);

console.log(num1);
console.log(num2);

// console.log(num);//ReferenceError: num is not defined

function Person(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

function f2(person) {
    person.name = "ls";
    person = new Person("aa", 18, 10)
}

var p = new Person("zs", 18, 1000);
console.log(p.name);
f2(p);
console.log(p.name);

var obj = {
    a: 1
}

function f3(obj) {
    obj.a = 3;
}

f3(obj);

console.log(obj);

var Obj2 = function (a, b) {
    this.a = a;
    this.b = b;
}

var o=new Obj2(1,2);

function f4(obj2) {
    obj2.a=4
}

f4(o);

console.log(o);
