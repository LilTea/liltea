let {
    completeLiterals
} = require('../lib/preLexer');

let spToksMock = {
    string_literal_open: '<',
    string_literal_close: '>'
}

test('nothing to complete strings', () => {
    let source = 'abc<def>ghj'
    expect(completeLiterals(source, spToksMock)).toEqual(source);
});

test('compete initial strings', () => {
    let source = 'abc>def>ghj'
    expect(completeLiterals(source, spToksMock)).toEqual('<abc><def>ghj');
});