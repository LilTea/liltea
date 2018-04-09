const runLilTea = require('../lib/lilTeaRunner').runLilTea;

let engine = {deleteModificators: jest.fn(), do(p){ this[p]() }}

test('calling the right engine function', () => {
    let source = "+";
    engine.test = jest.fn();
    runLilTea(source, engine, () => "test", {});
    expect(engine.test).toHaveBeenCalled();
});
test('simple number literal test', () => {
    let source = '3';
    engine.push = jest.fn(() => false);
    runLilTea(source, engine, null, {});
    expect(engine.push).toHaveBeenCalledWith(3);
});
test('simple number list  literal test', () => {
    let source = '[3,4,5,6]';
    engine.push = jest.fn(() => false);
    runLilTea(source, engine, null, {list_literal_open: '[',list_literal_close: ']'});
    expect(engine.push).toHaveBeenCalledWith([3,4,5,6]);
});
test('simple number list  literal test', () => {
    let source = '[33,44,55,666]';
    engine.push = jest.fn(() => false);
    runLilTea(source, engine, null, {list_literal_open: '[',list_literal_close: ']'});
    expect(engine.push).toHaveBeenCalledWith([33,44,55,666]);
});
test('simple char  literal test', () => {
    let source = '`a';
    engine.push = jest.fn(() => false);
    runLilTea(source, engine, null, {char_literal_open: '`'});
    expect(engine.push).toHaveBeenCalledWith('a');
});
test('double digit number literal test', () => {
    let source = '3456';
    engine.push = jest.fn(() => false);
    runLilTea(source, engine, null, {});
    expect(engine.push).toHaveBeenCalledWith(3456);
}); 
test('complex double digit number literal test', () => {
    let source = '34>asd<';
    engine.push = jest.fn(() => false);
    runLilTea(source, engine, null, {string_literal_open: '>', string_literal_close: '<'});
    expect(engine.push).toHaveBeenCalledWith(34);
});

test('single statement if', () => {
    let source = '?-';
    engine.popCondition = jest.fn(() => false);
    runLilTea(source, engine, null, {single_if: '?'});
    expect(engine.popCondition).toHaveBeenCalled();
});

test('basic string literal', () => {
    let source = '>asd<';
    engine.push = jest.fn();
    runLilTea(source, engine, null, {string_literal_open: '>', string_literal_close: '<'});
    expect(engine.push).toHaveBeenCalledWith('asd');
});
test('basic var operation', () => {
    let source = '>asd<A';
    let specialSymbols = 
    {
        string_literal_open: '>',
        string_literal_close: '<',
        variables: [{
            "setter" : "a",
            "getter" : "A"
        }]
    }
    engine.getVar = jest.fn();
    runLilTea(source, engine, null,specialSymbols);
    expect(engine.getVar).toHaveBeenCalledWith(0);
});
test('basic var operation', () => {
    let source = '>asd<a';
    let specialSymbols = 
    {
        string_literal_open: '>',
        string_literal_close: '<',
        variables: [{
            "setter" : "a",
            "getter" : "A"
        }]
    }
    engine.setVar = jest.fn();
    runLilTea(source, engine, null,specialSymbols);
    expect(engine.setVar).toHaveBeenCalledWith(0);
});
test('complex var operation', () => {
    let source = '>asd<aA';
    let specialSymbols = 
    {
        string_literal_open: '>',
        string_literal_close: '<',
        variables: [{
            "setter" : "a",
            "getter" : "A"
        }]
    }
    engine.setVar = jest.fn();
    engine.getVar = jest.fn();
    runLilTea(source, engine, null,specialSymbols);
    expect(engine.setVar).toHaveBeenCalledWith(0);
    expect(engine.getVar).toHaveBeenCalledWith(0);
});

test('multi if false', () => {
    let source = 'a!bc}d';
    let spToksMock = 
    {
        multi_if: '!',
        block_close: '}',
    }
    engine.a = jest.fn();
    engine.b = jest.fn();
    engine.c = jest.fn();
    engine.d = jest.fn();
    engine.popCondition = () => false;
    runLilTea(source, engine, x => x, spToksMock);
    expect(engine.a).toHaveBeenCalled();
    expect(engine.d).toHaveBeenCalled();
});

