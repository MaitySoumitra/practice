def greedAlgorithm(resolved, required, k):
    needed=[]
    for i in range(len(resolved)):
        diff=resolved[i]-required[i]
        needed.append(max(0, diff))
    needed.sort()
    count=0
    for ch in needed:
        if k>=ch:
            k-=ch
            count+=1
        else:
            break
    return count

print(greedAlgorithm([2, 3, 4], [5, 2, 6], 5))
