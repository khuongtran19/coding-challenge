import unittest
import twoSum

class TestTwoSum(unittest.TestCase):
    def test1(self):
        nums = [2, 7, 11, 15]
        target = 9
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [0, 1])
    def test2(self):
        nums = [1, 3, 5, 6, 15]
        target = 11
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [2, 3])
    def test3(self):
        nums = [6, 12, 14, 30]
        target = 36
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [0, 3])
    def test4(self):
        nums = [2, 7]
        target = 9
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [0, 1])
    def test5(self):
        nums = [120, 250, 460, 705]
        target = 955
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [1, 3])
    def test6(self):
        nums = [0, 4, 3, 0]
        target = 0
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [0, 3])
    def test7(self):
        nums = [1, 3, 2, 4]
        target = 6
        result = twoSum.twoSum(nums, target)
        self.assertEqual(result, [2, 3])
if __name__ == "__main__":
    unittest.main()

#python test_twoSum.py