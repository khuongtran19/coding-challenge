const rob = require("./houseRobber")

test.each(
    [
        [[1, 2, 3, 1], 4],
        [[2, 7, 9, 3, 1], 12]
    ]
)
    ('Given [%s] Output %i', (given, expected) => {
        expect(rob(given)).toEqual((expected));
    })