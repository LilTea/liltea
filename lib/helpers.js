exports.getInput = function(callback) {
    let string = '';
    process.stdin.resume();
    process.stdin.on('data', buf => string += buf.toString() );
    process.stdin.on('end', _=>callback(string));
}