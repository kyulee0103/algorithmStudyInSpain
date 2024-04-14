const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')
const [n, m] = input
    .shift()
    .split(' ')
    .map((x) => Number(x))
let graph = input.map((x) => x.split(' ').map((y) => Number(y)))

function solution(n, m, graph) {
    return
}

solution(n, m, graph)
