def twoSum(nums, target):
    h = {}
    for i, j in enumerate(nums):
        n = target - j
        if n not in h:
            h[j] = i
        else:
            return [h[n], i]
nums = [2, 7, 11, 15]
target = 9

