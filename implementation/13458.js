// 총감독관은 무조건 1명
// 총감독관 감독 가능 학생 수 = b
// 부감독관은 여러 명 가능, 감독 가능 학생 수 = c
// 필요한 감독관의 수 최솟값 리턴

// input이 커서 그리디로 풀 가능성이 보임

const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')
const n = parseInt(input[0])
let candidates = input[1].split(' ').map((x) => parseInt(x))
let [b, c] = input[2].split(' ').map((x) => parseInt(x))

function solution(n, candidates, b, c) {
    let supervisor = n
    candidates = candidates.map((x) => x - b)
    for (let i = 0; i < n; i += 1) {
        if (candidates[i] > 0) {
            let value = parseInt(candidates[i] / c)
            let remains = candidates[i] % c
            if (remains > 0) {
                value += 1
            }
            supervisor += value
        }
    }
    console.log(supervisor)
    return supervisor
}
solution(n, candidates, b, c)
