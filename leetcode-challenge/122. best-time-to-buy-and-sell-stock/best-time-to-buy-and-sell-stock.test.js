const buySell = require('./best-time-to-buy-and-sell-stock')

test.each(
    [
        [[7, 1, 5, 3, 6, 4], 7],
        [[1, 2, 3, 4, 5], 4],
        [[7, 6, 4, 3, 1], 0]
    ]
)
    ('Input %s Output %i', (given, expected) => {
        expect(buySell(given)).toEqual(expected);
    })