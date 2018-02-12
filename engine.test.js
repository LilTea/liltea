const Engine = require('./engine').engine;
eng = new Engine();
test('add', () => {
    eng.setStack([1, 2]);
    eng.add();
    expect(eng.stack).toEqual([3]);
});