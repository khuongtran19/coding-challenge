const sumZero = require('./sumZero');

test.each(
    [
        [[-4, -3, -2, -1, 0, 1, 2, 5], [-2, 2]],
        [[-3, -2, -1, 0, 1, 2, 3], [-3, 3]],
        [[1, 2, 3], undefined]
    ]
)
    ('Given = [%s] Output: [%s]', (given, expected) => {
        expect(sumZero(given)).toEqual(expected);
    })