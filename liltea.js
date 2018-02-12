const engine = require("./engine");
const { tokens, lil2jsToken } = require("./converters.js");
const fs = require("fs");

const source = fs.readFileSync(process.argv[2]).toString();

function runLilTea(source) {
    source.split('').forEach(lilToken => {
        engine[lil2jsToken(lilToken)]();
        engine.deleteModificators();
    });
}

function parseInput(input) {
    let lines = input.split(/\r\n?|\n/);
    let elements = lines.map(l => l.split(/\s/));
    let stack = elements.map(el => el.map(inEl => isNaN(parseFloat(inEl)) ? inEl : parseFloat(inEl)));
    console.log(stack);
}

require("./helpers.js").getInput(input => {
    let stack = parseInput(input);
    engine.setStack([stack.length == 1 ? stack[0] : stack]);
    runLilTea(source);
});