const twoSum = require("./twoSum");

test.each(
    [
        [[2, 7, 11, 15], 9, ["0", "1"]],
        [[1, 3, 5, 6, 15], 11, ["2", "3"]],
        [[6, 12, 14, 30], 36, ["0", "3"]],
        [[2, 7], 9, ["0", "1"]],
        [[120, 250, 460, 705], 955, ["1", "3"]],
        [[0, 4, 3, 0], 0, ["0", "3"]],
        [[1, 3, 2, 4], 6, ["2", "3"]],
        [[3, 2, 4], 6, ["1", "2"]]
    ]
)
    ('Given nums = [%s], target = %i. Expect return [%s]', (a, b, expected) => {
        expect(twoSum(a, b)).toEqual(expected);
    })

// npm run test (to run all test)
// npm run twoSum.test.js