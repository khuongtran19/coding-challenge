const isPalindrome = require('./isPalindrome');

test.each(
    [
        ['awesome', false],
        ['foobar', false],
        ['tacocat', true],
        ['amanaplanacanalpanama', true],
        ['amanaplanacanalpandemonium', false]
    ]
)
    ('Given %i result shoudl be %i', (given, expected) => {
        expect(isPalindrome(given)).toEqual(expected);
    })