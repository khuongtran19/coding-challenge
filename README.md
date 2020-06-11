# coding challenge from leetcode, hackerrank and some from past interviews.

Each have it own test case.

Stack using for coding challenge: 
- Javascript 
- Python

Run Javascript testing challenge
- npm run test
- npm test <name-of-challenge>

![Image of Complexity](/TimeComplexity.jpeg)

calculate for time and space complexity.
# Time Complexity:
    .push()                         O(1)
    .pop()                          O(1)
    .shift()                        O(n)
    .unshift()                      O(n)
    .concat()                       O(n)
    .slice()                        O(n)
    .splice()                       O(n)
    .sort()                         O(n log n)
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
This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with array/strings.
**Example:**
- [Check if array is same](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/Same/JS/same.js)
- [Array is valid anagram](https://github.com/khuongtran19/coding-challenge/blob/master/leetcode-challenge/242.Valid_Anagram/JS/validAnagram.js)

# Multiple pointers: 
Creating pointers or values that correspond to and index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problem with minimal space complexity.
**Example:**
- [Sum Zero](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/SumZero/JS/sumZero.js)

# Sliding window:
This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.
**Example:**
- [Max Subarray Sum](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/MaxSum/JS/maxSubarraySum.js)
- [Min Sub Array ](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/MinSubArray/JS/minSubArray.js)

# Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subnet of data.
This pattern can tremendously decrease time complexity.
**Example:**
- [Sort](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/Sort/JS/sort.js)

# Recurtion Tips
For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
Remember that string are immutable so you will need to use methods like slice, subtr, or substring to make copies of strings
To make copies of objects use Objects.assign, or the spread operator.
**Example:**
- [Product of Array](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/ProductOfArray/JS/productOfArray.js)
- [Factorial](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/Factorial/JS/factorial.js)
- [Power](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/Power/JS/power.js)

# Binary Search
Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
Binary search only works on SORTED ARRAY.
**Example:**
- [Binary Search](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/BinarySearch/JS/binarySearch.js)

# Sort
There are 8 type of sort algorithms according [toptal.com](https://www.toptal.com/developers/sorting-algorithms):
- Insertion
- Selection
- Bubble
- Shell
- Merge
- Heap
- Quick
- Quick 3
Depend on problem, each algorithm will give different pros and cons between time and space complexity. However **Quick Sort** consider as the best one on time complexity performence since it O(n log n) in best and average case, and O(n^2) in the worst case.
**Example:**
- [Sort Algorithm](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/SortArray/JS/sortArray.js)
- [More Info on Sort Algorithm](https://github.com/khuongtran19/coding-challenge/blob/master/interviews-coding-challenge/SortArray/JS/sortAlgorithm.md)

# Linked List
A data structure that contains a head, tail and length property.
Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

# Comparisions with Array:
**List**
+ Do not have indexes!
+ Connecterd via nodes with a next pointer
+ Random access is not allowed
**Arrays**
+ Indexed in orders!
+ Insertion and deletion can be expensive
+ Can quickly be accessed at a specific index

# Single Linked List

**Example**
- [Single Linked List](https://github.com/khuongtran19/coding-challenge/blob/master/Singly_Linked_List.js)

# Double Linked List

**Example**
- [Double Linked List](https://github.com/khuongtran19/coding-challenge/blob/master/Double_Linked_List.js)

**Compare between Single and Double Linked List**
- They are almost identical except there is an additional pointer to previous nodes.
- Double Linked List better than Singly Linked Lists for finding nodes and can be done in half the time.
- However, they do take up moer memory considering the extra pointer.