const reverseString = require('./reverse-string');

test.each(
    [
        [["h", "e", "l", "l", "o"], ["o", "l", "l", "e", "h"]],
        [["H", "a", "n", "n", "a", "h"], ["h", "a", "n", "n", "a", "H"]],
        [["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"], ["a", "m", "a", "n", "a", "P", " ", ":", "l", "a", "n", "a", "c", " ", "a", " ", ",", "n", "a", "l", "p", " ", "a", " ", ",", "n", "a", "m", " ", "A"]]
    ]
)
    ('Reverse the string "%s" to be "%s"', (given, expected) => {
        expect(reverseString(given)).toEqual(expected);
    })