const validAnagram = require("./valid-anagram");

test.each(
    [
        ["anagram", "nagaram", true],
        ["rat", "cat", false],
        ["xaaddy", "xbbccy", false],
        ["aa", "bb", false]
    ]
)
    ('Give strings "%s" and "%s" the result should be "%s"', (givenA, givenB, expected) => {
        expect(validAnagram(givenA, givenB)).toEqual(expected);
    })