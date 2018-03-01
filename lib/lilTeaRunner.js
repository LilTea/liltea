module.exports.runLilTea = function (source, engine, lil2jsToken, specialTokens) {
    source.split('').forEach(lilToken => {
        if (lilToken == '?') //THIS IS A HACK FIX IT TODO! //)specialTokens.singleIf)
        {
            engine.singleIf();
            return;
        }
        engine.do(lil2jsToken(lilToken));
        engine.deleteModificators();
    });
}