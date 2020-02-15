const stringSame = require("./string-same-length-and-characters");

test.each(
    [
        ["i run a lot today", "today i run a lot", true]
    ]
)
    ('Given "%s" and "%s" Output "%s"', (givenA, givenB, expected) => {
        expect(stringSame(givenA, givenB)).toEqual((expected));
    })