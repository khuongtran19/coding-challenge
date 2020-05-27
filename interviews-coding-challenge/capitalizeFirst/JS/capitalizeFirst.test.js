const capitalizeFirst = require('./capitalizeFirst');

test.each(
    [
        [['car', 'taco', 'banana'], ['Car', 'Taco', 'Banana']]
    ]
)
    ('Given [%s] the result should be [%s]', (given, expected) => {
        expect(capitalizeFirst(given)).toEqual(expected);
    })