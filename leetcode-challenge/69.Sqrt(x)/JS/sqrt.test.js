const mySqrt = require("./sqrt")

test.each(
    [
        [8, 2],
        [9, 3],
        [12, 3]
    ]
)
    ('Square root of %i is %i', (given, expected) => {
        expect(mySqrt(given)).toEqual(expected);
    })