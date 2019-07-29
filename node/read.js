const fs = require("fs");
fs.readFile("a.txt", function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString());
})

fs.readFile("a.txt","utf-8",function (err,data) {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
