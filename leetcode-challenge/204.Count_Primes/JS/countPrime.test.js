const countPrime = require("./countPrime")

test.each(
    [
        [10, 4],
        [24, 9],
        [108, 28]
    ]
)
    ('Given number %i, total of prime numbers should be %i', (given, expected) => {
        expect(countPrime(given)).toEqual(expected);
    })