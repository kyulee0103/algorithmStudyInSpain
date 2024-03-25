const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const [n, s] = input[0].split(' ').map((x) => Number(x))
const numList = input[1].split(' ').map((x) => Number(x))

function solution(n, s, numList) {
    let start = 0
    let end = 0
    let minLen = Infinity
    let currSum = numList[0]
    // 전체 다 본 경우
    while (end < n && start < n) {
        if (currSum >= s) {
            let currLen = end - start + 1
            if (currLen < minLen) {
                minLen = currLen
            }
            currSum -= numList[start]
            start += 1
        } else {
            end += 1
            currSum += numList[end]
        }
    }
    if (minLen === Infinity) {
        minLen = 0
    }
    console.log(minLen)
    return minLen
}

solution(n, s, numList)
