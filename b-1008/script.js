const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const quantFuncionarios = parseInt(lines[0])
const horasTrabalhadas = parseInt(lines[1])
const salario_h = parseFloat(lines[2])

let salario = horasTrabalhadas*salario_h

console.log('NUMBER = '+ quantFuncionarios)
console.log('SALARY = U$ '+ salario.toFixed(2))