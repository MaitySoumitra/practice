def mostWordsFound(sentences):
    max_words=0
    for sentence in sentences:
        max_count=sentence.count(' ')+1
        max_words=max(max_words, max_count)
    return max_words

print(mostWordsFound(["please wait", "continue to fight", "continue to win"]))

def getFinalState(nums, k, multiplier):
    for _ in range(k):
        min_index=0
        for i in range(1, len(nums)):
            if nums[i]<nums[min_index]:
                min_index=i
        nums[min_index]*=multiplier
    return nums

print(getFinalState([2, 1, 3, 5, 6], 5, 2))