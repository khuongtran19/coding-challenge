const reverse = require('./reverse');

test.each(
    [
        ['awesome', 'emosewa'],
        ['rithmschool', 'loohcsmhtir']
    ]
)
    ('Given %i result shoudl be %i', (given, expected) => {
        expect(reverse(given)).toEqual(expected);
    })