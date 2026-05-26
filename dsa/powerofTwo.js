function powerofTwo(n){
    power=0
    if(n<=0){
        return false
    }
    while(n%3===0){
        n=n/3
    }
    return n===1
}
console.log(powerofTwo(-1))