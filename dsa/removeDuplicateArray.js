function removeDuplicate(arr){
    let word={}
    let result=[]
    for(let i of arr){
        if(!word[i]){
            word[i]=true
            result.push(i)
        }
    }
    return result

}
console.log(removeDuplicate([1,2,3,4,5,3,2]))