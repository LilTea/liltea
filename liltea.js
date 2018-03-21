require("./lib/helpers").getInput(input => {
    const Engine = require("./lib/engine").engine;
    const engine = new Engine(s => process.stdout.write(s));
    const source = require("fs").readFileSync(process.argv[2]).toString();
    let stack = require("./lib/inputParser").parseInput(input);
    engine.setStack(stack);
    require("./lib/lilTeaRunner").runLilTea(source, engine,
        require("./lib/converters").lil2jsToken,
        require("./lib/config").getSpecialTokens());
});