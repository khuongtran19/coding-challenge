// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */

var rotate = function (matrix) {
    // To solve this problem we need to look at the matrix as vertical (y) and horizontal (x) position
    // we use matrix[x][y] to solve this problem
    // [0,0], [0,1], [0,2], [0,3]          [ 5, 1, 9,11],
    // [1,0], [1,1], [1,2], [1,3]    =>    [ 2, 4, 8,10],
    // [2,0], [2,1], [2,2], [2,3]          [13, 3, 6, 7],
    // [3,0], [3,1], [3,2], [3,3]          [15,14,12,16]
    const n = matrix.length;
    // length of each inner array in this case [5,1,9,11] => matrix.length = 4
    // we don't know if the problem give us more than 4 item in the inner array
    // simply call matrix.length to let program check for us
    const x = Math.floor(n / 2);
    // x is horizontal meaning all number in the same inner array
    // Math.floor will gave us the integer less than or equal give number
    // In this case it x = 4/2 = 2
    const y = n - 1;
    // y is vertical meaning all number in same index of the array
    // In this case it y = 4-1 = 3
    for (let i = 0; i < x; i++) {
        // the i in this for loop will be all number in the inner array
        // start at position 0
        for (let j = i; j < y - i; j++) {
            // the j in this for loop will be all number have same index of each inner array
            // in this case we have first number is 5 
            k = matrix[i][j];
            // We move one by one each number position 
            //   _________
            //  |         |
            //   --5 1 9 11      move number 5 to position of number 11
            matrix[i][j] = matrix[y - j][i];
            // matrix[0][0] = matrix[3-0][0] = matrix[3][0]
            matrix[y - j][i] = matrix[y - i][y - j];
            // matrix[3][0] = matrix[3-0][3-0] = matrix[3][3]
            matrix[y - i][y - j] = matrix[j][y - i];
            // matrix[3][3] = matrix[0][3-0] = matrix[0][3]
            matrix[j][y - i] = k
            // matrix[0][3] = matrix[0][0]
        }
    }
    return matrix;
};
module.exports = rotate