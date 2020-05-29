// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and check whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1,2,3) //false
// areThereDuplicates(1,2,2) //true
// areThereDuplicates('a','b','c','a') //true

// Time O(n)
function areThereDuplicates(arr) {
    // To get the linear time complexity we simply making object contain how many times the word or number appear in the given array.
    let fre = {};
    for (let i in arr) {
        fre[arr[i]] = (fre[arr[i]] || 0) + 1;
        // if there is number or word already in the object we add 1 otherwise we have our first
    }
    for (let key in arr) {
        if (fre[arr[key]] > 1) {
            // check if there are number or word show up more than 1 times meaning we have duplicate
            return true;
        }
    }
    // Otherwise return false if there is no word or number have number larger than 1
    return false;
}

// One liner
// function areThereDuplicates(arr) {
//     return new Set(arr).size !== arr.length
// }
module.exports = areThereDuplicates