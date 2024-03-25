// baekjun 2003

const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const [n, m] = input[0].split(' ').map((x) => Number(x))
const aList = input[1].split(' ').map((x) => Number(x))

function solution(n, m, aList) {
    let start = 0
    let end = 0
    let answer = 0
    let currSum = aList[0]
    while (start < n) {
        if (currSum < m) {
            end += 1
            currSum += aList[end]
        } else if (currSum === m) {
            answer += 1
            currSum -= aList[start]
            start += 1
            if (end === n - 1) {
                break
            }
        } else {
            currSum -= aList[start]
            start += 1
        }
    }
    console.log(answer)
    return answer
}

solution(n, m, aList)

// 투포인터로 풀어야될거같은데
// 구간의 합에 대해서 물어보면 누적합 먼저 생각해보는건 ㅇㅋ. 근데 너무 복잡하다면 투포인터도 생각해보자.
