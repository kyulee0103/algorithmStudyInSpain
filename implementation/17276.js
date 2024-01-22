//baekjun 17276 8:35
const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')
const t = parseInt(input.shift())
let totalArray = []
for (let i = 0; i < t; i += 1) {
    let oneSetArray = []
    let [n, d] = input
        .shift()
        .split(' ')
        .map((x) => Number(x))

    for (let j = 0; j < n; j += 1) {
        oneSetArray.push(input[j].split(' '))
    }
    input = input.slice(n)
    d = Number(d)
    d > 0 ? oneSetArray.unshift(Math.floor(d / 45)) : oneSetArray.unshift(Math.floor(d / 45))
    totalArray.push(oneSetArray)
}
// 같은 크기의 배열을 만들되 전부 0으로 fill
// 1. X의 주 대각선을 ((1,1), (2,2), …, (n, n)) 가운데 열 ((n+1)/2 번째 열)로 옮긴다.
// 2. X의 가운데 열을 X의 부 대각선으로 ((n, 1), (n-1, 2), …, (1, n)) 옮긴다.
// 3. X의 부 대각선을 X의 가운데 행 ((n+1)/2번째 행)으로 옮긴다.
// 4. X의 가운데 행을 X의 주 대각선으로 옮긴다.
// 5. "0" 인 부분은 기존의 값과 같은 값으로 넣어주기.
// return 새로 만들어진 배열

const clockDir = (arrayX) => {
    return
}

const oppositeClockDir = (arrayX) => {
    return
}

function solution(t, totalArray) {
    return
}

solution(t, totalArray)
