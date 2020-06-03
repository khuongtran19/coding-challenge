// ALL TEST USE SAME NUMBERS AND LENGTH

// Bubble Sort
// Time complexity (best)   O(n)
// Time complexity (ave)    O(n^2)
// Time complexity (worst)  O(n^2)
// Space complexity         O(1) 
// [2, 4, 1, 5, 3, 7, 8, 6, 9] 
//     |  |  |  |     |  |    <- switch between the current number and next number by compare them
// [2, 1, 4, 3, 5, 7, 6, 8, 9]
//  |  |  |  |     |  |    
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Selection Sort
// Time complexity (best)   O(n^2)
// Time complexity (ave)    O(n^2)
// Time complexity (worst)  O(n^2)
// Space complexity         O(1)
// [2, 4, 1, 5, 3, 7, 8, 6, 9]
//        |  <- first lowest number
// [1, 4, 2, 5, 3, 7, 8, 6, 9] <- switch the lowest number with the first number location
//   [ 4, 2, 5, 3, 7, 8, 6, 9] <- check next lowest number than compare and swap
//        |  <- new lowest number
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

// Insertion Sort
// Time complexity (best)   O(n)
// Time complexity (ave)    O(n^2)
// Time complexity (worst)  O(n^2)
// Space complexity         O(1)
// [2, 4, 1, 5, 3, 7, 8, 6, 9]
//        |  <- current number since it the lowest number from index 0 - current position
// [1, 2, 4, 5, 3, 7, 8, 6, 9] <- swap between first number to the current take out number
//              | <- new current number
// [1, 2, 3, 4, 5, 7, 8, 6, 9] <- swap between the current number with larger number
//                       | <- next new current number
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
function insertionSort(arr) {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Merge Sort
// Time complexity (best)   O(nlogn)
// Time complexity (ave)    O(nlogn)
// Time complexity (worst)  O(nlogn)
// Space complexity         O(1)
// [2, 4, 1, 5, 3, 7, 8, 6, 9]
// seperate numbers into new arr, each contain single number
// [2], [4], [1], [5], [3], [7], [8], [6], [9]
//  ------    ------    ------    ------
// compare between those then add then to new arr, we have
// [2, 4], [1, 5], [3, 7], [6, 8], [9]
//  ------------    ------------
// compare a new group we have
// [1, 2, 4, 5], [3, 6, 7, 8], [9]
// then we compare the rest
// [1, 2, 3, 4, 5, 6, 7, 8, 9] 
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
    let maxDigitCount = mostDigit(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}

module.exports.bubbleSort = bubbleSort;
module.exports.selectionSort = selectionSort;
module.exports.insertionSort = insertionSort;
module.exports.quickSort = quickSort;
module.exports.mergeSort = mergeSort;
module.exports.radisSort = radisSort;
