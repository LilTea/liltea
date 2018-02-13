require("./helpers.js").getInput(input => {
    const Engine = require("./engine").engine;
    const engine = new Engine(console.log);
    const source = require("fs").readFileSync(process.argv[2]).toString();
    let stack = require("./inputParser").parseInput(input);
    engine.setStack(stack);
    require("./lilTeaRunner").runLilTea(source, engine, require("./converters.js").lil2jsToken);
});