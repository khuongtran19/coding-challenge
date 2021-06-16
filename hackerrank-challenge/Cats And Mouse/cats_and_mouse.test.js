const catsAndMouse = require("./cats_and_mouse")

test.each(
    [
        [22, 75, 70, "Cat B"],
        [33, 86, 59, "Cat A"],
        [47, 29, 89, "Cat A"],
        [18, 19, 82, "Cat B"],
        [84, 17, 18, "Cat B"]
    ]
)
    ('Cat A = %i, Cat B = %i, Mouse C = %i, %s', (givenA, givenB, givenC, expected) => {
        expect(catsAndMouse(givenA, givenB, givenC)).toEqual(expected);
    })