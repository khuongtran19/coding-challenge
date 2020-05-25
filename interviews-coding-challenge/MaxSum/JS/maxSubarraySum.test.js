const maxSubarraySum = require('./maxSubarraySum')

test.each(
    [
        [[1, 2, 5, 2, 8, 1, 5], 2, 10],
        [[1, 2, 5, 2, 8, 1, 5], 4, 17],
        [[4, 2, 1, 6], 1, 6],
        [[4, 2, 1, 6, 2], 4, 13],
        [[], 4, null]
    ]
)
    ('Given [%s] and num [%i] the max sum is %i', (givenA, givenB, expected) => {
        expect(maxSubarraySum(givenA, givenB)).toEqual(expected);
    })