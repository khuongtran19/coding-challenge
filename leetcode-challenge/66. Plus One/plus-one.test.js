const plusOne = require('./plus-one');

test.each(
    [
        [[1, 2, 3], [1, 2, 4]],
        [[4, 3, 2, 1], [4, 3, 2, 2]],
        [[9], [1, 0]],
        [[0], [1]],
        [[0, 0, 0, 0], [0, 0, 0, 1]],
        [[9, 9], [1, 0, 0]]
    ]
)
    (
    'Input: [%s], Output: [%s]',
    (given, expected) => {
        expect(plusOne(given)).toEqual(expect.arrayContaining(expected));
    }
    )