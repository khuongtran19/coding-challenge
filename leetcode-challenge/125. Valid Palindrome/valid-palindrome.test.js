const validPalindrome = require("./valid-palindrome")

test.each(
    [
        ["A man, a plan, a canal: Panama", true],
        ["race a car", false],
        ["0P", false],
        [".,", true],
        ["!!!", true]
    ]
)
    ('Check if string %s is Palindrome. The output should be %s', (given, expected) => {
        expect(validPalindrome(given)).toEqual(expected);
    })