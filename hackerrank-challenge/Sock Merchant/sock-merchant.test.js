const sockMerchant = require("./sock-merchant");

test.each(
    [
        [9, [10, 20, 20, 10, 10, 30, 50, 10, 20], 3],
        [12, [12, 13, 11, 11, 9, 3, 3, 8, 2, 1, 1, 1], 3]
    ]
)
    ('Given n = %i and ar = [%s] Output %i', (givenA, givenB, expected) => {
        expect(sockMerchant(givenA, givenB)).toEqual(expected);
    })