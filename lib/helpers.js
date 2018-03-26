exports.getInput = function (callback) {
    let string = '';
    
    var readline = require('readline');
    process.stdin.setEncoding('utf-8');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '',
        terminal: !!process.stdin.isTTY
    });

    rl.on('line', buf => string += buf + '\n');
    rl.on('close', _ => {
        callback(string.substr(0, string.length - 1))
    });
    /*process.stdin.resume();
    process.stdin.on('data', buf => string += buf.toString() );
    process.stdin.on('end', _=>callback(string));*/
}

exports.getInputFromFile = function (path) {
    return require('fs').readFileSync(path).toString();
}