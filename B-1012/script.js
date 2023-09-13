const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const row = lines[0].split(' ')
const A = parseFloat(row[0])
const B = parseFloat(row[1])
const C = parseFloat(row[2])

const PI = 3.14159

let areaTriaguloRet = (A*C)/2
console.log('TRIANGULO: '+areaTriaguloRet.toFixed(3))
let areaCirculo = PI*Math.pow(C, 2)
console.log('CIRCULO: '+areaCirculo.toFixed(3))
let areaTrapezio = (A+B)*C/2
console.log('TRAPEZIO: '+areaTrapezio.toFixed(3))
let areaQuadrado = Math.pow(B, 2)
console.log('QUADRADO: '+areaQuadrado.toFixed(3))
let areaRetangulo = A*B
console.log('RETANGULO: '+areaRetangulo.toFixed(3))