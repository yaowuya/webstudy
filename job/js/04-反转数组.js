
/**
 * 数组的反转
 */
let arr=[1,2,3,4,5,6,7,8,9];
let arr2=[1,2,3,4,5,6,7];

function reserve1(arr) {
    for (let i=0;i<arr.length/2;i++){
        let temp=arr[arr.length-1-i];
        arr[arr.length-1-i]=arr[i];
        arr[i]=temp;
    }
    return arr;
}

function reserve2(arr) {
   let rev=[];
   for(let i=arr.length-1;i>=0;i--){
       // rev[arr.length-1-i]=arr[i];
       rev.push(arr[i]);
   }
   return rev;
}

console.log(reserve1(arr));
console.log(reserve2(arr2));
