var today = new Date();


function getData(n) {
    var arr = [],
        i;
    for (i = 0; i < n; i = i + 1) {
        var preday=new Date();
        preday.setMonth(today.getMonth()-i);
        // preday=new Date(today.getTime() - i*24 * 60 * 60 * 1000)
        arr.push([
           preday.getTime(),parseFloat(((i*Math.random()+1)*100).toFixed(2))
        ]);
    }
    return arr;
}
var n = 10, data = getData(n);
console.log(data);
/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
function formatTime(number,format) {

    var formateArr  = ['Y','M','D','h','m','s'];
    var returnArr   = [];

    var date = new Date(number);
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
