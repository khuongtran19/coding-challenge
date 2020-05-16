const implement = require('./ImplementStrStr');

test.each(
    [
        ["hello", "ll", 2],
        ["aaaaa", "bba", -1],
        ["a", "a", 0],
        ["aaa", "aa", 0],
        ["ababcaababcaabc", "ababcaabc", 6],
        ["", "", 0],
        ["a", "", 0],
        ["mississippi", "issip", 4]
    ]
)
    ('haystack = "%s", needle = "%s" Output: %i', (givenA, givenB, expected) => {
        expect(implement(givenA, givenB)).toEqual(expected);
    })