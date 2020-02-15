const countValley = require("./counting-valleys")

test.each(
    [
        [8, "UDDDUDUU", 1]
    ]
)
    ('Given n = [%i] and s = "%s" Output %i', (givenA, givenB, expected) => {
        expect(countValley(givenA, givenB)).toEqual(expected);
    })