def largestSubstringK(word, k):
    if not word:
        return ""
    result=""
    current=word[0]
    for i in range( len(word)):
        diff=abs(ord(word[i])-ord(word[i-1]))
        if diff<=k:
            current+=word[i]
        else:
            if len(current)>len(result):
                result=current
            current=word[i]
    if len(current)>len(result):
        result=current
    return result
print(largestSubstringK("abcdefsewirh", 1))