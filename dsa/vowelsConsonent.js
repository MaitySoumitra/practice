function vowelsConsonent(str){
    let vowels=0
    let consonent=0
    for(let i=0; i<str.length; i++){
        let ch=str[i]
        if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
            vowels++
        }
        else consonent++
    }
    return {vowels, consonent}
}
console.log(vowelsConsonent("kjfhsrfooiwernopaofks"))

function checkPalindrome(str){
    let left=0
    let right=str.length-1
    while(left<right){
        if(str[left]!=str[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(checkPalindrome("madam"))

function checkPalindromeFor(str){
    for(let i=0; i<str.length; i++){
        for(j=0; j<str.length-i-1; j++){
            if(str[i]!=str[j]){
                return false
            }
        }
    }
    return true
}
console.log(checkPalindromeFor("madam"))