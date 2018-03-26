const config = require('../lib/config');
const path = require('path')
const fs = require('fs')
test('getAtoms', () => {
    config.loadConfigSync({
        atomsPath: path.join(__dirname, 'mock_config/happy_atom.yaml')
    })
    expect(config.getAtoms()).toEqual([{
        lil: 'h',
        big: 'Happy',
        js: 'happy',
        description: 'Happy atom'
    }]);
});

test('saveConfigSync', () => {
    const atoms = [{
        lil: 'a',
        big: 'A',
        js: 'aA'
    }, {
        lil: '1',
        big: 'one',
        js: 'number1'
    }];
    config.setAtoms(atoms);
    const saveOpts = {
        atomsPath: path.join(__dirname, 'mock_config/test.yaml')
    };
    config.saveConfigSync(saveOpts)
    let new_config = require('../lib/config').loadConfigSync({
        atomsPath: path.join(__dirname, 'mock_config/test.yaml')
    });
    expect(new_config.getAtoms()).toEqual(atoms);
    fs.unlinkSync('test/mock_config/test.yaml');
});