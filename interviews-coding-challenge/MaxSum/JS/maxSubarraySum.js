// Write a function called maxSubarraySum which accepts an array of integers and a number called name. The function should calculate the maximum sum of n consecutive elements in the array.

// const maxSubarraySum = (arr, target) => {
//     if (target > arr.length) {
//         return null;
//     }
//     let max = - Infinity;
//     for (let i = 0; i < arr.length - target + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < target; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max
// }
// Time complexity: O(n^2)
// Space complexity: O(n)

const maxSubarraySum = (arr, target) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < target) return null;
    for (let i = 0; i < target; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = target; i < arr.length; i++) {
        tempSum = tempSum - arr[i - target] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
// Time complexity: O(n)
// Space complexity: O(1)
module.exports = maxSubarraySum