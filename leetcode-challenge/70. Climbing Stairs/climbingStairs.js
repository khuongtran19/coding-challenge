// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */

// Fibonacci Number solution
var climbStairs = function (n) {
    if (n == 1) { // if there only 1 stair, there only 1 way to climb
        return 1;
    }
    let first = 1; // declare 1 as we use 1 step to climb
    let second = 2; // declare 2 as we use 2 steps to climb and there are 2 way to climb
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        // declare 3 as the sum where we start counting for steps we could take to climb
        first = second;
        second = third;
    }
    return second;
}
// Time complexity: O(n)
// Space complexity: O(1)
module.exports = climbStairs