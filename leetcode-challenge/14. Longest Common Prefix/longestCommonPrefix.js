// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    let minLength = strs[0].length;
    for (const str of strs) {
        if (str.length < minLength) {
            minLength = str.length;
        }
    }

    for (let i = 0; i < minLength; i++) {
        for (const str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.substr(0, i);
            }
        }
    }
    return strs[0].substr(0, minLength);
};

module.exports = longestCommonPrefix