# coding challenge from leetcode, hackerrank and some from past interviews.

Each have it own test case.

Stack using for coding challenge: 
- Javascript 
- Python

Run Javascript testing challenge
npm run test
npm test <name-of-challenge>

![Image of Complexity](/complexity.png)

calculate for time and space complexity.
# Time Complexity:
    .push()                         O(1)
    .pop()                          O(1)
    .shift()                        O(n)
    .unshift()                      O(n)
    .concat()                       O(n)
    .slice()                        O(n)
    .splice()                       O(n)
    .sort()                         O(n * log n)
    .forEach()                      O(n)
    .map()                          O(n)
    .filter()                       O(n)
    .reducer()                      O(n)
    .indexOf()                      O(n)
    .split()                        depend on the length of array

# Space Complexity:
    Merge sort                      O(n)
    Insetion sort                   O(1)
    Heap sort                       O(1)


# Frequency Counters:
    This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with array/strings
    Example challenge available in:
(../interview-coding-challenge/Same/JS/same.js)
**leetcode-challenge/242.Valid_Anagram/JS/validAnagram.js**

# Multiple pointers: 
    Creating pointers or values that correspond to and index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problem with minimal space complexity.
    Example challenge available in 
**interview-coding-challenge/MaxSum/JS/maxSum.js**
**interview-coding-challenge/SumZero/JS/sumZero.js**

# Sliding window:
    This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.
    Example challenge available in 
**interview-coding-challenge/MaxSum/JS/maxSubarraySum.js**
**interview-coding-challenge/MinSubArray/JS/minSubArray.js**

# Divide and Conquer
    This pattern involves dividing a data set into smaller chunks and then repeating a process with a subnet of data.
    This pattern can tremendously decrease time complexity
**interview-coding-challenge/Sort/JS/sort.js**

# Recurtion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember that string are immutable so you will need to use methods like slice, subtr, or substring to make copies of strings
- To make copies of objects use Objects.assign, or the spread operator
**interview-coding-challenge/ProductOfArray/JS/productOfArray.js**
**interview-coding-challenge/Factorial/JS/factorial.js**
**interview-coidng-challenge/Power/JS/power.js**

# Binary Search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
- Binary search only works on SORTED ARRAY
**interview-coding challenge/BinarySearch/JS/binarySearch.js**

