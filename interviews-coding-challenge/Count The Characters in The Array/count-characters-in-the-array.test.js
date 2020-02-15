const countChar = require("./count-characters-in-the-array");

test.each(
    [
        ['aaaaaa', 'a6'],
        ['aabcccccaaa', 'a2b1c5a3'],
        ['ffcccttssdddddderrr', 'f2c3t2s2d6e1r3']
    ]
)
    ('Given array "%s" there are "%s"', (given, expected) => {
        expect(countChar(given)).toEqual(expected);
    })