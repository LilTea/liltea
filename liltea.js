const engine = require("./engine");
const { tokens, lil2jsToken } = require("./converters.js");

function parseLilTea(source) {
    source.split('').forEach(lilToken => {
        engine.execute(lil2jsToken(lilToken));
    });
}

require("./helpers.js").getInput(parseLilTea);