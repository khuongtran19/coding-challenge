const implement = require('./Implement-strStr');

test.each(
    [
        ["hello", "ll", 2],
        ["aaaaa", "bba", -1],
        ["a", "a", 0],
        ["aaa", "aa", 0]
    ]
)
    ('haystack = "%s", needle = "%s" Output: %i', (givenA, givenB, expected) => {
        expect(implement(givenA, givenB)).toEqual(expected);
    })