module.exports.runLilTea = function (source, engine, lil2jsToken, specialTokens) {
    let statements = [];
    for(let i = 0; i < source.length; i++)
    {
        if (source[i] == specialTokens.single_if)
        {
            statements.push( 
                {
                    type: 'single_if',
                    execute: () => engine.singleIf()
                });
        }
        else{
            statements.push( 
            {
                type: 'atom',
                execute: () => engine.do(lil2jsToken(source[i]))
            });
        }
        
    }
    statements.forEach(statement => {
        statement.execute();
        engine.deleteModificators();
    })
}