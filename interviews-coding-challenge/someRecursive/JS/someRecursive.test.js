const someRecursive = require('./someRecursive');

function isOdd(num) {
    return num % 2 === 1;
}

test.each(
    [
        [[1, 2, 3, 4], isOdd, true],
        [[4, 6, 8, 9], isOdd, true],
        [[4, 6, 8], isOdd, false],
        [[4, 6, 8], val => val > 10, false]
    ]
)
    ('Given [%s] and %s result should be %i', (givenA, givenB, expected) => {
        expect(someRecursive(givenA, givenB)).toEqual(expected);
    })