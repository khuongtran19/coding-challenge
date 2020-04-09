const removeElement = require("./removeElement");

test.each(
    [
        [[3, 2, 2, 3], 3, 2],
        [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5]
    ]
)
    ('Input [%s] and val = %i, Output [%s]', (given1, given2, expected) => {
        expect(removeElement(given1, given2)).toEqual(expected);
    })