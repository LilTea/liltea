const runLilTea = require('../lib/lilTeaRunner').runLilTea;

let engine = {deleteModificators: jest.fn(), do(p){ this[p]() }}

test('calling the right engine function', () => {
    let source = "+";
    engine.test = jest.fn();
    runLilTea(source, engine, () => "test", {});
    expect(engine.test).toHaveBeenCalled();
});

test('single statement if', () => {
    let source = '?';
    engine.singleIf = jest.fn();
    runLilTea(source, engine, null, {single_if: '?'});
    expect(engine.singleIf).toHaveBeenCalled();
});

test('basic string literal', () => {
    let source = '>asd<';
    engine.push = jest.fn();
    runLilTea(source, engine, null, {string_literal_open: '>', string_literal_close: '<'});
    expect(engine.push).toHaveBeenCalledWith('asd');
});