// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var missingNumber = function (nums) {
    let sumArr = 0, total = 0;
    //call sumArr and total both start at 0
    //the plan it by using 1 for loop to add up both sum of array and total of all number
    for (let i = 0; i < nums.length; i++) {
        sumArr += nums[i]; // add all number in the array
        total += i + 1; // total number add up from the first to the last number appear in the array include the number that missing
    }
    return total - sumArr
};

module.exports = missingNumber