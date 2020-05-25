const minSubArray = require('./minSubArray')

test.each(
    [
        [[2, 3, 1, 2, 4, 3], 7, 2],
        [[2, 1, 6, 5, 4], 9, 2],
        [[3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52, 1],
        [[1, 4, 16, 22, 5, 7, 8, 9, 10], 39, 3],
        [[1, 4, 16, 22, 5, 7, 8, 9, 10], 55, 5],
        [[4, 3, 3, 8, 1, 2, 3], 11, 2],
        [[1, 4, 16, 22, 5, 7, 8, 9, 10], 95, 0]
    ]
)
    ('Given [%s] and sum %i the min length of contiguous numbers is %i', (givenA, givenB, expected) => {
        expect(minSubArray(givenA, givenB)).toEqual(expected);
    })