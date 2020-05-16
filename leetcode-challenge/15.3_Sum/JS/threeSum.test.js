const threeSum = require("./threeSum");

test.each(
    [
        [[-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]]
    ]
)
    ('Given nums = [%s], your function should return [%s]', (given, expected) => {
        expect(threeSum(given)).toEqual(expected);
    })