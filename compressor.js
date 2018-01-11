let source = '';
process.stdin.resume();
process.stdin.on('data', function(buf) { source += buf.toString(); });
process.stdin.on('end', function() {
    console.log(source);
});