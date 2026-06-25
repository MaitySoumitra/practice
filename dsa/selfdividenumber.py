def self_devide_number(left, right):
    result=[]
    for i in range(left, right+1):
        valid=True
        for digit in str(i):
            d=int(digit)
            if d==0 or i%d!=0:
                valid=False
                break
        if valid:
            result.append(i)
    return result
print(self_devide_number(1,22))