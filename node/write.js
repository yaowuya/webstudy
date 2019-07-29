const fs =require("fs");

fs.writeFile("./a.txt","你好，博客",function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log("success");
})
