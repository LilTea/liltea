const Engine = require('./engine').engine;
eng = new Engine();
test('add', () => {
    eng.setStack([1, 2]);
    eng.add();
    expect(eng.stack).toEqual([3]);
});
test('subtraction', ()=> {
    eng.setStack([3,4]);
    eng.subtraction();
    expect(eng.stack).toEqual([-1]);
})
test('mult', ()=> {
    eng.setStack([3,4,6]);
    eng.mult();
    expect(eng.stack).toEqual([3,24]);
})
test('divide', ()=>{
    eng.setStack([3,4,20]);
    eng.divide();
    expect(eng.stack).toEqual([3,0.2]);
})
test('ascendingSort with numbers', () => {
    eng.setStack([[20,-1,5,7,12,6]])
    eng.ascendingSort()
    expect(eng.stack).toEqual([[-1,5,6,7,12,20]])
})
test('ascendingSort with string', () => {
    eng.setStack([['c','d','a','w']])
    eng.ascendingSort()
    expect(eng.stack).toEqual([['a','c','d','w']])
})
test('descendingSort with numbers', () => {
    eng.setStack([[20,-1,5,7,12,6]])
    eng.descendingSort()
    expect(eng.stack).toEqual([[20,12,7,6,5,-1]])
})
test('descendingSort with string', () => {
    eng.setStack([['c','d','a','w']])
    eng.descendingSort()
    expect(eng.stack).toEqual([['w','d','c','a']])
})
test('square', ()=>{
    eng.setStack([3,4,8]);
    eng.square();
    expect(eng.stack).toEqual([3,4,64])
})
test('dup', ()=>{
    eng.setStack([3,4,8]);
    eng.dup();
    expect(eng.stack).toEqual([3,4,8,8])
})
test('sin', ()=>{
    eng.setStack([3,4,Math.PI/2]);
    eng.sin();
    expect(eng.stack).toEqual([3,4,1])
})
test('cos', ()=>{
    eng.setStack([3,4,Math.PI]);
    eng.cos();
    expect(eng.stack).toEqual([3,4,-1])
})
test('empty', ()=>{
    eng.setStack([3,4,'asd']);
    eng.empty()
    expect(eng.stack).toEqual([])
})
test('stackLenght', ()=>{
    eng.setStack([3,4,'asd']);
    eng.stackLength()
    expect(eng.stack).toEqual([3,4,'asd',3])
})
test('compare', ()=>{
    eng.setStack(['asd', 3 ,4 ,5])
    eng.compare() 
    expect(eng.stack).toEqual(['asd',3,0])
})
test('element', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],1])
    eng.element() 
    expect(eng.stack).toEqual(['asd',3,[4,5],1,5])
})
test('toString', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],1])
    eng.toString() 
    expect(eng.stack).toEqual(['asd',3,[4,5],'1'])
})
test('toInteger', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],'56'])
    eng.toInteger() 
    expect(eng.stack).toEqual(['asd',3,[4,5],56])
})
test('toArray', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],'56'])
    eng.toArray() 
    expect(eng.stack).toEqual(['asd',3,[4,5],['56']])
})
test('toArray', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],'56'])
    eng.toArray() 
    expect(eng.stack).toEqual(['asd',3,[4,5],['56']])
})
test('fact', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],5])
    eng.fact() 
    expect(eng.stack).toEqual(['asd',3,[4,5],120])
})
test('ceil', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],5.2])
    eng.ceil() 
    expect(eng.stack).toEqual(['asd',3,[4,5],6])
})
test('floor', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],5.8])
    eng.floor() 
    expect(eng.stack).toEqual(['asd',3,[4,5],5])
})
test('decrement', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],6])
    eng.decrement() 
    expect(eng.stack).toEqual(['asd',3,[4,5],5])
})
test('increment', ()=>{
    eng.setStack(['asd', 3 ,[4 ,5],6])
    eng.increment() 
    expect(eng.stack).toEqual(['asd',3,[4,5],7])
})