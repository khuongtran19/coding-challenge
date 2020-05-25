const recursiveRange = require('./recursiveRange');

test.each(
    [
        [6, 21],
        [10, 55]
    ]
)
    ('Given %i result shoudl be %i', (given, expected) => {
        expect(recursiveRange(given)).toEqual(expected);
    })