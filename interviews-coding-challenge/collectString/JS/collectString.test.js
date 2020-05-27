const collectString = require('./collectString');

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

test.each(
    [
        [obj, ["foo", "bar", "baz"]]
    ]
)
    ('Given [%o] the result should be [%s]', (given, expected) => {
        expect(collectString(given)).toEqual(expected);
    })