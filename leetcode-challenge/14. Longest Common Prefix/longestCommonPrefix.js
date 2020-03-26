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
    // if there is no words or empty string then return empty

    let minLength = strs[0].length;
    // minLength as the first letter of the first word we checking
    // in the first example ["flower","flow","flight"] strs[0].length is 6 which come from the length of word "flower"

    // First scan: find shortest length
    for (const str of strs) {
        // check each word as "str" in the array
        // in first example we have 3 "str" words "flower", "flow", "flight"
        if (str.length < minLength) {
            // we need to looking for the shortest word
            // we have first word is "flower" as the current shortest word
            // flower
            // flow
            // flow <= have shorter so we have new shorest word
            minLength = str.length;
        }
    }

    // Second scan: find common chars until a different one
    for (let i = 0; i < minLength; i++) {
        // check every letter of each word in the array
        for (const str of strs) {
            if (str[i] !== strs[0][i]) {
                // if the letter of current checking word not same as the letter of the next word
                return str.substr(0, i);
                // use substr to get from the first letter to the last letter that both word have the same
            }
        }
    }

    return strs[0].substr(0, minLength);
};

module.exports = longestCommonPrefix