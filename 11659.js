const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const [n, m] = input[0].split(' ').map((x) => parseInt(x))
const givenArr = input[1].split(' ').map((x) => parseInt(x))
let exampleList = new Array()
for (let i = 0; i < m; i += 1) {
    exampleList.push(input[i + 2].split(' '))
}
const solution = (n, m, givenArr, exampleList) => {
    let answer = []
    let prefixSum = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i += 1) {
        prefixSum[i + 1] = prefixSum[i] + givenArr[i]
    }
    for (let i = 0; i < m; i += 1) {
        answer.push(prefixSum[parseInt(exampleList[i][1])] - prefixSum[parseInt(exampleList[i][0]) - 1])
    }
    console.log(answer.join('\n'))
    return
}

solution(n, m, givenArr, exampleList)
