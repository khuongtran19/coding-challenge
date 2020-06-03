var sortFunc = require("./sortArray");

test.each(
    [
        [[2, 4, 1, 5, 3, 7, 8, 6, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]
    ]
)
    ('Merge Sort', (given, expected) => {
        expect(sortFunc.bubbleSort(given)).toEqual(expected)
    })

test.each(
    [
        [[2, 4, 1, 5, 3, 7, 8, 6, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]
    ]
)
    ('Bubble Sort', (given, expected) => {
        expect(sortFunc.bubbleSort(given)).toEqual(expected)
    })

