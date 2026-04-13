def getMinDistance(num, target, start):
    n=len(num)
    for i in range(n):
        if start-i >=0 and num[start-i]==target:
            return i
        if start+i <n and num[start+i]==target:
            return i
print(getMinDistance([1,2,3,4,5],5,3))