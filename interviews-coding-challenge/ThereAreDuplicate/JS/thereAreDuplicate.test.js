const thereAreDuplicate = require('./thereAreDuplicate')

test.each(
    [
        [[1, 2, 3], false],
        [[1, 2, 2], true],
        [['a', 'b', 'c', 'a'], true]
    ]
)
    ('', (given, expected) => {
        expect(thereAreDuplicate(given)).toEqual(expected);
    })