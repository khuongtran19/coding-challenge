const reverse = require("./reverse-integer");

test.each(
    [
        [123, 321],
        [-123, -321],
        [120, 21]
    ]
)
    ('Reverse the number %i to be %i', (given, expected) => {
        expect(reverse(given)).toEqual(expected);
    })