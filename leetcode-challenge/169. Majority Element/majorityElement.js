// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let obj = {};

    // We set the object to count each number appear times.
    // use for loop to count how many times each number show up.
    for (let i = 0; i < nums.length; i++) {
        // obj[nums[i]] will add each times the number appear.
        // if not appear before then give it 1 
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        // there are 1 thing need to focus on from the problem. The number of majority MUST SHOW UP MORE THAN [n/2] times meaning it always have more half the length of the array.
        if (obj[nums[i]] > nums.length / 2) return nums[i]
    }
};

module.exports = majorityElement