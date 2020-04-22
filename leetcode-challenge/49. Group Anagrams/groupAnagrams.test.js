const groupAnagrams = require("./groupAnagrams")

test.each(
    [
        [["eat", "tea", "tan", "ate", "nat", "bat"], [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]]
    ]
)
    ('Given array with words [%s], group anagrams [%s]"', (given, expected) => {
        expect(groupAnagrams(given)).toEqual(expected);
    })