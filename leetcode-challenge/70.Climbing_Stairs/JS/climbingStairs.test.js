const climbing = require("./climbingStairs");

test.each(
    [
        [2, 2],
        [3, 3]
    ]
)
    ('For %i stairs, we can have %i way to to take steps', (given, expected) => {
        expect(climbing(given)).toEqual(expected);
    })