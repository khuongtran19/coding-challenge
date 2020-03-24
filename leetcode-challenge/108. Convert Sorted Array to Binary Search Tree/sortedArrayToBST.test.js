const sortedArrayToBST = require("./sortedArrayToBST");

test.each(
    [
        [[-10, -3, 0, 5, 9], [0, -3, 9, -10, null, 5]]
    ]
)
    ('Input [%s], Output: [%s]', (given, expected) => {
        expect(sortedArrayToBST(given)).toEqual(expected);
    })