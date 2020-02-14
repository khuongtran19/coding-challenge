// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let count = {};
    for (let letter of s) {
        if (count[letter] === undefined) {
            count[letter] = 1;
        } else {
            count[letter]++;
        }
    }
    for (let letter of t) {
        if (count[letter] === undefined) {
            return false;
        }
        if (count[letter] < 1) {
            return false;
        }
        count[letter]--;
    }
    return true
};

module.exports = isAnagram