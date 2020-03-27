// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var firMax = nums[0];
    // declare first max number
    var secMax = nums[0];
    // declare second max number

    for (let i = 0; i < nums.length; i++) {
        firMax = Math.max(nums[i], firMax + nums[i]);
        secMax = Math.max(firMax, secMax)
    }
    return secMax
};

// Time complexity: O(n)
// Space complexity: O(1)
module.exports = maxSubArray