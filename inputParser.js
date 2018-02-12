module.exports.parseInput = function(input) 
{
    let lines = input.split(/\r\n?|\n/);
    let elements = lines.map(l => l.split(/\s/));
    let stack = elements.map(el => el.map(inEl => isNaN(parseFloat(inEl)) ? inEl : parseFloat(inEl)));
    return stack;
}