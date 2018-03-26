const {
    execSync
} = require('child_process');
const path = require('path');

function runTest(example, input, expectedOutput) {
    process.stdout.write = jest.fn();
    process.argv[2] = `examples/${example}/src.lit`;
    process.argv[3] = `examples/${example}/${input}`;
    
    //const stdin = require('mock-stdin').stdin();
    //stdin.send("2\n2");
    //stdin.end();

    require("../liltea.js")

    expect(process.stdout.write.mock.calls).toEqual(expectedOutput);
    //expect(callback).toHaveBeenCalledWith("a b c\n1 2 3")
    //const stdout = execSync(`node liltea.js examples/${example}/src.lit < examples/${example}/${input}`).toString();

}

test('print_if_equal equal', () => {
    runTest('print_if_equal', 'input_equal', [
        ['equal']
    ]);
});

test('print_if_equal not equal', () => {
    runTest('print_if_equal', 'input_notEqual', []);
});