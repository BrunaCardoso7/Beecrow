const input = require('fs').readFileSync('stdin', 'utf8')

let entradas = input.split('\n')

const A = parseInt(entradas[0])
const B = parseInt(entradas[1])

let X = A + B
console.log ('SOMA ='+X)