def secondLargest(arr):
    largest=float('-inf')
    second_largest=float('inf')
    for i in range(len(arr)):
        if arr[i] > largest:
            second_largest=largest
            largest=arr[i]
        elif arr[i]>second_largest and arr[i] !=largest:
            second_largest=arr[i]
    return second_largest
print(secondLargest([1,2,3,4,5,6,3,2]))

arr=[1,2,3,4,5,6,6,3,2]
result=sorted(set(arr))[-2]
print(result)