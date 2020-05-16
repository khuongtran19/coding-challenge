import unittest
import reverseInteger

class TestReverseInteger(unittest.TestCase):
    def test1(self):
        num = 123
        result = reverseInteger.reverse(num)
        self.assertEqual(result, 321)

    def test2(self):
        num = -123
        result = reverseInteger.reverse(num)
        self.assertEqual(result, -321)
    
    def test3(self):
        num = 120
        result = reverseInteger.reverse(num)
        self.assertEqual(result, 21)

if __name__ == "__main__":
    unittest.main()

#python test_reverseInteger.py