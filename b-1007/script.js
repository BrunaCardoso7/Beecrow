const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const A = parseInt(lines[0])
const B = parseInt(lines[1])
const C = parseInt(lines[2])
const D = parseInt(lines[3])

let DIFERENCA = (A * B - C * D)
 
console.log('DIFERENCA = '+ DIFERENCA)
