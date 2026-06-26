def isHappyNumber(n):
    seen=set()
    while n !=1 and n not in seen:
        seen.add(n)
        n=str(n)
        total=0
        for i in n:
            total+=int(i)**2
        n=total
    return n==1