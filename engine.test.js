const engine = require('./engine');

test('true is true', () => {
    engine.setStack([1, 2]);
    engine.add();
    expect(engine.stack).toEqual([3]);
});