// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.
// const countUniqueValues = (arr) => {
//     var i = 0;
//     for (var j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }
const countUniqueValues = (arr) => {
    let count = {}
    for (let i of arr) {
        count[i] = (count[i] || 0) + 1
    }
    return Object.keys(count).length
}
// Time complexity: O(n)
// Space complexity: O(1)
module.exports = countUniqueValues