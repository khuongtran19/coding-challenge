const longestCommonPrefix = require("./longestCommonPrefix");

test.each(
    [
        [
            ["flower", "flow", "flight"], "fl"
        ],
        [
            ["dog", "racecar", "car"], ""
        ]
    ]
)
    ('Given list of words [%s], longest common prefix should be %s', (given, expected) => {
        expect(longestCommonPrefix(given)).toEqual(expected);
    })