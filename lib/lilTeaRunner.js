module.exports.runLilTea = function (source, engine, lil2jsToken, specialTokens) {
    function executeConditional(statement)
    {
        engine.popCondition() ? statement.true() : statement.false();
    }
    const atomExecutor = a => () => engine.do(lil2jsToken(a));
    const statements = [];
    let scopePointer = statements;
    let inString = false;
    let stringBuilder = '';
    let varFound;
    let inList = false;
    let list = [];
    for (let i = 0; i < source.length; i++) {
        if(source[i] == specialTokens.list_literal_open){
            inList = true;
        }
        else if(inList){
            if(source[i] == specialTokens.list_literal_close){
                let curList = list
                scopePointer.push({
                    type: 'list_literal',
                    surce_start: i,
                    source_end: i + 1,
                    execute: () => engine.push(curList)
                });
                inList = false;
                list = [];
            }else{
                if(!isNaN(source[i])){
                
                    list.push(Number(source[i]))
                }
            }
        }
        /**     In string literal     **/
        else if (inString) {
            /**     Closing literal     **/
            if (source[i] == specialTokens.string_literal_close) {
                let string = stringBuilder;
                scopePointer.push({
                    type: 'string_literal',
                    surce_start: i,
                    source_end: i + 1,
                    execute: () => engine.push(string)
                });
                inString = false;
                stringBuilder = '';
            /**     Character part of literal     **/
            } else {
                stringBuilder += source[i];
            }
        /**     Variable     **/
        } else if (specialTokens.variables 
                && (varFound = specialTokens.variables.find(v => v.setter == source[i] || v.getter == source[i]))) {
            let index = specialTokens.variables.indexOf(varFound);
            let statement = {
                type: 'variable',
                source_start: i,
                source_end: i + 1
            }
            /**     Setter     **/
            if (varFound.setter == source[i]) {
                statement.execute = () => {
                    engine.setVar(index);
                }
            /**     Getter     **/
            } else {
                statement.execute = () => {
                    engine.getVar(index);
                }
            }
            varFound = undefined;
            scopePointer.push(statement);
             /**     Start of string literal     **/
        }else if (source[i] == specialTokens.string_literal_open) {
          
            inString = true;
        }else if(!isNaN(source[i])){
            let number = source[i]
            if(!isNaN(source[i+1])){
                while(!isNaN(source[i+1])){
                    number += source[i + 1];
                    i++;
                }
            }
            scopePointer.push({
                type: 'number_literal',
                surce_start: i,
                source_end: i + 1,
                execute: () => engine.push(Number(number))
            });       
        } 
        /**     Single if     **/
        else if (source[i] == specialTokens.single_if) {
            scopePointer.push({
                type: 'conditional',
                surce_start: i,
                source_end: i + 2,
                true: atomExecutor(source[i+1]),
                false: () => {}
            });
            i++;
         /**     Reverse stack modificator     **/
        }  else if (source[i] == specialTokens.reverse_stack_flag) {
            scopePointer.push({
                type: 'set_flag',
                surce_start: i,
                source_end: i + 1,
                execute: () => engine.setReverse()
            });
        /**     Basic atom     **/
        } else {
            scopePointer.push({
                type: 'atom',
                surce_start: i,
                source_end: i + 1,
                execute: atomExecutor(source[i])
            });
        }

    }

    scopePointer.forEach(statement => { 
        if(statement.type === 'conditional')
            executeConditional(statement);
        else
            statement.execute();

        if (statement.type !== 'set_flag')
            engine.deleteModificators();
    })
}