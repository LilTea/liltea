module.exports.runLilTea = function(source, engine, lil2jsToken) 
{
    source.split('').forEach(lilToken => {
        engine[lil2jsToken(lilToken)]();
        engine.deleteModificators();
    });
}