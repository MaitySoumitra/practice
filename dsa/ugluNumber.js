function uglyNumber(n){
    if(n<=0){
        return false
    }
    for(let i of [2,3,5]){
        if(n%i===0){
            n=n/i
        }
    }
    return n===1
}
console.log(uglyNumber(14))