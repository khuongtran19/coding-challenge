// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // if target is in nums then get index
    if (nums.includes(target)) return nums.indexOf(target)
    // else add target into nums, sort then get index of target in nums
    else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        return nums.indexOf(target)
    }
};

// Time complexity: O(nlogn)
// Space complexity: O(n)
// both due to .sort() method which take time and space
module.exports = searchInsert