//baekjun 11441
const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const n = parseInt(input.shift())
const aList = input
    .shift()
    .split(' ')
    .map((x) => parseInt(x))
const m = parseInt(input.shift())
let testArray = []
for (let i = 0; i < m; i += 1) {
    testArray.push(input[i].split(' ').map((x) => parseInt(x)))
}

function solution(n, aList, m, testArray) {
    let prefixSum = [0]
    for (let i = 0; i < n; i += 1) {
        prefixSum[i + 1] = prefixSum[i] + aList[i]
    }
    let answer = []
    for (let j = 0; j < m; j += 1) {
        answer.push(prefixSum[testArray[j][1]] - prefixSum[testArray[j][0] - 1])
    }
    console.log(answer.join('\n'))
    return
}

solution(n, aList, m, testArray)
