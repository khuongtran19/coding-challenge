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
        // condition where left meet right
        // it will stop the loop if the left move to the right number position
        let sum = arr[left] + arr[right]
        // by using the sum as already given, we can check for every numbers possible for the sum
        if (sum === 0) return [arr[left], arr[right]]
        // if the codintion meet WE DONE
        else if (sum > 0) right--;
        // if sum still larger then 0 then the right number which usually large number need to move to smaller number
        // [-4, -3, -2, -1, 0, 1, 2, 5]
        //   |                       |
        // left                 <== right
        // -4 + 5 = 1
        else left++;
        // else just move to left to get move larger number from the left side
        // [-4, -3, -2, -1, 0, 1, 2, 5]
        //   |                    |
        // left ==>              right
        // -4 + 2 = -2
        // next one will be -3
        // -3 + 2 = -1
        // then we get -2
        // -2 + 2 = 0
        // which fit the condition
    }
}
// Time complexity: O(n)
// Space complexity: O(1)
module.exports = sumZero