const config = require('rewire')('../lib/config');
const path = require('path')
test('getAtoms', () => {
    config.__set__('atomsPath', path.join(__dirname, 'mock_config/atoms.yaml'))
    expect(config.getAtoms()).toEqual([
        {
            lil: 'a',
            big: 'A',
            js: 'aA',
            description: 'Lorem ipsum'
        },
        {
            lil: '1',
            big: 'numeric',
            js: 'number1',
            description: 'Lorem ipsum'
        },
    ]);
    //expect(true).toBe(true);
});

