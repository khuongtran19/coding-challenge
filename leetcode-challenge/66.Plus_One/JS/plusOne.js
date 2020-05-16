// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
var plusOne = function (digits) {
    // The tricky of the question come from the last number we need to focus on when it equal to 9
    // we need to add 1 to the number before the last number
    // For example we have [1,3,4,9]
    // the last number is 9 which mean when we add 1 it will become 10
    // However we only can have single digit number mean 1 will left
    // Which is will we add 1 to the number 4
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) { // if the last number in the array is 9
            digits[i] = 0; //change the number to 0
            if (i === 0) { //if the last number is 0
                digits.unshift(1); //make the second last number to 1
                break;
            }
        } else { //if last number not 9 we will add last number in the array with 1
            digits[i]++;
            break;
        }
    }
    return digits;
};
module.exports = plusOne