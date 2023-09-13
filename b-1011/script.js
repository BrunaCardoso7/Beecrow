const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const R = lines[0]
const PI = 3.14159

let volume = (4/3.0)*PI*Math.pow(R, 3)

console.log('VOLUME = '+volume.toFixed(3))