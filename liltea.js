require("./helpers.js").getInput(input => {
    const engine = require("./engine");
    const source = require("fs").readFileSync(process.argv[2]).toString();
    let stack = require("./inputParser").parseInput(input);
    engine.setStack(stack);
    require("./lilTeaRunner").runLilTea(source, engine, require("./converters.js").lil2jsToken);
});