const powerThree = require("./powerOfThree");


test.each(
    [
        [27, true],
        [0, false],
        [9, true],
        [45, false]
    ]
)
    ('Input: %i, Output: %s', (given, expected) => {
        expect(powerThree(given)).toEqual(expected);
    })