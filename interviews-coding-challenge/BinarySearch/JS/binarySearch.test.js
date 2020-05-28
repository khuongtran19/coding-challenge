const binarySearch = require('./binarySearch');

test.each(
    [
        [[1, 2, 3, 4, 5], 2, 1],
        [[1, 2, 3, 4, 5], 3, 2],
        [[1, 2, 3, 4, 5], 5, 4],
        [[1, 2, 3, 4, 5], 6, -1]
    ]
)
    ('Given [%s] and number is %i the result should be %i', (givenA, givenB, expected) => {
        expect(binarySearch(givenA, givenB)).toEqual(expected);
    })