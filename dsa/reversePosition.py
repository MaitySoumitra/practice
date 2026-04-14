def reversePosition(str,k):
    return str[:k][::-1]+str[k:]
print(reversePosition("abcdfe", 3))

def reverse(str):
    left=0
    right=len(str)-1
    while left<right:
        str[left], str[right]=str[right], str[left]
        left+=1
        right-=1
    return str
print(reverse(["h","e","l","l","o"]))