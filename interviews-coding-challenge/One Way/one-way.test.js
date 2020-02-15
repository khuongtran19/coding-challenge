const oneAway = require('./one-way')

test.each(
    [
        ['pale', 'ple', true],
        ['pales', 'pale', true],
        ['pale', 'bale', true],
        ['pale', 'bake', false]
    ]
)
    ('Given array "%s" there are "%s"', (givenA, givenB, expected) => {
        expect(oneAway(givenA, givenB)).toEqual(expected);
    })