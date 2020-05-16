const lengthOfLastWord = require("./lengthOfLastWord")


test.each(
    [
        ["Hello World", 5],
        ["        Hello         World       ", 5],
        ["If I read this, you are a stupid person", 6]
    ]
)
    ('Given string "%s" the length of the last word is %i', (given, expected) => {
        expect(lengthOfLastWord(given)).toEqual(expected);
    })