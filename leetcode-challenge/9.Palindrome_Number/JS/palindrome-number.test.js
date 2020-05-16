const palindromeNumber = require("./palindrome-number");

test.each(
    [
        [121, true],
        [-121, false],
        [10, false],
        [-2147447412, false],
        [-101, false],
        [11011911011, true],
        [1000021, false]
    ]
)
    ('Input: %i, Output: %s', (given, expected) => {
        expect(palindromeNumber(given)).toEqual(expected);
    })