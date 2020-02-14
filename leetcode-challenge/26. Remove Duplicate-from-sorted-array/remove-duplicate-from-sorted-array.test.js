const removeDuplicate = require("./remove-duplicate-from-sorted-array");

test.each(
    [
        [[1, 1, 2], 2],
        [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5],
        [[1, 2, 2], 2],
        [[1, 1], 1],
        [[], 0],
        [[1], 1],
        [[1, 1, 1, 1, 1], 1],
        [[1, 2, 3, 4, 5], 5],
        [[1, 1, 2, 2, 2], 2]
    ]
)
    ('Given nums = [%s], your function should return length = %i', (given, expected) => {
        expect(removeDuplicate(given)).toEqual(expected);
    })