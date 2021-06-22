const mark_and_toys = require("./mark_and_toys")


test.each(
    [
        [[1, 12, 5, 111, 200, 1000, 10], 50, 4],
        [[1, 2, 3, 4], 7, 3],
        [[3, 7, 2, 9, 4], 15, 3]
    ]
)
    ('List of toys price are [%i] and Mark budget is %s', (givenA, givenB, expected) => {
        expect(mark_and_toys(givenA, givenB)).toEqual(expected);
    })