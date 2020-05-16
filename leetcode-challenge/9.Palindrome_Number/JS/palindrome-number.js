// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function (x) {
    const original = x
    let reversed = 0

    // the case when given number is single digit from 0 to 9 which even the reverse. The number still the same. This case the answer always true
    if (x < 10 && x >= 0) {
        return true
    }

    // case when the number is negative '-number' which when reverse will be 'number-' which always false
    // another case is number with last digit is 0 like 10 20 30 ...
    // When reverse the number will be 1 2 3 which 0 in front should disappear mean it always false.
    // 10 = 01 => 1
    // 20 = 02 => 2
    // 30 = 03 => 3
    if (x % 10 === 0 || x < 0) {
        return false
    }

    while (x !== 0) {
        reversed = reversed * 10 + x % 10
        x = Math.trunc(x / 10)
        // Math.trunc will return an integer
    }

    return !(original - reversed)
};
module.exports = isPalindrome