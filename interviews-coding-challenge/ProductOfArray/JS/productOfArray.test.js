const productOfArray = require('./productOfArray');

test.each(
    [
        [[1, 2, 3], 6],
        [[1, 2, 3, 10], 60]
    ]
)
    ('Given [%s] result shoudl be %i', (given, expected) => {
        expect(productOfArray(given)).toEqual(expected);
    })