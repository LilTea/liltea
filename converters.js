const fs = require('fs');
const yaml = require('js-yaml');

const tokens = yaml.safeLoad(fs.readFileSync('./tokens.yaml', 'utf8'));

exports.big2lil = function (source) {
    return source.split(/\s/).map(bigToken => tokens.filter(token => token.big === bigToken)[0].lil).join('');
};

exports.lil2big = function (source) {
    throw Error("Not implemented");
};