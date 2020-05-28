// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists Otherwise, return -1

// Example:
// binarySearch([1,2,3,4,5], 2) //1
// binarySearch([1,2,3,4,5], 3) //2
// binarySearch([1,2,3,4,5], 5) //4
// binarySearch([1,2,3,4,5], 6) //-1
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