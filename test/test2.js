// var date=new Date(1557718500);
// var date2=new Date(1557718800);

// console.log(formatTime(1557912000,'Y-M-D h:m:s'))
// console.log(formatTime(1557921000,'Y-M-D h:m:s'))
var today = new Date();
var preday = new Date(today.getTime() - 1 * 60 * 60 * 1000);
console.log(formatTime(1556640000000/1000,'Y-M-D h:m:s'))
console.log(formatTime(preday.getTime()/1000,'Y-M-D h:m:s'))

/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
function formatTime(number,format) {

    var formateArr  = ['Y','M','D','h','m','s'];
    var returnArr   = [];

    var date = new Date(number * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr)
    {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

//数据转化
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
