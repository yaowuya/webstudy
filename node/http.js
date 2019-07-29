const http=require("http")

const server=http.createServer();

server.on("request",function (req,res) {
    console.log("收到用户请求,请求地址："+req.url);
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.write("成功,<a href='https://www.baidu.com'>百度</a>");
    res.end();
});

server.listen(8080,function () {
    console.log("服务启动成功");
})
