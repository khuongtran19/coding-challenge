// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let n = s.length
    let res = 0;
    // think as base 26
    // if we have 'AB' = (1 * 26^1) + (2 * 26^0)
    //                    1 * 26        2 * 1
    //                       26           2
    //                       A            B
    //  remember we have 2 characters in this string 'AB' so A should be 26
    //  use .charCodeAt() method to solve this problem
    //  use for loop to go through each character in the string
    for (let i = 0; i < n; i++) {
        //res is the result number of each character we looking at.
        res += (s.charCodeAt(i) - ('A'.charCodeAt(0) - 1)) * Math.pow(26, n - i - 1);
        //'A'.charCodeAt() = 65
    }
    return res
};
// #2 easier way to solve this problem
// var titleToNumber = function(s) {
//     var letterDictionary = {'A': 1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,
// 'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,
// 'V':22,'W':23,'X':24,'Y':25,'Z':26};

// var result = 0;

// when the problem given only 1 character we solve the problem by check in the object letterDictionary the number was set for that letter
// if(s.length === 1){
//     return letterDictionary[s];
// }

// use split if we have more than one letter
// forEach to go through each one of them
// s.split('').forEach(function(currentVal,index,arr){
//     result += letterDictionary[currentVal] * (Math.pow(26,arr.length - 1 - index ) );
// })

// return result;
// };
module.exports = titleToNumber