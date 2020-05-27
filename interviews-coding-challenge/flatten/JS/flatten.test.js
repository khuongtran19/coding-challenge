const flatten = require('./flatten');

test.each(
    [
        [[1, 2, 3, [4, 5]], [1, 2, 3, 4, 5]],
        [[1, [2, [3, 4], [[5]]]], [1, 2, 3, 4, 5]],
        [[[1], [2], [3]], [1, 2, 3]],
        [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]], [1, 2, 3]]
    ]
)
    ('Given [%s] the result should be [%s]', (given, expected) => {
        expect(flatten(given)).toEqual(expected);
    })