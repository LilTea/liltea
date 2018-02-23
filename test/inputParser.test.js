const parseInput = require('../lib/inputParser').parseInput;

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

test('one number per line', () => {
    let input = 
`1
2
3`;
    let stack = parseInput(input);
    expect(stack).toEqual([
        1,
        2,
        3
    ]);
});

test('one number per line', () => {
    let input = 
`1
2
3`;
    let stack = parseInput(input);
    expect(stack).toEqual([
        1,
        2,
        3
    ]);
});

test('just strings', () => {
    let input = 
`a
a b cde`;
    let stack = parseInput(input);
    expect(stack).toEqual([
        'a',
        ['a', 'b', 'cde']
    ]);
});