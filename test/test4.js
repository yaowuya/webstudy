var b={
    "a":[]
}
b.a=[{"bb":1},{"bb":2}]

function f(item) {
    item.forEach(function (value) {
        value["bb"]="a"
    })
    console.log(item);
}
f(b.a)
console.log(b.a);
