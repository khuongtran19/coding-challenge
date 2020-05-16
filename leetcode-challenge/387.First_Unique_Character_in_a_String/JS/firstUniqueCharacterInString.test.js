const firstUniChar = require('./firstUniqueCharacterInString');

test.each(
    [
        ["leetcode", 0],
        ["loveleetcode", 2]
    ]
)
    ('Given string "%s" the first unique character should be at %i', (given, expected) => {
        expect(firstUniChar(given)).toEqual(expected);
    })