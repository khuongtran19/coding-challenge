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

// #1
var twoSum = (nums, target) => {
    for (let i in nums) {
        for (let j in nums) {
            if ((nums[i] + nums[j] === target) && (i !== j)) {
                return [i, j];
            }
        }
    }
}
module.exports = twoSum

// #2
// var twoSum = function (nums, target) {
//     const comp = {}
//     for (let i in nums) {
//         if (comp[nums[i]] >= 0) {
//             return [comp[nums[i]], i]
//         }
//         comp[target - nums[i]] = i
//     }
// };