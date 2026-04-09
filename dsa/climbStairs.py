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