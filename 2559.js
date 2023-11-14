const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const [n, k] = input[0].split(' ').map((x) => parseInt(x))
const testCases = input[1].split(' ').map((x) => Number(x))

const solution = (n, k, testCases) => {
    let prefixSum = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i += 1) {
        prefixSum[i + 1] = prefixSum[i] + testCases[i]
    }
    let maxSectionSum = prefixSum[k]
    for (let i = 1; i < n - k + 1; i += 1) {
        let newSectionSum = prefixSum[k + i] - prefixSum[i]
        if (newSectionSum > maxSectionSum) {
            maxSectionSum = newSectionSum
        }
    }
    console.log(maxSectionSum)
    return maxSectionSum
}

solution(n, k, testCases)
