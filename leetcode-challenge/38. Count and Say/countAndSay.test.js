const countAndSay = require("./countAndSay");

test.each(
    [
        [1, "1"],
        [2, "11"],
        [3, "21"],
        [4, "1211"],
        [5, "111221"]
    ]
)
    ('Input %i, Output %i', (given, expected) => {
        expect(countAndSay(given)).toEqual(expected);
    })