function Person(name) {
    this.name = name
}

let b = Person
Person.prototype.eat = () => {
    console.log('eat')
}
Person.prototype.play = () => {
    console.log('play')
}
let Han = new Person('Han')

let obj = {
    a: 1
}

function func(obj) {
    obj.a = 2;
}

func(obj)
console.log(obj);

let arry = [1, 2, 3, 4]

function funcArray(arr) {
    arr[0] = 0
}

funcArray(arry)
console.log(arry);

let myFunction = new Function("a", "b", "return a+b");
console.log(myFunction);
