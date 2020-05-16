const maximumSubarray = require("./maximumSubarray")

test.each(
    [
        [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
        [[-10, -3, 4, 5, 9, 24, 103], 145]

    ]
)
    ('Input [%s], Output %i', (given, expected) => {
        expect(maximumSubarray(given)).toEqual(expected);
    })