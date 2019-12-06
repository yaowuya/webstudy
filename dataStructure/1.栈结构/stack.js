// 栈的封装
function Stack() {
    //栈的属性
    this.items = []
    //栈的相关操作
    //1.将元素压入栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }
    //2.出栈
    Stack.prototype.pop = function () {
        return this.items.pop()
    }
    //3.查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }
    //4.判定是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    //5.获取栈的元素个数
    Stack.prototype.size = function () {
        return this.items.length
    }
    //6.tostring方法
    Stack.prototype.toString = function () {
        let str = ""
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

}

let s = new Stack()
s.push(10)
s.push(11)
s.push(12)

console.log(s.toString());

s.pop()
console.log(s.toString(), s.peek(), s.size());

//十进制转二进制
function decTobin(num) {
    let bStack = new Stack()

    while (num > 0) {
        let temp = Math.floor(num / 2)
        let k = num % 2
        bStack.push(k)
        num = temp
    }
    let binaryStr = ''
    while (!bStack.isEmpty()) {
        binaryStr += bStack.pop() + ''
    }
    return binaryStr
}

console.log(decTobin(1000));
