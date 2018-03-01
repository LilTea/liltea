const helpers = require("../lib/helpers")

test('getInput', () => {
    const stdin = require('mock-stdin').stdin();
    
    const callback = jest.fn();

    helpers.getInput(callback);
    
    stdin.send("a b c\n1 2 3");
    stdin.end();

    expect(callback).toHaveBeenCalledWith("a b c\n1 2 3")
});

