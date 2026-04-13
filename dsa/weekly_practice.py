def check_palindrome(str):
    def palindrome(left, right):
        while left<right:
            if str[left]!=str[right]:
                return False
            left+=1
            right-=1
        return True
    left=0
    right=len(str)-1
    while left< right:
        if str[left]!=str[right]:
            return palindrome(left+1, right) or palindrome(left, right-1)
        left+=1
        right-=1
    return True
print(check_palindrome("abc"))

def binary_search(arr, target):
    left=0
    right=len(arr)-1
    while left<=right:
        mid=(left+right)//2
        if arr[mid]==target:
            return mid
        elif target<arr[mid]:
            right=mid-1
        else:
            left=mid+1
    return left
print(binary_search([1,3,5,6],7))

def climb_stairs(num):
    if num<=2:
        return num
    prev1=2
    prev2=1
    for i in range(3, num+1):
        next=prev1+prev2
        prev2=prev1
        prev1=next
    return prev1
print(climb_stairs(5))

def perfect_number(num):
    if num<=1:
        return False
    divisor_sum=1
    for i in range(2, int(num**0.5)+1):
        if num%i==0:
            divisor_sum+=i
            if i !=num//i:
                divisor_sum+=num//i
    return divisor_sum==num
print(perfect_number(6))
        

   