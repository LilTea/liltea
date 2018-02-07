const engine = require('./engine');

test('add', () => {
    engine.setStack([1, 2]);
    engine.add();
    expect(engine.stack).toEqual([3]);
});