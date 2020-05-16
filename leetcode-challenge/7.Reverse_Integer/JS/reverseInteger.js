// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = function (x) {
    if (x < 0) return -1 * reverse(-x); //if the given number is negative number then we use -1 to keep the negative. However we use recursive to call back the function so the function can reverse the number.
    const r = parseInt(`${x}`.split('').reverse().join(''), 10);
    //from here we use normal .split .reverse and .join to reverse the number.
    //parseInt will give us integer
    if (r > 2 ** 31 - 1) return 0;
    //The last case is when number smaller then -2^31 or larger then 2^31-1 as the problem require we simply return 0. 

    return r;
};
// Time complexity: O(n)
// Space complexity: O(1)
module.exports = reverse