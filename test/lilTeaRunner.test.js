const runLilTea = require('../lib/lilTeaRunner').runLilTea;

let engine = {deleteModificators: jest.fn(), do(p){ this[p]() }}
let source;
let converter
let testSymbols= {
    list_literal_open: '[',
    list_literal_close: ']',
    char_literal_open: '`',
    string_literal_open: '>',
    string_literal_close: '<',
    variables: [{
        "setter" : "a",
        "getter" : "A"
    }],
}
let blockTestSymbols = {
	n_times_loop_open: '\\',
	block_close: '}',
	multi_if: '!',
	multi_else: ':',
    single_if: '?',
    conditional_loop_open: '{'
}
function toBeCalledWith(source, result, func){
    runLilTea(source, engine, converter, testSymbols);
    expect(func).toHaveBeenCalledWith(result)
}
function toBeCalledWithTimes(source,func,times){
	runLilTea(source, engine, converter, blockTestSymbols);
	expect(func).toHaveBeenCalledTimes(times);
}
function toBeCalledFucntions(source,functions){
	runLilTea(source, engine, converter, blockTestSymbols);
	functions.forEach((func) => {
		expect(func).toHaveBeenCalled()
	})
}

describe("Push operations", ()=>{
    beforeEach(()=>{
		converter = null
        engine.push = jest.fn(() => false);
		engine.pop = jest.fn(() => 2)
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
describe('literals block tests', ()=>{
	beforeEach(()=>{
		engine.push = jest.fn(() => false)
		converter = null,
		engine.popCondition = jest.fn(() => false)
	})
	test('n times loop with literals', () => {
		source = '2\\5}'
		toBeCalledWithTimes(source,engine.push, 3);
	})
	test('single statement if', () => {
		source = '?-';
		toBeCalledFucntions(source, [engine.popCondition])
    });
    
})
describe('atom block tests', () => {
    beforeEach(()=>{
        engine.pop = jest.fn(() => 2)
        engine.push = jest.fn(()=> false)
        engine.compare = jest.fn(()=> true)
        engine.increment = jest.fn();
		engine.a = jest.fn();
		engine.b = jest.fn();
        engine.c = jest.fn();
		engine.d = jest.fn();
		engine.e = jest.fn();
		engine.f = jest.fn();
		converter = x => x
    })
    test('conditionals loops', () =>{
        let i = 10;
        engine.pop = jest.fn(()=>i--)
        source = '{a}'
        toBeCalledWithTimes(source,engine.a, 10);
    })
	test('n times nested loop', () => {
			source = '\\\\a}}'
			toBeCalledWithTimes(source, engine.a, 4)
	})
	test('n times loop', () => {
			source = '\\a}'
			toBeCalledWithTimes(source, engine.a, 2)
	})
	test('multi if false', () => {
        source = 'a!bc}d';
		engine.popCondition = () => false;
		toBeCalledFucntions(source, [engine.a,engine.d]);
	});
	test('multi if false', () => {
		source = 'a!bc}d';
		engine.popCondition = () => true;
		toBeCalledFucntions(source, [engine.a,engine.d,engine.b,engine.c]);
	});
	/*test('multi if false', () => {
		 source = 'a!bc:ef}d';
		engine.popCondition = () => false;
		toBeCalledFucntions(source, [engine.a,engine.d,engine.b,engine.c,engine.e,engine.f]);
    });*/	

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



