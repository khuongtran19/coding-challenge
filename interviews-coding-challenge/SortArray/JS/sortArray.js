// Bubble Sort
// Time complexity (best)   O(n)
// Time complexity (ave)    O(n^2)
// Time complexity (worst)  O(n^2)
// Space complexity         O(1) 
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr
}

// Selection Sort
// Time complexity (best)   O(n^2)
// Time complexity (ave)    O(n^2)
// Time complexity (worst)  O(n^2)
// Space complexity         O(1)
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i != lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// Insertion Sort
// Time complexity (best)   O(n)
// Time complexity (ave)    O(n^2)
// Time complexity (worst)  O(n^2)
// Space complexity         O(1)
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i + 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[i];
        }
        arr[j + 1] = currentVal
    }
    return arr
}

// Merge Sort
// Time complexity (best)   O(nlogn)
// Time complexity (ave)    O(nlogn)
// Time complexity (worst)  O(nlogn)
// Space complexity         O(1)
function merge(a1, a2) {
    let na = [];
    let i = 0;
    let j = 0;
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            na.push(a1[i]);
            i++;
        } else {
            na.push(a2[j]);
            j++;
        }
    }
    while (i < a1.length) {
        na.push(a1[i]);
        i++;
    }
    while (j < a2.length) {
        na.push(a2[j]);
        j++;
    }
    return na
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

// Quick Sort
// Time complexity (best)   O(nlogn)
// Time complexity (ave)    O(nlogn)
// Time complexity (worst)  O(n^2)
// Space complexity         O(logn)
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex;
}
// quickSort([4,6,9,1,2,5,3])
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1   6,9,5
//      3     6
//  2,1     5   9
//    2
//  1
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// SPECIAL CASE
// Radis Sort
// Time complexity (best)   O(nk)
// Time complexity (ave)    O(nk)
// Time complexity (worst)  O(nk)
// Space complexity         O(n + k)
// n - length of the array
// k - number of digits (average)
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigit(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
function radisSort(arr) {
    let maxDigitCount = mostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

module.exports = {
    bubbleSort: bubbleSort,
    selectionSort: selectionSort,
    insertionSort: insertionSort,
    mergeSort: mergeSort,
    quickSort: quickSort,
    radisSort: radisSort
}