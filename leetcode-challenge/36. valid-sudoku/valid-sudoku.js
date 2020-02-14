// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
var isValidSudoku = function (board) {

    let boxCells = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6]
    ];

    for (let i = 0; i < boxCells.length; i++) {
        let box = validateBox(board, boxCells[i][0], boxCells[i][1]);
        if (!box) return false;
    }

    for (let i = 0; i < 9; i++) {
        let row = validateRow(board, i, );
        let col = validateCol(board, i, );
        if (!row || !col) return false;
    }

    return true;

};

var validateRow = function (board, row) {
    let data = getData();
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == '.') continue;
        if (data[board[row][i]] == false) return false;
        data[board[row][i]] = false;
    }
    return true;
}

var validateCol = function (board, col) {
    let data = getData();
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == '.') continue;
        if (data[board[i][col]] == false) return false;
        data[board[i][col]] = false;
    }
    return true;
}

var validateBox = function (board, row, col) {
    let data = getData();
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if (board[i][j] == '.') continue;
            if (data[board[i][j]] == false) return false;
            data[board[i][j]] = false;
        }
    }
    return true;
}

var getData = function () {
    let data = {};
    for (let i = 1; i <= 9; i++) {
        data[i] = true;
    }
    return data;
}
module.exports = isValidSudoku;