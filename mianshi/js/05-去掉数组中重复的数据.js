let arr=[1,2,2,3,4,30,50,50,4,9,99,20,30]

let p=new Set(arr)
console.log([...p]);

function setFunc(arr) {
    let res=[]
    for(let i=0;i<arr.length;i++){
        let flag=false;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]==arr[i]){
                flag=true;
                break;
            }
        }
        if(!flag){
            res.push(arr[i])
        }
    }
    return res;
}

function setFunc2(arr){
    let t=[]
    t[0]=arr[0]
    for(let i=0;i<arr.length;i++){
        for(let k=0;k<t.length;k++){
            if(arr[i]==t[k]){
                break;
            }
            if(k==t.length-1){
                t.push(arr[i])
            }
        }
    }
    return t;
}
console.log(setFunc(arr));
console.log(setFunc2(arr));
