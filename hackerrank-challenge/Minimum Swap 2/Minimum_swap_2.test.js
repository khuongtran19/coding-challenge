const minimumSwap = require("./Minimum_swap_2")


test.each(
    [
        [[4, 3, 1, 2], 3],
        [[2, 3, 4, 1, 5], 3],
        [[1, 3, 5, 2, 4, 6, 7], 3]
    ]
)
    ('Given [%s] Output [%s]', (given, expected) => {
        expect(minimumSwap(given)).toEqual(expected);
    })