const intersectTwoArray = require("./intersection-of-two-array-II");

test.each(
    [
        [[1, 2, 2, 1], [2, 2], [2, 2]],
        [[4, 9, 5], [9, 4, 9, 8, 4], [4, 9]],
        [[2, 1], [1, 2], [1, 2]]
    ]
)
    ('Given [%s] Output [%s]', (givenA, givenB, expected) => {
        expect(intersectTwoArray(givenA, givenB)).toEqual(expect.arrayContaining(expected));
    })