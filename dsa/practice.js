function reverseString(str){
    str=str.split('')
    let left=0
    let right=str.length-1
    while(left<right){
        let temp=str[left]
        str[left]=str[right]
        str[right]=temp
        left++
        right--

    }
    return str.join('')
}
console.log(reverseString("soumitra"))
function reverseFor(str){
    result=""
    for(let i=str.length-1; i>=0;i--){
        result+=str[i]

    }
    return result
}
console.log(reverseFor("soumitra"))

function removeDuplicate(str){
    let word={}
    let result=""
    for(let ch of str){
        if(!word[ch]){
            word[ch]=true
            result+=ch
        }
    }
    return result
}
console.log(removeDuplicate("soumitrasoumitra"))

function removeDuplicateArray(arr){
    let word={}
    let result=[]
    for(let ch of arr){
        if(!word[ch]){
            word[ch]=true
            result.push(ch)
        }
    }
    return result
}
console.log(removeDuplicateArray([1,2,3,4,5,1,2,3]))