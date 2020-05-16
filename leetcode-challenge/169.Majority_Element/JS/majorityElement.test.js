const majorityElement = require("./majorityElement");

test.each(
    [
        [[3, 2, 3], 3],
        [[2, 2, 1, 1, 1, 2, 2], 2]
    ]
)
    ('Given nums = [%s]. Expect return %i', (given, expected) => {
        expect(majorityElement(given)).toEqual(expected);
    })