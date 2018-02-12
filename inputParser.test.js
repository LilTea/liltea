const parseInput = require('./inputParser').parseInput;

test('multiline just numbers happy test', () => {
    let input = 
`1 2 3
4 5 6`;
    let stack = parseInput(input);
    expect(stack).toEqual([
        [1, 2, 3],
        [4, 5, 6]
    ]);
});