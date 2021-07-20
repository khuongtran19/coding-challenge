const minimumBribes = require("./new_year_chaos")


test.each(
    [
        [[2, 1, 5, 3, 4], 3],
        [[2, 5, 1, 3, 4], "Too chaotic"],
        [[5, 1, 2, 3, 7, 8, 6, 4], "Too chaotic"],
        [[1, 2, 5, 3, 7, 8, 6, 4], 7]
    ]
)
    ('Given %s Output %s', (given, expected) => {
        expect(minimumBribes(given)).toEqual(expected);
    })