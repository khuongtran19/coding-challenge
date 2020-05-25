const same = require('./same');

test.each(
    [
        [[1, 2, 3], [4, 1, 9], true],
        [[1, 2, 3], [1, 9], false],
        [[1, 2, 1], [4, 4, 1], false]
    ]
)
    ('Given = [%s], target = [%s] Output: %s', (givenA, givenB, expected) => {
        expect(same(givenA, givenB)).toEqual(expected);
    })