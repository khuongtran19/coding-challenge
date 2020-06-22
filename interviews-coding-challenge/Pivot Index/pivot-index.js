// Example: array = [1,7,3,6,5,6] pivot index is 3 as 6 is index number between two sums equal 1+7+3 = 5+6)

// 1,7,3 = 11 | => 6 <= | 5,6=11
// 0,1,2           3      4,5
const pivotIndex = (arr) => {
    const sum = arr.reduce((r, l) => r + l, 0);
    //call function reduce to add right side (r) and left side (l)
    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        const right = sum - left - arr[i];
        //right side equal to sum - left side - pivot number
        if (left === right) {
            return i; //if left and right side equal then return index of pivot number
        }
        left += arr[i]; //as left start at 0 add left and next possible pivot number then count until left and right equal 
    }
    return -1;
};
module.exports = pivotIndex
