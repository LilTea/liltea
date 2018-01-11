const yaml = require('js-yaml');
const fs = require('fs');

try {
    var doc = yaml.safeLoad(fs.readFileSync('./tokens.yaml', 'utf8'));
    console.log(doc);
} catch (e) {
    console.log(e);
}

let source = '';
process.stdin.resume();
process.stdin.on('data', function (buf) { source += buf.toString(); });
process.stdin.on('end', function () {
    console.log(source);
});