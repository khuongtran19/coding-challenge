const isValid = require("./validParentheses.js")

test.each(
    [
        ["()", true],
        ["()[]{}", true],
        ["(]", false],
        ["([)]", false],
        ["{[]}", true],
        ["{ { } [ ] [ [ [ ] ] ] }", true]
    ]
)
    ('Input %s, Output %s', (given, expected) => {
        expect(isValid(given)).toEqual(expected);
    })