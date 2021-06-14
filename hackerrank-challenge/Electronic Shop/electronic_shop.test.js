const electronicShop = require("./electronic_shop")

test.each(
    [
        [[3, 1], [5, 2, 8], 10, 9],
        [[4], [5], 5, -1]
    ]
)
    ('Given keyboards %s, USB drive %s, and total budget b = %i the best possible budget is %i ', (givenA, givenB, givenC, expected) => {
        expect(electronicShop(givenA, givenB, givenC)).toEqual(expected);
    })