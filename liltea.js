const engine = require("./engine");
const { tokens, lil2jsToken } = require("./converters.js");
const fs = require("fs");

const source = fs.readFileSync(process.argv[2]).toString();

function parseLilTea(source) {
    source.split('').forEach(lilToken => {
        engine[lil2jsToken(lilToken)]();
        engine.deleteModificators();
    });
}

function parseInput(input) {
    let stack = input.split(/\s+/).filter(s => s.length !== 0).map(Number);
    engine.setStack([stack.length == 1 ? stack[0] : stack]);
    parseLilTea(source);
}

require("./helpers.js").getInput(parseInput);