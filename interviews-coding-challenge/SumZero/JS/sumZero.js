// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// const sumZero = (arr) => {
//     for (let i of arr) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }
// Time complexity: O(n^2)
// Space complexity: O(1)

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--;
        else left++;
    }
}
// Time complexity: O(n)
// Space complexity: O(1)
module.exports = sumZero