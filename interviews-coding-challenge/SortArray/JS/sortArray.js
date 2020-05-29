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
function merge(a1, a2) {
    let na = [];
    let i = 0;
    let j = 0;
    while (i < a1.length && j < a2.length) {
        if (a1[i] > a2[j]) {
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

