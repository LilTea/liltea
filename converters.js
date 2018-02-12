const fs = require('fs');
const yaml = require('js-yaml');

const tokens = yaml.safeLoad(fs.readFileSync('./tokens.yaml', 'utf8'));

function tokenToToken(token, from, to) {
    const found = tokens.filter(t => t[from] === token);
    if (found.lenght == 0) throw Error(`${to} token for ${from} token "${token}" not found.`)
    if (found.lenght > 1) throw Error(`more than 1 possible ${to} tokens exist for ${from} token "${token}".`)
    return found[0][to];
}

lil2jsToken = (token) => tokenToToken(token, "lil", "js");
big2lilToken = (token) => tokenToToken(token, "big", "lil");
lil2bigToken = (token) => tokenToToken(token, "lil", "js");
big2jsToken = (token) => tokenToToken(token, "big", "js");

exports.big2lil = function (source) {
    return source.split(/\s/).map(big2lilToken).join('');
};

exports.lil2big = function (source) {
    throw Error("Not implemented");
};

exports.lil2jsToken = lil2jsToken;
exports.big2lilToken = big2lilToken;
exports.lil2bigToken = lil2bigToken;
exports.big2jsToken = big2jsToken;

exports.tokens = tokens;