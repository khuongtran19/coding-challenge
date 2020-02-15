const jumpCloud = require("./jump-on-cloud")


test.each(
    [
        [[0, 0, 1, 0, 0, 1, 0], 4],
        [[0, 0, 0, 0, 1, 0], 3],
        [[0, 1, 0, 0, 1, 0], 3]
    ]
)
    ('Given [%s] Output [%s]', (given, expected) => {
        expect(jumpCloud(given)).toEqual(expected);
    })