const pivotIndex = require("./pivotIndex");

test.each(
    [
        [[1, 7, 3, 6, 5, 6], 3]
    ]
)
    ('Given array "%s" and the pivot index should be %i', (given, expected) => {
        expect(pivotIndex(given)).toEqual(expected);
    })