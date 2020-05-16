const sumOfTwoInt = require('./sumOfTwoIntegers');


test.each(
    [
        [1, 2, 3],
        [-2, 3, 1]
    ]
)
    ('Input: a = %i, b = %i , Output: %i', (givenA, givenB, expected) => {
        expect(sumOfTwoInt(givenA, givenB)).toEqual(expected);
    })