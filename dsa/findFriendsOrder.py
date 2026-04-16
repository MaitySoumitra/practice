def find_friends_order(order, friends):
    result=[]
    for person in order:
        if person in friends:
            result.append(person)
    return result
print(find_friends_order([1,4,5,3,2], [2, 5]))