const rotate = require('./rotateArray');

test.each(
    [
        [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
        [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
        [[1, 2], 1, [1]],
        [[1, 2, 3], 4, [3, 1, 2]]
    ]
)
    ('Given array [%s] and k = %i the result should be [%s]', (givenA, givenB, expected) => {
        expect(rotate(givenA, givenB)).toEqual(expect.arrayContaining(expected));
    })