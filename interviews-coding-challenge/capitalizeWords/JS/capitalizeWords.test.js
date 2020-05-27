const capitalizeWords = require('./capitalizeWords');

test.each(
    [
        [['i', 'am', 'learning', 'recursion'], ['I', 'AM', 'LEARNING', 'RECURSION']]
    ]
)
    ('Given [%s] the result should be [%s]', (given, expected) => {
        expect(capitalizeWords(given)).toEqual(expected);
    })