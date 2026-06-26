function reverseString(str){
    arr=str.split('')
    left=0
    right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr.join('')
}
console.log(reverseString("soumitra"))

// using for loop

function revrseStringUsingForLoop(str){
    let result=""
    for(let i=str.length-1; i>=0;i--){
        result+=str[i]
    }
    return result
}
console.log(revrseStringUsingForLoop("soumitra"))