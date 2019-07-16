let items=[1,3,5,6,8,9]

let itemMap=items.map(item=>{
    if(item>3){
        return item
    }
});
let itemFilter=items.filter(item=>{return item>3});

console.log(itemMap,itemFilter);
