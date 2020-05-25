// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and check whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1,2,3) //false
// areThereDuplicates(1,2,2) //true
// areThereDuplicates('a','b','c','a') //true

// Time O(n)

function areThereDuplicates(arr) {
    let fre = {};
    for (let i in arr) {
        fre[arr[i]] = (fre[arr[i]] || 0) + 1;
    }
    for (let key in arr) {
        if (fre[arr[key]] > 1) {
            return true;
        }
    }
    return false;
}

// One liner
// function areThereDuplicates(arr) {
//     return new Set(arr).size !== arr.length
// }
module.exports = areThereDuplicates