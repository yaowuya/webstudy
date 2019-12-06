/*
也叫单体模式，核心思想是确保一个类只对应一个实例。
虽然js是弱类型的语言，但是js也有构造函数和实例。
所以这里可以理解为确保多次构造函数时，都返回同一个实例*/

function A(name) {
    // 如果已存在对应的实例
    if (typeof A.instance === 'object') {
        return A.instance
    }
    //否则正常创建实例
    this.name = name

    //缓存
    A.instance = this
    return this
}

let a1 = new A()
let a2 = new A()
console.log(a1 === a2);


let only = function (data) {
    this.data = data
    this.Instance = null;
}

only.go = function (data) {
    if (!this.Instance) {
        this.Instance = new only(data)
    }
    return this.Instance
}
let obj1 = only.go('1')
let obj2 = only.go('2')
console.log(obj1 === obj2);
console.log(obj1);
console.log(obj2);


class Single {
    constructor(data) {
        if (Single.prototype.Instance === undefined) {
            this.data = data
            Single.prototype.Instance = this
        }
        return Single.prototype.Instance
    }
}

let s1 = new Single("a")
let s2 = new Single("s")
s2.init = 'init'
console.log(s1);
console.log(s2);
console.log(s1 === s2)
