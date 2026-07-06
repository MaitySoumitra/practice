function fibonasis(n){
    let a=0, b=1
    for(let i=0; i<n; i++){
        let next=a+b
        a=b
        b=next
    }
    return a
}
console.log(fibonasis(6))

function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i=2; i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
console.log(isPrime(9))