const valid = require("./validAnagram");

test.each(
    [
        ["anagram", "nagaram", true],
        ["rat", "cat", false],
        ["xaaddy", "xbbccy", false],
        ["aa", "bb", false]
    ]
)
    ('Give strings "%s" and "%s" the result should be "%s"', (givenA, givenB, expected) => {
        expect(valid(givenA, givenB)).toEqual(expected);
    })