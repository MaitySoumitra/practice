def countconsistence(allowed, words):
    allowed_set=set(allowed)
    count=0
    for word in words:
        ok=True
        for ch in word:
            if ch not in allowed_set:
                ok=False
                break
        if ok:
            count+=1
    return count
print(countconsistence("cad",["cc","acd","b","ba","bac","bad","ac","d"]))

def climbStairs(nums):
    if nums<=2:
        return nums
    prev1=2
    prev2=1
    for i in range(3, nums+1):
        next=prev1+prev2
        prev2=prev1
        prev1=next
    return prev1
print(climbStairs(5))