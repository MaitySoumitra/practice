def zerobased_permutation(nums):
    n=len(nums)
    ans=[0]*n
    for i in range(n):
        ans[i]=nums[nums[i]]
    return ans

print(zerobased_permutation([0,2,1,5,3,4]))
# For nums = [0,2,1,5,3,4]:
# ans[0] = nums[nums[0]] = nums[0] = 0
# ans[1] = nums[2] = 1
# ans[2] = nums[1] = 2
# ans[3] = nums[5] = 4
# ans[4] = nums[3] = 5
# ans[5] = nums[4] = 3

def countConsistentString(allowed, words):
    allow_set=set(allowed)
    count=0
    for word in words:
        ok=True
        for ch in word:
            if ch not in allow_set:
                ok=False
                break
        if ok:
            count+=1
    return count
print(countConsistentString("cad",["cc","acd","b","ba","bac","bad","ac","d"]))