/**
基本思想: 冒泡排序，类似于水中冒泡，较大的数沉下去，较小的数慢慢冒起来，假设从小到大，即为较大的数慢慢往后排，较小的数慢慢往前排。
直观表达：每一趟遍历，将一个最大的数移到序列末尾。
*/

let arr = [4, 3, 5, 2, 1, 9,0];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
       if(arr[j]>arr[j+1]){
           let temp=arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;
       }
    }
    console.log(arr);
}
