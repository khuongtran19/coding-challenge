// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists Otherwise, return -1

// Example:
// binarySearch([1,2,3,4,5], 2) //1
// binarySearch([1,2,3,4,5], 3) //2
// binarySearch([1,2,3,4,5], 5) //4
// binarySearch([1,2,3,4,5], 6) //-1

// The idea of binary search is by devide the array in half and compare we can find result much faster time and space
// THIS ONLY WORK IF THE ARRAY SORTED
// Example: [1,3,4,6,8,9,11,12,15,16,17,18,19] and number we need to find is 15
// [1,3,4,6,8,9,11,12,15,16,17,18,19]
//  |                              |
// left(l)                       right(r)
// we have left number mean the first number in the array and right number is the last number in array
// we need to find the middle number which we can use (l - r) / 2
// however the middle number should not be decimal since array does not have decimal number
// we need to use Math.flood in this case Math.floor((l-r) / 2)
// [1,3,4,6,8,9,11,12,15,16,17,18,19]
//  |           |                  |
// left(l)     middle             right(r)
// then we compare with the number we need to find
//              11 < 15   
// [1,3,4,6,8,9,11,12,15,16,17,18,19]
//  |           |                  |
// left(l)     middle             right(r)
// [1,3,4,6,8,9,11,12,15,16,17,18,19]
//  |           |                  |
// left(l)     middle             right(r)
//  _____________
//        |
//   we leave those number since it the number we need to find not going to be in this side
// we move on with new left and middle number and keep the process as above find left, right and middle then compare 
//                [12,15,16,17,18,19]
//                  |       |     |
//                 new l  new m   r
//                       new m as 17 > 15
//                [12,15,16]
//                 |   |  |
//                 l   m  r
// we stop at this point since middle is number we need to find the condition is meet

function binarySearch(arr, val) {
    let l = 0;
    let r = arr.length - 1;
    let m = Math.floor((l + r) / 2);
    while (arr[m] !== val && l <= r) {
        if (val < arr[m]) r = m - 1;
        else l = m + 1;
        m = Math.floor((l + r) / 2);
    }
    return arr[m] === val ? m : -1;
}

module.exports = binarySearch