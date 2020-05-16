const trailingZeros = require("./factorialTrailingZeros")

test.each(
    [
        [3, 0],
        [5, 1],
        [12, 2],
        [28, 6],
        [45, 10]
    ]
)
    ('Given %i Output %i', (given, expected) => {
        expect(trailingZeros(given)).toEqual((expected));
    })