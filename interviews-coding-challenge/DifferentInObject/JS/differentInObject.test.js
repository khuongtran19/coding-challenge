const differentInObject = require('./differentInObject')

test.each(
    [
        [
            { 'name': 'Khuong', 'age': 25, 'gender': 'male' },
            { 'name': 'Khuong', 'age': 25, 'gender': 'male' },
            []
        ],
        [
            { 'name': 'Khuong', 'age': 25, 'hobit': 'watching TV' },
            { 'name': 'Khuong', 'age': 25, 'gender': 'male' },
            [{ hobit: "watching TV" }, { gender: "male" }]
        ],
        [
            { 'name': 'Khuong', 'age': 25 },
            { 'name': 'Khuong', 'age': 25, 'gender': 'male' },
            [{ gender: "male" }]
        ]
    ]
)
    ('Given object %o and %o output is %o', (givenA, givenB, expected) => {
        expect(differentInObject(givenA, givenB)).toEqual(expected);
    })