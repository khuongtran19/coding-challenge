const mergeSortedArray = require("./mergeSortedArray")

test.each(
    [
        [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3,
        [1, 2, 2, 3, 5, 6]]
    ]
)
    ('Nums1 [%s], m = %i, Nums2 = [%s], n = %i', (given1, given2, given3, given4, expected) => {
        expect(mergeSortedArray(given1, given2, given3, given4)).toEqual(expected);
    })