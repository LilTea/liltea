const Engine = require('../lib/engine').engine;
eng = new Engine();

describe('basic number operation',()=>{
    beforeEach(()=>{
        eng.setStack([3,4,8])
    })
    test('add', () => {
        eng.do('add');
        expect(eng.stack).toEqual([3,12]);
    });
    test('subtraction', ()=> {
        eng.do('subtraction');
        expect(eng.stack).toEqual([3,-4]);
    })
    test('mult', ()=> {
        eng.do('mult');
        expect(eng.stack).toEqual([3,32]);
    })
    test('divide', ()=>{
        eng.do('divide');
        expect(eng.stack).toEqual([3,0.5]);
    })
    test('doubleDup', ()=>{
        eng.do('doubleDup');
        expect(eng.stack).toEqual([3,4,8,4,8]);
    })
    test('square', ()=>{
        eng.do('square');
        expect(eng.stack).toEqual([3,4,64])
    })
    test('dup', ()=>{
        eng.do('dup');
        expect(eng.stack).toEqual([3,4,8,8])
    })
    test('decrement', ()=>{
        eng.do('decrement') 
        expect(eng.stack).toEqual([3,4,7])
    })
    test('increment', ()=>{
        eng.do('increment') 
        expect(eng.stack).toEqual([3,4,9])
    })
    test('fact', ()=>{
        eng.do('fact') 
        expect(eng.stack).toEqual([3,4,40320])
    })
})
describe('stack sorts with numbers', ()=>{
    beforeEach(()=>{
        eng.setStack([[20,-1,5,7,12,6]])
    })
    test('ascendingSort with numbers', () => {
        eng.do('ascendingSort')
        expect(eng.stack).toEqual([[-1,5,6,7,12,20]])
    })
    test('descendingSort with numbers', () => {
        eng.do('descendingSort')
        expect(eng.stack).toEqual([[20,12,7,6,5,-1]])
    })
})
describe('sorts with strings', ()=>{
    beforeEach(()=>{
        eng.setStack([['c','d','a','w']])
    })
    test('ascendingSort with string', () => {
        eng.do('ascendingSort')
        expect(eng.stack).toEqual([['a','c','d','w']])
    })
    
    test('descendingSort with string', () => {
        eng.do('descendingSort')
        expect(eng.stack).toEqual([['w','d','c','a']])
    })
})
describe('comparisments', ()=>{
    beforeEach(()=>{
        eng.setStack(['asd', 3 ,4 ,5])
    })
    test('compare', ()=>{
        eng.do('compare') 
        expect(eng.stack).toEqual(['asd',3,0])
    })
    test('bigger', ()=>{
        eng.do('bigger') 
        expect(eng.stack).toEqual(['asd',3,true])
    })
    test('less', ()=>{
        eng.do('less') 
        expect(eng.stack).toEqual(['asd',3,false])
    })
})
describe('bitwise operations', ()=>{
    beforeEach(()=>{
        eng.setStack(['asd', 3 ,5,6])
    })
    test('bitswiseAnd', ()=>{
        eng.do('bitwiseAnd') 
        expect(eng.stack).toEqual(['asd',3, 4])
    })
    test('bitswiseAnd', ()=>{
        eng.do('bitwiseOr') 
        expect(eng.stack).toEqual(['asd',3, 7])
    })
    test('bitswiseXor', ()=>{
        eng.do('bitwiseXor') 
        expect(eng.stack).toEqual(['asd',3, 3])
    })
})
describe('casts', ()=>{
    beforeEach(()=>{
        eng.setStack(['asd', 3 ,[4 ,5],'56'])
    })
    test('toInteger', ()=>{
        eng.do('toInteger') 
        expect(eng.stack).toEqual(['asd',3,[4,5],56])
    })
    test('toArray', ()=>{
        eng.do('toArray') 
        expect(eng.stack).toEqual(['asd',3,[4,5],['56']])
    })
    test('toArray', ()=>{
        eng.do('toArray') 
        expect(eng.stack).toEqual(['asd',3,[4,5],['56']])
    })
})
describe('trigonometric functions', ()=>{
    beforeEach(()=>{
        eng.setStack([3,4,90]); 
    })
    test('sin', ()=>{
        eng.do('sin');
        expect(eng.stack).toEqual([3,4,1])
    })
    test('cos', ()=>{
        eng.do('cos');
        expect(eng.stack).toEqual([3,4,0])
    })
})
describe('variables functionality', ()=>{
    beforeEach(()=>{
        eng.setStack([10, 0, 1])
        eng.setVar(2);
    })
    test('var set and get', ()=>{
        eng.getVar(2);
        expect(eng.stack).toEqual([10,0,1]);
    })
    test('checking the stack after set', ()=>{
        expect(eng.stack).toEqual([10,0]);
    })

})
describe('rounding and aproximations', ()=>{
    beforeEach(()=>{
        eng.setStack(['asd', 3 ,[4 ,5],5.2])
    })
    test('ceil', ()=>{
        eng.do('ceil') 
        expect(eng.stack).toEqual(['asd',3,[4,5],6])
    })
    test('floor', ()=>{
        eng.do('floor') 
        expect(eng.stack).toEqual(['asd',3,[4,5],5])
    })
})
describe('stack status', ()=>{
    beforeEach(()=>{
        eng.setStack([10,"asd",false])
    })
    test('empty', ()=>{
        eng.do('empty')
        expect(eng.stack).toEqual([])
    })
    test('stackLenght', ()=>{
        eng.do('stackLength')
        expect(eng.stack).toEqual([10,"asd",false,3])
    })
    test('popCondition', ()=>{
        eng.setStack([10, false])
        expect(eng.popCondition()).toEqual(false)
        expect(eng.stack).toEqual([10])
    })
})
test('element', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],1])
    eng.do('element') 
    expect(eng.stack).toEqual(['asd',3,[4,5],1,5])
})
