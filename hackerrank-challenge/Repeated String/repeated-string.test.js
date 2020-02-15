const repeatedString = require("./repeated-string");

test.each(
    [
        ["aba", 10, 7],
        ["a", 1000000000000, 1000000000000]
    ]
)
    ('Given "%s" and "%s" Output "%s"', (givenA, givenB, expected) => {
        expect(repeatedString(givenA, givenB)).toEqual((expected));
    })