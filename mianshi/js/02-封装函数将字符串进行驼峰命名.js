var foo='get-element-by-id';


function toUpStr(str) {
    var arr=str.split("-");
    for(var i=1;i<arr.length;i++){
        // var ele=arr[i].split("");
        // ele[0]=ele[0].toUpperCase()
        // arr[i]=ele.join("")
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1)
    }
    return arr.join("");
}

console.log(toUpStr(foo));
