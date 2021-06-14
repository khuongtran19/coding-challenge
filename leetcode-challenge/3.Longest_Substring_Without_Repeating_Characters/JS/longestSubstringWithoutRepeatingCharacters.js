// 3. Longest Substring Without Repeating Characters
// Medium

// 13208

// 686

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

var lengthOfLongestSubstring = function (s) {
    let max = 0, pos = 0, map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            pos = Math.max(map.get(s[i]), pos);
        }
        max = Math.max(max, i - pos + 1)
        map.set(s[i], i + 1);
    }
    return max;
}
module.exports = lengthOfLongestSubstring