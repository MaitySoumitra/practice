def binarySearch(nums, target):
    for i in range(len(nums)):
        for j in range((len(nums)-1)-i):
            mid=min((i+j)/2)
            if nums[mid]==target:
                return mid
            if nums[mid]<i:
                i=mid+1
            else:
                j=mid-1
    return -1
print(binarySearch([-1,0,3,5,9,12], 9))
