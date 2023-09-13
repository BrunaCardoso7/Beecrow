const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const km = parseInt(lines[0])
const km_l = parseFloat(lines[1])

const consumoMedio = km/km_l
console.log(consumoMedio.toFixed(3)+' km/l')
