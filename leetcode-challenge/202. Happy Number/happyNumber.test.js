const isHappy = require("./happyNumber")

test.each(
    [
        [1, true],
        [19, true],
        [28, true],
        [23, true],
        [48, false],
        [50, false]
    ]
)
    ('Give number %i, output should be %s', (given, expected) => {
        expect(isHappy(given)).toEqual(expected);
    })