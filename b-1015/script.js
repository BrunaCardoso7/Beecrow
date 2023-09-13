const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const retaX = lines[0].split(' ')
const x1 = parseFloat(retaX[0])
const x2 = parseFloat(retaX[1])

const retaY = lines[1].split(' ')
const y1 = parseFloat(retaY[0])
const y2 = parseFloat(retaY[1])

let distancia = Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2))
console.log(distancia.toFixed(4))