const config = require('../lib/config');
const path = require('path')
const fs = require('fs')
test('unique lil symbols', () => {
    config.loadConfigSync()
    symbols = config.getAllLilSymbols();

    let valuesSoFar = Object.create(null);
    let dups = [];
    for (let i = 0; i < symbols.length; ++i) {
        let value = symbols[i].lil;
        if (value in valuesSoFar)
            dups.push(`${symbols[i].big} same as ${symbols.find(s => s.lil == value).big}: ${symbols[i].lil}`)
        valuesSoFar[value] = true;
    }
    if(dups.length > 0)
        fail(dups.join('\n'))
});