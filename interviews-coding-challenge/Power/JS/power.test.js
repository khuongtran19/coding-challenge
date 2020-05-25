const power = require('./power');

test.each(
    [
        [2, 0, 1],
        [2, 2, 4],
        [2, 4, 16]
    ]
)
    ('Given base is %i and exponent is %i the result should be %i', (givenA, givenB, expected) => {
        expect(power(givenA, givenB)).toEqual(expected);
    })