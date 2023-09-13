const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const nota1 = parseFloat(lines[0])*3.5.toFixed(1)
const nota2 = parseFloat(lines[1])*7.5.toFixed(1)

let media = (nota1 + nota2)/11

console.log('MEDIA = '+ media.toFixed(5))