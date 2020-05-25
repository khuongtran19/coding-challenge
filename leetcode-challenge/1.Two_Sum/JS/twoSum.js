// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// #1 simple way
var twoSum = (nums, target) => {
    for (let i in nums) {
        for (let j in nums) {
            if ((nums[i] + nums[j] === target) && (i !== j)) {
                return [i, j];
            }
        }
    }
}
// Time complexity: O(n^2)
// Space complexity: O(n)
module.exports = twoSum

// #2
// There is simple trick but will have O(n) on time complexity and O(1) space complexity
// we use the the given 'target' number to subtract the nums[i] we need to find that can give us a another one which show up in the array.
// target - nums[i] = second number we need to find that appear in array
// var twoSum = function (nums, target) {
//     const comp = {}
//     for (let i in nums) {
//         if (comp[nums[i]] >= 0) {
//             return [comp[nums[i]], i]
//         }
//         comp[target - nums[i]] = i
//     }
// };