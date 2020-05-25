const factorial = require('./factorial');

test.each(
    [
        [1, 1],
        [2, 2],
        [4, 24],
        [7, 5040]
    ]
)
    ('Given %i! the answer should be %i', (given, expected) => {
        expect(factorial(given)).toEqual(expected);
    })