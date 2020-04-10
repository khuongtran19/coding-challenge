// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    // use trim to make sure there are no extra space in front of the first word or behind after last word
    return s.length - s.lastIndexOf(" ") - 1;
    // use lastIndexOf(" ") will find the last " " in the string
    // total - index of the last " " - 1
    // subtract 1 is because when use lastIndexOf(" ") the " " will be include
};

// #2 use trim and split
// var lengthOfLastWord = function(s) {
//     const arr = s.trim().split(' ');
//     return arr[arr.length - 1].length;
// };

// #3 with regex
// var lengthOfLastWord = function(s) {
//     return (s.match(/(\w+)\s*$/) || [, ''])[1].length;
// };

// #4
// var lengthOfLastWord = function(s) {
//     let len = 0;
//     let hasStarted = false;
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] !== ' ') hasStarted = true;
//         if (hasStarted) {
//             if (s[i] === ' ') break;
//             len++;
//         }
//     }
//     return len;
// };

module.exports = lengthOfLastWord