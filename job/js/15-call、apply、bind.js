const arr = [1, 2]
function testFunc (num1, num2) {
    console.log('this.name:', this.name)
    console.log('num1:', num1)
    console.log('num2:', num2)
}
const testObj = {
    name: 'objName'
}

Function.prototype.myCall = function (testObj, ...rest) {
    if(arguments.length == 2 && Array.isArray(arguments[1])) {
        try{
            throw new Error('myCall参数错误！')
        } catch (e) {
            console.log(e.name + ': ' + e.message)
        }
        return
    }
    console.log(this) // 此处输出便于理解输出一下this内容
                      // this -> 最后调用myCall方法的[Function: testFunc]
    testObj._fn = this
    var ret = testObj._fn(...rest)
    delete testObj._fn
    return ret
}
testFunc.myCall(testObj, ...arr) // this.name: objName
                                 // num1: 1
                                 // num2: 2
