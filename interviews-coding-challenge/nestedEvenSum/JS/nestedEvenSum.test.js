var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

const nestedEvenSum = require('./nestedEvenSum');

test.each(
    [
        [obj1, 6],
        [obj2, 10]
    ]
)
    ('Given [%s] the result should be [%s]', (given, expected) => {
        expect(nestedEvenSum(given)).toEqual(expected);
    })