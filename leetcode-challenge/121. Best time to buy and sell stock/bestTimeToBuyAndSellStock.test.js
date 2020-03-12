const buyAndSell = require("./bestTimeToBuyAndSellStock")

test.each(
    [
        [[7, 1, 5, 3, 6, 4], 5],
        [[7, 6, 4, 3, 1], 0]
    ]
)
    ('Input %s Output %i', (given, expected) => {
        expect(buyAndSell(given)).toEqual(expected);
    })