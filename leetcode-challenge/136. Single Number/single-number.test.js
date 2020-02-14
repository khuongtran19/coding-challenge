const singleNumber = require('./single-number')

test.each(
    [
        [[2, 2, 1], 1],
        [[4, 1, 2, 1, 2], 4],
        [[1], 1]
    ]
)
    ('Given array "%s the single number should be %i', (given, expected) => {
        expect(singleNumber(given)).toEqual(expected);
    })