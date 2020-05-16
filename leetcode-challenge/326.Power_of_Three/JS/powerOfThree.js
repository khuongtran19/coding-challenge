// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
var isPowerOfThree = function (n) {
    if (n === 0) return false; // as require from question otherwise it's true 
    if (n === 1) return true; // as require from question
    while (n % 3 === 0) { //loop if n devided to 3
        n /= 3
    }
    return n === 1;
};
module.exports = isPowerOfThree