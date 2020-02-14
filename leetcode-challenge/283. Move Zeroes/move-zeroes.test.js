const moveZeroes = require('./move-zeroes');

test.each(
    [
        [[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
        [[0, 1], [1, 0]],
        [[0, 0], [0, 0]],
        [[0, 0, 0, 0, 1], [1, 0, 0, 0, 0]]
    ]
)
    ('Give array [%s] the result should be [%s]', (given, expected) => {
        expect(moveZeroes(given)).toEqual(expected);
    })