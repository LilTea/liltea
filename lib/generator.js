const fs = require('fs')
const table = require('markdown-table');
const path = require('path')
const config = require('../lib/config')
config.loadConfigSync({
    atomsPath: path.join(__dirname, '../config/atoms.yaml')
})
const tokens = config.getAtoms()
let alphabet = [
        "¡", "¢", "£", "¤", "¥", "¦", "©", "¬", "®", "µ", "½", "¿", "€", "Æ", "Ç",
        "Ð", "Ñ", "×", "Ø", "Œ", "Þ", "ß", "æ", "ç", "ð", "ı", "ȷ", "ñ", "÷", "ø",
        "œ", "þ", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
        "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";",
        "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
        "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z", "{", "|", "}", "~", "¶", "°", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷",
        "⁸", "⁹", "⁺", "⁻", "⁼", "⁽", "⁾", "Ɓ", "Ƈ", "Ɗ", "Ƒ", "Ɠ", "Ƙ", "Ɱ", "Ɲ",
        "Ƥ", "Ƭ", "Ʋ", "Ȥ", "ɓ", "ƈ", "ɗ", "ƒ", "ɠ", "ɦ", "ƙ", "ɱ", "ɲ", "ƥ", "ʠ",
        "ɼ", "ʂ", "ƭ", "ʋ", "ȥ", "Ạ", "Ḅ", "Ḍ", "Ẹ", "Ḥ", "Ị", "Ḳ", "Ḷ", "Ṃ", "Ṇ",
        "Ọ", "Ṛ", "Ṣ", "Ṭ", "Ụ", "Ṿ", "Ẉ", "Ỵ", "Ẓ", "Ȧ", "Ḃ", "Ċ", "Ḋ", "Ė", "Ḟ",
        "Ġ", "Ḣ", "İ", "Ŀ", "Ṁ", "Ṅ", "Ȯ", "Ṗ", "Ṙ", "Ṡ", "Ṫ", "Ẇ", "Ẋ", "Ẏ", "Ż",
        "ạ", "ḅ", "ḍ", "ẹ", "ḥ", "ị", "ḳ", "ḷ", "ṃ", "ṇ", "ọ", "ṛ", "ṣ", "ṭ", "ụ",
        "ṿ", "ẉ", "ỵ", "ẓ", "ȧ", "ḃ", "ċ", "ḋ", "ė", "ḟ", "ġ", "ḣ", "ŀ", "ṁ", "ṅ",
        "ȯ", "ṗ", "ṙ", "ṡ", "ṫ", "ẇ", "ẋ", "ẏ", "ż", "«", "»", "‘", "’", "“", "”"
    ]
    .filter(l => !tokens.map(t => t.lil).includes(l));


tokens.forEach(tok => {
    if (tok.lil === null) {
        tok.lil_generated = alphabet.shift();
    }
});

require('./config').setAtoms(tokens);

const docs = tokens.map(token => {
    const lil = '`' + (token.lil === null ? token.lil_generated + '` (gen.)' : token.lil + '`');
    return [lil, '`' + token.big + '`', token.description]
})

console.log(
    table([['Liltea', 'Bigtea', 'Description']]
        .concat(docs)
    )
);