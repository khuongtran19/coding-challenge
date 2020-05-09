def twoSum(nums, target):
    h = {}
    for i, j in enumerate(nums):
        n = target - j
        if n not in h:
            h[j] = i
        else:
            return [h[n], i]

def test():
    assert twoSum([2,7,11,15], 9) == [0,1]

if __name__ == "__main__":
    test()
    print('Everything passed')

