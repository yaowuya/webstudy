function Animal(species) {
    this.species = species || '动物'
}

Animal.prototype.eat = function () {
    console.log('eat');
}

//1.构造继承
/*    缺点：
    1.实例并不是父类的实例，只是子类的实例
    2.只能继承父类的实例属性和方法，不能继承原型属性和方法*/
function Cat(name) {
    Animal.call(this)
    console.log("CatThis", this);
    this.name = name;
}

let cat = new Cat('大猫')


//2.原型继承

/*缺点：
    1.无法实现多继承
    2.创建子类实例时，无法想父类构造函数传参*/
function Dog(name) {
    this.name = name
}

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog
let dog = new Dog("大毛")
dog.eat()
console.log(dog.species, dog.name);

//组合继承
/**
 * 特点：
 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
 既是子类的实例，也是父类的实例
 不存在引用属性共享问题
 可传参
 函数可复用

 缺点：
 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
 * **/
function Duck(name) {
    Animal.call(this, 'duck')
    this.name = name || 'tom'
}

Duck.prototype = new Animal()
Duck.prototype.constructor = Duck

let duck = new Duck('duck')

console.log(duck.species);
// 3.实例继承
/*
* 缺点
    1.实例是父类的实例，不是子类的实例
    2.不支持多继承
* */
function Goose(name) {
    let instance = new Animal()
    instance.name = name || '';
    return instance
}

let goose = new Goose('大鹅')

//拷贝继承
/**
 * 特点：

 支持多继承
 缺点：

 效率较低，内存占用高（因为要拷贝父类的属性）
 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
 **/

function Pig(name) {
    let animal=new Animal()
    for(let a in animal){
        console.log(a);
        Pig.prototype[a]=animal[a]
    }
    Pig.prototype.name = name || 'Tom';
}
// Test Code
var pig = new Pig();
console.log(pig.name);
console.log(pig instanceof Animal); // false
console.log(pig instanceof Pig); // true
