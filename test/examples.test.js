const { execSync } = require('child_process');
const path = require('path');
function runTest(example, input, expectedOutput)
{
    const stdout = execSync(`node liltea.js examples/${example}/src.lit < examples/${example}/${input}`).toString();
    expect(stdout).toEqual(expectedOutput);
}

test('print_if_equal equal', () => {
    runTest('print_if_equal', 'input_equal', 'woo they are equal');
});

test('print_if_equal not equal', () => {
    runTest('print_if_equal', 'input_notEqual', '');
});
