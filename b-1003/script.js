const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const A = parseInt(lines[0])
const B = parseInt(lines[1])

let somar = A + B
console.log('SOMA = '+ somar)