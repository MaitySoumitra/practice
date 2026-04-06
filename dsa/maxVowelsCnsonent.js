function maxVowelsConsonet(s){
  let freq={}
  let vowels="aeiou"
  for(let ch of s){
    freq[ch]=(freq[ch]||0)+1
  }
  let maxVowels=0
  let maxConsonent=0
  for(let ch in freq){
    if(vowels.includes(ch)){
      maxVowels=Math.max(maxVowels, freq[ch])
    }
    else{
      maxConsonent=Math.max(maxConsonent, freq[ch])
    }
  }
  return maxVowels+maxConsonent

}

console.log(maxVowelsConsonet("aeiaeia"))