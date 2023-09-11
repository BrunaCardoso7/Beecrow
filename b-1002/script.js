const input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n')

const pi = 3.14159
const raio = parseFloat(lines[0])

let area = pi* Math.pow(raio, 2)

console.log('A='+area.toFixed(4))