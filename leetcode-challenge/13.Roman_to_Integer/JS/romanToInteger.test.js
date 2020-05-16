const romanToInt = require("./romanToInteger")

test.each(
    [
        ["IV", 4],
        ["III", 3],
        ["IX", 9],
        ["LVIII", 58],
        ["MCMXCIV", 1994]
    ]
)
    ('Give roman number %s the integer will be %i', (given, expected) => {
        expect(romanToInt(given)).toEqual(expected);
    })