const missingNumber = require("./missingNumber");

test.each(
    [
        [[3, 0, 1], 2],
        [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8]
    ]
)
    ('Give array [%s], the missing number should be %i', (given, expected) => {
        expect(missingNumber(given)).toEqual(expected);
    })