def missingNumber(nums):
    n=len(nums)
    expected=n*(n+1)//2
    actual=sum(nums)
    return expected-actual
print(missingNumber([9,6,4,2,3,5,7,0,1]))