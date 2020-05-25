const countUniqueValues = require('./countUniqueValues')

test.each(
    [
        [[1, 1, 1, 1, 1, 2], 2],
        [[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7],
        [[], 0],
        [[-2, -1, -1, 0, 1], 4]
    ]
)
    ('Given array "%s" there are %i unique', (given, expected) => {
        expect(countUniqueValues(given)).toEqual(expected);
    })