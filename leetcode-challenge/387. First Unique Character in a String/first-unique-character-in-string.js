// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

// /**
//  * @param {string} s
//  * @return {number}
//  */
var firstUniqChar = function (s) {
    let result = -1;
    let fre = {};
    for (let char of s) {
        if (fre[char] === undefined) {
            fre[char] = 1;
        }
        else {
            fre[char]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (fre[char] === 1) {
            return i;
        }
    }
    return result;
};

module.exports = firstUniqChar