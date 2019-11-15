async function fact(n){
    if(n==1){
        return 1
    }else{
        console.log(n);
        const b=await fact(n - 1)
        return n * b
    }
}

console.log(fact(5));
