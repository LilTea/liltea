module.exports.runLilTea = function (source, engine, lil2jsToken, specialTokens) {
    let statements = [];
    let inString = false;
    let stringBuilder = '';
    for (let i = 0; i < source.length; i++) {
        if (inString) {
            if (source[i] == specialTokens.string_literal_close) {
                let string = stringBuilder;
                statements.push({
                    type: 'string_literal',
                    surce_start: i,
                    source_end: i + 1,
                    execute: () => engine.push(string)
                });
                inString = false;
                stringBuilder = '';
            }
            else
            {
                stringBuilder += source[i];
            }
        } else if (source[i] == specialTokens.single_if) {
            statements.push({
                type: 'single_if',
                surce_start: i,
                source_end: i + 1,
                execute: () => engine.singleIf()
            });
        } else if (source[i] == specialTokens.string_literal_open) {
            inString = true;
        } else if(source[i] == specialTokens.reverse_stack_flag) {
            statements.push({
                type: 'set_flag',
                surce_start: i,
                source_end: i + 1,
                execute: () => engine.setReverse()
            });
        } else {
            statements.push({
                type: 'atom',
                surce_start: i,
                source_end: i + 1,
                execute: () => engine.do(lil2jsToken(source[i]))
            });
        }

    }
    statements.forEach(statement => {
        statement.execute();
        if(statement.type !== 'set_flag')
            engine.deleteModificators();
    })
}