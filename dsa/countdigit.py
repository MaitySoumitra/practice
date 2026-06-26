def countdigit(num):
    count=0
    num=str(num)
    for i in range(len(num)):
        if int(num)% int(num[i])==0:
            count+=1
    return count
print(countdigit(1248))