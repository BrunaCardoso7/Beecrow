const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const vendedor = lines[0]
const salarioFixo = parseFloat(lines[1])
const vendas  = parseFloat(lines[2])*15/100

let total = salarioFixo+vendas

console.log('TOTAL = R$ '+ total.toFixed(2))
