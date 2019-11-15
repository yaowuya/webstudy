var async = require("async")


var concurrencyCount = 0;
var count = 0


var urls = [];
for (var i = 0; i < 30; i=i+5) {
    urls.push('http://datasource_' + i);
}
count++;
var fetchUrl = function (url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log(count, '现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(function () {
        concurrencyCount--;
        callback(null, {url:url,content: ' html content'});
    }, delay);
};

async.mapLimit(urls, 5, function (url, callback) {
    fetchUrl(url, callback);
}, function (err, result) {
    console.log('final:');
    console.log(result);
    for(let res of result){
        console.log(res.url);
    }
});

