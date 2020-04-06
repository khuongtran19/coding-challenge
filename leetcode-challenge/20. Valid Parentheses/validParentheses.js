// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openings = [];
    // declare empty array name openings

    for (let i = 0; i < s.length; i++) {
        // use for loop to check string
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            // if there are "(", "[", "{" character in the string then add to empty array
            openings.push(s[i]);
            // we use this array to compare with characters in original string
            // the character in openings array will be place follow position of each character in the string
            // Example: "{[]}" 
            // openings = [ "{", "["]
        } else {
            // then we check the other condition when character is ")", "]", "}"
            if (s[i] === ')') {
                // if there is ")" in the string then continue with condition
                if (openings.pop() !== '(') return false;
                // if last elelment is not "(" then return false
            } else if (s[i] === ']') {
                // same thing apply for "]"
                if (openings.pop() !== '[') return false;
            } else if (s[i] === '}') {
                if (openings.pop() !== '{') return false;
            }
        }
    };

    return true && !openings.length;
    // if all conditions are clear then the string is valid and return true
    // because we use .pop() method the openings array should be 0 if all conditions are clear
    // if it not empty then the return should be false
};

module.exports = isValid