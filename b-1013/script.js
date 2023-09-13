const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

const line = lines[0].split(' ')

const B = parseInt(line[1])
const A = parseInt(line[0])
const C = parseInt(line[2])

let maiorAB = (A+B+C*(A-B))/2

console.log(parseInt(maiorAB))

// if(maiorAB>C){
//     console.log('C' + ' eh o maior')
// }else {
//     console.log('a|b' + ' eh o maior')

// }




