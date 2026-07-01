arr=[1,3,2,4,1]
result=set(arr)
print(result)

def removeDuplicate(arr):
    seen={}
    result=""
    for ch in arr:
        if ch not in seen:
            seen[ch]=True
            result+=ch
    return result
print(removeDuplicate("programming"))

def findLargest(s):
    for i in range(len(s)-1, -1, -1):
        if int(s[i])%2==0:
            return s[:i+1]
    return ""
print(findLargest("1121"))