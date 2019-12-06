/**
 赋值：就是两个对象指向的内存地址一样，
 a=b赋值后的新对象也指向同一个存储地址所以b变化a跟随变化，

 浅拷贝：拷贝对象的一级元素的地址，
 如果一级元素全部为值类型就会互不干扰，
 如果一级元素有引用类型，改变引用类型的里面的值，会改变原对象。

 深拷贝：拷贝对象各级元素的存储地址。
 **/
/**-------浅拷贝---------**/
let a = {
    name: "123",
    age: 12,
    color: [1, 2, 3],
    obj: {animal: 'dog'}
}

function shallowCopy(obj) {
    let res = {}
    for (let k in obj) {
        res[k] = obj[k]
    }
    return res
}

let b = shallowCopy(a)

b.age = 44
b.obj['duck'] = 1
console.log(b, a);

//Object.assign()
let target = {};
let source = {a: 1, b: {c: 1}};
Object.assign(target, source);
console.log(target); //{a:1}
source.a = 2;
target.b.d = 3
console.log(source); //{a:2}
console.log(target); //{a:1}

/**-------深拷贝---------**/
let obj1 = {
    a: {
        b: 1
    }
}

function deepClone(obj) {
    let cloneObj = {}
    for (let key in obj) {
        if (typeof key === 'object') {
            cloneObj[key] = deepClone(obj[key])
        } else {
            cloneObj[key] = obj[key]
        }
    }
    return cloneObj
}

let obj2 = deepClone(obj1);
obj1.a.b = 2;
console.log(obj2); //{a:{b:1}}

//JSON.stringify()
// let obj1 = {
//     a: 1,
//     b: [1, 2, 3]
// }
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// console.log(obj2); //{a:1,b:[1,2,3]}
// obj1.a = 2
// obj1.b.push(4);
// console.log(obj1); //{a:2,b:[1,2,3,4]}
// console.log(obj2); //{a:1,b:[1,2,3]}
