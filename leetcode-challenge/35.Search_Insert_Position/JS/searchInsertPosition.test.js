const searchInsertPosition = require('./searchInsertPosition');

test.each(
    [
        [[1, 3, 5, 6], 5, 2],
        [[1, 3, 5, 6], 2, 1],
        [[1, 3, 5, 6], 7, 4],
        [[1, 3, 5, 6], 0, 0]
    ]
)
    ('Given = [%s], target = "%s" Output: %i', (givenA, givenB, expected) => {
        expect(searchInsertPosition(givenA, givenB)).toEqual(expected);
    })