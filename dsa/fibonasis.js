function fibonasis(s){
    let a=0,b=1
    for(let i=0; i<s; i++){
        let next=a+b
        a=b
        b=next
    }
    return a
}

function isPrime(n){
    if(n<=1) return false
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
console.log(fibonasis(6))
console.log(isPrime(7))