const maximumSubarray = require("./maximumSubarray")

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
        expect(maximumSubarray(given)).toEqual(expected);
    })