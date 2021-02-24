const longestSub = require("./reverseInteger");

test.each(
    [
        ["abcabcbb", 3],
        ["bbbbb", 1],
        ["pwwkew", 3],
        ["", 0]
    ]
)
    ('Longest Substring without repeating characters is %i', (given, expected) => {
        expect(longestSub(given)).toEqual(expected);
    })