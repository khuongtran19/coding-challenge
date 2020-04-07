const intToRoman = require("./integerToRoman");

test.each(
    [
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [20, "XX"],
        [50, "L"],
        [58, "LVIII"],
        [100, "C"],
        [158, "CLVIII"],
        [500, "D"],
        [1994, "MCMXCIV"]
    ]
)
    ('Input integer %i, Roman number is %s', (given, expected) => {
        expect(intToRoman(given)).toEqual(expected);
    })