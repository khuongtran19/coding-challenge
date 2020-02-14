const palindromeNumber = require("./palindrome-number");

test.each(
    [
        [121, true],
        [-121, false],
        [10, false]
    ]
)
    ('Input: %i, Output: %s', (given, expected) => {
        expect(palindromeNumber(given)).toEqual(expected);
    })