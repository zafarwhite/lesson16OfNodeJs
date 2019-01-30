var a = 'Hello from file1';
var b = 'Another hello from file1';

var arr = [a, b];

// module.exports.a = a;//'module' -> exports from 'file1' in NodeJs
// module.exports.b = b;
module.exports = arr;
