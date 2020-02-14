const duplicate = require('./contains-duplicate');

test.each(
    [
        [[1, 2, 3, 1], true],
        [[1, 2, 3, 4], false],
        [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
        [[24, 27, 28, 21, 3, 44, 4, 55, 6, 21, 9], true],
        [[147483648, 1, -2147483648, 2, 0, 147483648], true]
    ]
)
    ('Given the array of integers [%s] it should be %s', (given, expected) => {
        expect(duplicate(given)).toEqual(expected);
    })