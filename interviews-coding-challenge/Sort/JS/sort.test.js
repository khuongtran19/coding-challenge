const sort = require('./sort')

test.each(
    [
        [[1, 2, 3, 4, 5, 6], 4, 3],
        [[1, 2, 3, 4, 5, 6], 6, 5],
        [[1, 2, 3, 4, 5, 6], 11, -1]
    ]
)
    ('Given sorted array [%s] and value %i return the index %i', (givenA, givenB, expected) => {
        expect(sort(givenA, givenB)).toEqual(expected);
    })