const countApplesAndOranges = require("./count_apples_and_oranges")

test.each(
    [
        [7, 11, 5, 15, [-2, 2, 1], [5, -6], [1, 1]]
    ]
)
    ('Sams house is in %i and %i range, apple tree located at %i and orange tree located at %i, apples %s, oranges %s. There are %s for apple(s) and orange(s)', (givenA, givenB, givenC, givenD, givenE, givenF, expected) => {
        expect(countApplesAndOranges(givenA, givenB, givenC, givenD, givenE, givenF)).toEqual(expected);
    })