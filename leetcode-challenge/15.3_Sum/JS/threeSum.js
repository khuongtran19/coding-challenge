// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [] // store result of 3 numbers that meet condition
    if (nums.length < 3) {
        // case if less than 3 numbers meaning we don't have enough numbers to meet condition. 
        // return result as there is no condition to meet.
        return result
    }
    nums.sort((a, b) => { // numeric sort the array
        return a - b
    })
    for (var i = 0; i < nums.length - 2; i++) {
        // reason we have nums.length - 2 is because we have 2 other numbers need to find
        if (nums[i] > 0) {
            return result
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            // call j as the next number we need to looking for always start as second number in the given array
            // call k as last number we need to find
            // also use "," instead of ";" to declare j and k at same time
            // [ 0, 1, 2, ... , n] <= index in array
            //      j ->      <-k
            if (nums[i] + nums[j] + nums[k] === 0) {
                // if 3 numbers combine and answer is 0
                result.push([nums[i], nums[j], nums[k]]);
                // add all numbers that fit condition into result empty array
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    // while j still smaller then k and the j equal to last j then we move on to the next j
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    // while k still larger then j and the k equal to last k then we move on to the next k
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                // if the sum of 3 numbers larger then 0 then go to smaller number from the end 
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
};

module.exports = threeSum