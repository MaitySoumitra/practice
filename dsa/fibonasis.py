def fibonasis(num):
    a=0
    b=1
    next=0
    for i in range(num):
        next=a+b
        a=b
        b=next
    return a
print(fibonasis(6))