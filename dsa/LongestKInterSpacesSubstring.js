function LongestKInterspace(word, k){
    let result=""
    let current=word[0]
    for(let i=1; i<word.length; i++){
        let diff=Math.abs(word.charCodeAt(i)-word.charCodeAt(i-1))
        if(diff<=k){
            current+=word[i]
        }
        else{
            if(current.length>result.length){
                result=current
            }
            current=word[i]
        }
        if(current.length>result.length){
            result=current
        }

    }
    return result
}

console.log(LongestKInterspace("abcjdef", 1))