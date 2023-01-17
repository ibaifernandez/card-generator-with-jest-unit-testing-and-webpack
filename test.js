const { valueGenerator, symbolGenerator } = require("./app.js");

test('Expect symbol to be within the array "symbols"', () => {
    expect(["♦", "♥", "♠", "♣"]).toContain(symbolGenerator());
});

test('Expect value to be within the array "values"', () => {
    expect([
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
    ]).toContain(valueGenerator());
});
