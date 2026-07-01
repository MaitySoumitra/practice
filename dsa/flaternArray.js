function flaternArray(arr){
    let result=[]
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flaternArray(arr[i]))
        }
        else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flaternArray([1,2,[2,3], 3, [7,6]]))