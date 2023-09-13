const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const valor1 = parseInt(lines[0])
const valor2 = parseInt(lines[1])

let prod = valor1 * valor2

console.log('PROD = '+ prod)