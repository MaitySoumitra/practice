def wigglesort(num):
    for i in range(1, len(num)):
        if i%2==1:
            if num[i]<num[i-1]:
                num[i], num[i-1]=num[i-1], num[i]
        else:
            if num[i]>num[i-1]:
                num[i], num[i-1]=num[i-1], num[i]
    return num

print(wigglesort([2,4,5,3,2,5,6]))
# 2 5 3 4 2 6 5