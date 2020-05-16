const fizzBuzz = require("./fizzBuzz");

test.each(
    [
        [15, ["1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz"]]
    ]
)
    ('Given n = "%i" the output should be "%s"', (given, expected) => {
        expect(fizzBuzz(given)).toEqual(expected);
    })