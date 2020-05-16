const mostWater = require("./containerWithMostWater");

test.each(
    [
        [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49]
    ]
)
    ('Given height = [%s], most water should be %i', (given, expected) => {
        expect(mostWater(given)).toEqual(expected);
    })