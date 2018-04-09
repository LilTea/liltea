const runLilTea = require('../lib/lilTeaRunner').runLilTea;

let engine = {deleteModificators: jest.fn(), do(p){ this[p]() }}
let source;

let testSymbols= {
    list_literal_open: '[',
    list_literal_close: ']',
    char_literal_open: '`',
    string_literal_open: '>',
    string_literal_close: '<',
    variables: [{
        "setter" : "a",
        "getter" : "A"
    }]
}
function toBeCalledWith(source, result, func){
    runLilTea(source, engine, null, testSymbols);
    expect(func).toHaveBeenCalledWith(result)
}
describe("Push operations", ()=>{
    beforeEach(()=>{
        engine.push = jest.fn(() => false);
    })
    test('simple number literal test', () => {
        source = '3';
        toBeCalledWith(source,3,engine.push)
    });
    test('simple number list  literal test', () => {
        source = '[3,4,5,6]';
        toBeCalledWith(source,[3,4,5,6],engine.push)
    });
    test('simple number list  literal test', () => {
        source = '[33,44,55,666]';
        toBeCalledWith(source,[33,44,55,666],engine.push)
    });
    test('simple char  literal test', () => {
        source = '`a';
        toBeCalledWith(source,'a',engine.push)
    });
    test('double digit number literal test', () => {
        source = '3456';
        toBeCalledWith(source,3456,engine.push)
    }); 
    test('complex double digit number literal test', () => {
        source = '34>asd<';
        toBeCalledWith(source,34,engine.push)
    });
    test('basic string literal', () => {
        source = '>asd<';
        toBeCalledWith(source,'asd',engine.push)
    });
})

describe("var operations", ()=>{
    beforeEach(()=>{
        engine.getVar = jest.fn();
        engine.setVar = jest.fn();
    })
    
    test('basic var operation', () => {
        source = '>asd<A';
        toBeCalledWith(source,0,engine.getVar)
    });
    test('basic var operation', () => {
        source = '>asd<a';
        toBeCalledWith(source,0,engine.setVar)
    });
    test('complex var operation', () => {
        source = '>asd<aA';
        toBeCalledWith(source,0,engine.setVar)
        toBeCalledWith(source,0,engine.getVar)
    });

})

// dont know what to do with thoose guys 
test('calling the right engine function', () => {
    let source = "+";
    engine.test = jest.fn();
    runLilTea(source, engine, () => "test", {});
    expect(engine.test).toHaveBeenCalled();
});
test('single statement if', () => {
    let source = '?-';
    engine.popCondition = jest.fn(() => false);
    runLilTea(source, engine, null, {single_if: '?'});
    expect(engine.popCondition).toHaveBeenCalled();
});
/*test('multi if false', () => {
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
});*/
