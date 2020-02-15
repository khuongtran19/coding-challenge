const sortAscending = require("./sortingAscending");

test.each(
    [
        [[2, 4, 1, 5, 3, 7, 8, 6, 9], [1, 3, 5, 7, 9, 2, 4, 6, 8]]
    ]
)
    ('Sort the array [%s] to be [%s]', (given, expected) => {
        expect(sortAscending(given)).toEqual(expect.arrayContaining(expected));
    })