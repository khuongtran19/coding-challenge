// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isPalindrome = function (s) {
    // different approach on this problem
    // we split all the words in the string then change them into lower case
    // we also ignore the "," or ":"
    let arr = s.toLowerCase().split('').filter(a => /[a-z0-9]/i.test(a));
    return arr.join('') === arr.reverse().join('');
};
module.exports = isPalindrome;