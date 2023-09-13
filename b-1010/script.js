const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const lineone = lines[0].split(' ')
const linetwo = lines[1].split(' ')

let valorPrimeiraPeca = parseFloat(lineone[1])*parseFloat(lineone[2])
let valorSegundaPeca = parseFloat(linetwo[1]*parseFloat(linetwo[2]))

let valorTotalCompra = valorPrimeiraPeca+valorSegundaPeca

console.log('VALOR A PAGAR: R$ '+ valorTotalCompra.toFixed(2))