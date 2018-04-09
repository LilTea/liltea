let helpers = require("./lib/helpers");

function main(input) {
    const config = require("./lib/config").loadConfigSync();
    const Engine = require("./lib/engine").engine;
    const engine = new Engine(s => process.stdout.write(s));
    const source = require("fs").readFileSync(process.argv[2]).toString();
    let stack = require("./lib/inputParser").parseInput(input);
    engine.setStack(stack);
    require("./lib/lilTeaRunner").runLilTea(
        require("./lib/preLexer").completeLiterals(source, config.getSpecialTokens()), engine,
        require("./lib/converters").lil2jsToken,
        config.getSpecialTokens());
}
if (process.argv[3])
    main(helpers.getInputFromFile(process.argv[3]));
else
    helpers.getInput(main);