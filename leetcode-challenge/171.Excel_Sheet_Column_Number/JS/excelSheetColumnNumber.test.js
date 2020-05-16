const excelSheet = require('./excelSheetColumnNumber');

test.each(
    [
        ['AB', 28],
        ['A', 1],
        ['ZY', 701]
    ]
)
    ('Given "%s" the Output number should be %i', (given, expected) => {
        expect(excelSheet(given)).toEqual(expected);
    })