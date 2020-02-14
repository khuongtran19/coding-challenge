const stringToInteger = require("./string-to-integer");

test.each(
    [
        ["42", 42],
        ["-42", -42],
        ["4193 with words", 4193],
        ["words and 987", 0],
        ["-91283472332", -2147483648]
    ]
)
    ('Input: "%s", Output: "%s"', (given, expected) => {
        expect(stringToInteger(given)).toEqual(expected);
    })