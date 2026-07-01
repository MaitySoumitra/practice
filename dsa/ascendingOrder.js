function ascendingOrder(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]<arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(ascendingOrder([4,5,6,7,3,2,7]))

let arr=[4,5,6,7,3,2,1]
let result=arr.sort((a,b)=>
    a-b
)
console.log(result)
