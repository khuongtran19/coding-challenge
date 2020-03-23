// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
//to solve this problem we look at how n! work
// we have this table 
// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 24
// 5! = 120 <= 1 zeros
// 6! = 720 <= 1 zeros
// ...
// 10! = 362 800 <= 2 zeros
// ...
// 15! = 1 307 674 368 000 <= 3 zeros
// from those we can say those number have 1 thing in common: every 5 numbers the are 1 more zeros at the end
// so best way to solve this problem we can use Math.floor which will return less than or equal to a given number
var trailingZeroes = function (n) {
    let count = 0;
    for (let i = n; i > 0; i = Math.floor(i / 5)) { // find number start from n
        count += Math.floor(i / 5); // devide number by 5, what left is number we need. Add that number to count
    }
    return count
};
module.exports = trailingZeroes