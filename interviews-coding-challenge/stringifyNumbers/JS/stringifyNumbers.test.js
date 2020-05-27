const stringifyNumbers = require('./stringifyNumbers');

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

test.each(
    [
        [obj, {
            num: "1",
            test: [],
            data: {
                val: "4",
                info: {
                    isRight: true,
                    random: "66"
                }
            }
        }]
    ]
)
    ('Given [%o] the result should be [%o]', (given, expected) => {
        expect(stringifyNumbers(given)).toEqual(expected);
    })