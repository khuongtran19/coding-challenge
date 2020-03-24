const sortedArrayToBST = require("./sortedArrayToBST");

test.each(
    [
        [[-10, -3, 0, 5, 9], { "left": { "left": { "left": null, "right": null, "val": -10 }, "right": null, "val": -3 }, "right": { "left": { "left": null, "right": null, "val": 5 }, "right": null, "val": 9 }, "val": 0 }]
    ]
)
    ('Input [%s], Output: [%s]', (given, expected) => {
        expect(sortedArrayToBST(given)).toEqual(expected);
    })