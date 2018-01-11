const engine = require("./engine");
const { tokens, lil2jsToken } = require("./converters.js");
const fs = require("fs");

const source = fs.readFileSync(process.argv[2]).toString();

function parseLilTea(source) {
    source.split('').forEach(lilToken => {
        engine.execute(lil2jsToken(lilToken));
    });
}

function parseInput(input) {
    engine.setStack(input.split(/\s/).map(Number));
    parseLilTea(source);
}

require("./helpers.js").getInput(parseInput);