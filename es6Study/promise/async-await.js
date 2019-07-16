const dialogForm = {
    name: "",
    parent: "",
    bookCount: 0,
};
for(let[value,key] of Object.entries(dialogForm)){
    console.log(value,key);
}
const typeArray={
    value: 'hot',
    name: '热门'
};
const typeList=[{
    value: 'hot',
    name: '热门'
}, {
    value: 'new',
    name: '新书'
}, {
    value: 'reputation',
    name: '好评'
}, {
    value: 'over',
    name: '完结'
}, {
    value: 'monthly',
    name: '包月'
}];
const b=typeList.map(val=>{
   return {val:val.value,na:val.name}
});
console.log(b);
typeList.forEach(function (value,index) {
    console.log(value,index);
});
for(let type in typeArray){
    console.log(type);
}
for(let type of Object.values(typeList)){
    console.log(type.value);
}
