const twoSum = require("./two-sum");

test.each(
    [
        [[2, 7, 11, 15], 9, ["0", "1"]],
        [[1, 3, 5, 6, 15], 11, ["2", "3"]],
        [[6, 12, 14, 30], 36, ["0", "3"]],
        [[2, 7], 9, ["0", "1"]],
        [[120, 250, 460, 705], 955, ["1", "3"]]
    ]
)
    ('Given nums = [%s], target = %i. Expect return [%i]', (a, b, expected) => {
        expect(twoSum(a, b)).toEqual(expected);
    })
