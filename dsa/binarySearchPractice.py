def binarySearch(arr, target):
    left=0
    right=len(arr)-1
    while left<=right:
        mid=(left+right)//2
        if arr[mid]==target:
            return mid
        if arr[mid]<target:
            return left==mid+1
        else:
            return right==mid-1
    return -1
print(binarySearch([2,3,4,5,6], 4))

def binarySearchFor(arr, target):
    for i in range(len(arr)):
       if arr[i]==target:
           return i
    return -1
print(binarySearchFor([2,3,4,5,6], 5))