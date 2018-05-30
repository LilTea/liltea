module.exports.parseInput = function (input) {
    let lines = input.split(/\r\n?|\n/);
    let elements = lines.map(l => l.split(/\s/));
    let convertEl = inEl => isNaN(parseFloat(inEl)) ? inEl : parseFloat(inEl);
    let stack = elements.map(el => el.length == 1 ? convertEl(el[0]) : el.map(convertEl)).filter(s => s !== '');
    return stack;
}