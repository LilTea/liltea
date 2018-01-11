const fs = require('fs');
const yaml = require('js-yaml');

const tokens = yaml.safeLoad(fs.readFileSync('./tokens.yaml', 'utf8'));

exports.big2lil = function (source) {
    return "HELLO";
};

exports.lil2big = function (source) {
    return "Hola";
};