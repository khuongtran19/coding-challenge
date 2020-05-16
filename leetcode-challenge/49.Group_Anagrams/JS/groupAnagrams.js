// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = {};
    strs.forEach((word) => {
        // declare sortedWord for all word already sorted by function
        const sortedWord = anagrams(word);
        // if word 
        if (result[sortedWord]) {

            return result[sortedWord].push(word)
        }
        result[sortedWord] = [word]
    })
    return Object.values(result)
};

// create anagrams function to sorted all the characters in the word
const anagrams = (word) => {
    if (!word) return;
    word = word.split("").sort().join("")
    return word
}

module.exports = groupAnagrams