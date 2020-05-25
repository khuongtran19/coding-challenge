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
// Simple way to solve this problem is create another function call anagram then check the for similariy
// const isAnagram = (s, t) => {
//     if (s.length !== t.length) return false
//     return anagram(s) === anagram(t)
// }

// const anagram = (word) => {
//     if (!word) return
//     return word.split("").sort().join("")
// }
// Time complexity: O(nlogn)
// Space complexity: O(n)

// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;
//     let count = {};
//     for (let letter of s) {
//         count[letter] = (count[letter] || 0) + 1
//     }
//     for (let letter of t) {
//         if (count[letter] === undefined) return false;
//         if (count[letter] < 1) return false;
//         count[letter]--;
//     }
//     return true
// };

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let letter of s) {
        count[letter] ? count[letter] += 1 : count[letter] = 1;
    }
    for (let letter of t) {
        if (!count[letter]) return false
        else count[letter] -= 1
    }
    return true
};
// Time complexity: O(n)
// Space complexity: O(n)
module.exports = isAnagram