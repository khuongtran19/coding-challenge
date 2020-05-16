const buySell = require('./bestTimeToBuyAndSellStock')

test.each(
    [
        [[7, 1, 5, 3, 6, 4], 7],
        [[1, 2, 3, 4, 5], 4],
        [[7, 6, 4, 3, 1], 0],
        [[3, 3, 5, 0, 0, 3, 1, 4], 8],
        [[2, 1, 2, 0, 1], 2],
        [[1, 7, 7, 9], 8],
        [[7], 0],
        [[7, 1], 0],
        [[1, 7], 6],
        [[1, 7, 8], 7],
        [[1, 7, 1, 1], 6],
        [[7, 1, 5, 3, 6, 4], 7],
        [[1, 2, 3, 4, 5], 4],
        [[7, 6, 4, 3, 1], 0]
    ]
)
    ('Input %s Output %i', (given, expected) => {
        expect(buySell(given)).toEqual(expected);
    })