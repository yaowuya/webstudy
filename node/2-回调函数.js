function callFunction(fun,name) {
    fun(name);
}

var sayBye=function (name) {
    console.log(name+"bye");
}

callFunction(sayBye,"123");
