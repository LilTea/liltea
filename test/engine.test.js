const Engine = require('../lib/engine').engine;
eng = new Engine();
test('add', () => {
    eng.setStack([1, 2]);
    eng.do('add');
    expect(eng.stack).toEqual([3]);
});
test('subtraction', ()=> {
    eng.setStack([3,4]);
    eng.do('subtraction');
    expect(eng.stack).toEqual([-1]);
})
test('mult', ()=> {
    eng.setStack([3,4,6]);
    eng.do('mult');
    expect(eng.stack).toEqual([3,24]);
})
test('divide', ()=>{
    eng.setStack([3,4,20]);
    eng.do('divide');
    expect(eng.stack).toEqual([3,0.2]);
})
test('ascendingSort with numbers', () => {
    eng.setStack([[20,-1,5,7,12,6]])
    eng.do('ascendingSort')
    expect(eng.stack).toEqual([[-1,5,6,7,12,20]])
})
test('ascendingSort with string', () => {
    eng.setStack([['c','d','a','w']])
    eng.do('ascendingSort')
    expect(eng.stack).toEqual([['a','c','d','w']])
})
test('descendingSort with numbers', () => {
    eng.setStack([[20,-1,5,7,12,6]])
    eng.do('descendingSort')
    expect(eng.stack).toEqual([[20,12,7,6,5,-1]])
})
test('descendingSort with string', () => {
    eng.setStack([['c','d','a','w']])
    eng.do('descendingSort')
    expect(eng.stack).toEqual([['w','d','c','a']])
})
test('square', ()=>{
    eng.setStack([3,4,8]);
    eng.do('square');
    expect(eng.stack).toEqual([3,4,64])
})
test('dup', ()=>{
    eng.setStack([3,4,8]);
    eng.do('dup');
    expect(eng.stack).toEqual([3,4,8,8])
})
test('sin', ()=>{
    eng.setStack([3,4,Math.PI/2]);
    eng.do('sin');
    expect(eng.stack).toEqual([3,4,1])
})
test('cos', ()=>{
    eng.setStack([3,4,Math.PI]);
    eng.do('cos');
    expect(eng.stack).toEqual([3,4,-1])
})
test('empty', ()=>{
    eng.setStack([3,4,'asd']);
    eng.do('empty')
    expect(eng.stack).toEqual([])
})
test('stackLenght', ()=>{
    eng.setStack([3,4,'asd']);
    eng.do('stackLength')
    expect(eng.stack).toEqual([3,4,'asd',3])
})
test('compare', ()=>{
    eng.setStack(['asd', 3 ,4 ,5])
    eng.do('compare') 
    expect(eng.stack).toEqual(['asd',3,0])
})
test('element', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],1])
    eng.do('element') 
    expect(eng.stack).toEqual(['asd',3,[4,5],1,5])
})
test('toString', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],1])
    eng.do('toString') 
    expect(eng.stack).toEqual(['asd',3,[4,5],'1'])
})
test('toInteger', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],'56'])
    eng.do('toInteger') 
    expect(eng.stack).toEqual(['asd',3,[4,5],56])
})
test('toArray', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],'56'])
    eng.do('toArray') 
    expect(eng.stack).toEqual(['asd',3,[4,5],['56']])
})
test('toArray', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],'56'])
    eng.do('toArray') 
    expect(eng.stack).toEqual(['asd',3,[4,5],['56']])
})
test('fact', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],5])
    eng.do('fact') 
    expect(eng.stack).toEqual(['asd',3,[4,5],120])
})
test('ceil', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],5.2])
    eng.do('ceil') 
    expect(eng.stack).toEqual(['asd',3,[4,5],6])
})
test('floor', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],5.8])
    eng.do('floor') 
    expect(eng.stack).toEqual(['asd',3,[4,5],5])
})
test('decrement', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],6])
    eng.do('decrement') 
    expect(eng.stack).toEqual(['asd',3,[4,5],5])
})
test('increment', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],6])
    eng.do('increment') 
    expect(eng.stack).toEqual(['asd',3,[4,5],7])
})

test('popCondition', ()=>{
    eng.setStack([10, false])
    expect(eng.popCondition()).toEqual(false)
    expect(eng.stack).toEqual([10])
})

test('var set and get', ()=>{
    eng.setStack([10, 0, 1])
    eng.setVar(0);
    eng.getVar(0);
    expect(eng.stack).toEqual([10,0,1]);
})
test('checking the stack after set', ()=>{
    eng.setStack([10, 0, 1])
    eng.setVar(0);
    expect(eng.stack).toEqual([10,0]);
})
test('checking the stack after set and get', ()=>{
    eng.setStack([10,0,1])
    eng.setVar(2);
    eng.getVar(2);
    expect(eng.stack).toEqual([10,0,1]);
});
test('checking the def values after get', ()=>{
    eng.setStack([10,0,1])
    eng.setVar(2);
    eng.getVar(2);
    eng.getVar(2);
    expect(eng.stack).toEqual([10,0,1,Math.PI]);
});
test('checking the def values after get', ()=>{
    eng.setStack([10,0,1])
    eng.setVar(2);
    eng.getVar(2);
    eng.getVar(2);
    expect(eng.stack).toEqual([10,0,1,Math.PI]);
});