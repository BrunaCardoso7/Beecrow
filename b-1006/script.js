const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const A = parseFloat(lines[0])*2
const B = parseFloat(lines[1])*3
const C = parseFloat(lines[2])*5

let media = (A+B+C)/10

console.log('MEDIA = '+ media.toFixed(1))