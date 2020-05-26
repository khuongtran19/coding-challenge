const someRecursive = require('./someRecursive');

test.each(
    [
        [[1, 2, 3, 4], isOdd, true],
        [[4, 6, 8, 9], isOdd, true]
    ]
)
    ('Given [%s] and %s result shoudl be %i', (givenA, givenB, expected) => {
        expect(someRecursive(givenA, givenB)).toEqual(expected);
    })