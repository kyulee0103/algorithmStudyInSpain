const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

const n = Number(input[0])
let words = []

for (let i = 1; i <= n; i += 1) {
    words.push(input[i].split(''))
}

function solution(words) {
    let answer = 0
    for (let i = 0; i < words.length; i += 1) {
        let visited = [words[i][0]]
        if (words[i].length === 1) {
            answer += 1
            continue
        }
        let currIdx = 1
        let checkword = words[i][0]
        let finished = true
        while (currIdx < words[i].length) {
            let currentWord = words[i][currIdx]
            console.log('current arr : ', words[i])
            console.log('visited : ', visited)
            console.log('check : ', checkword)
            console.log('current word : ', currentWord)
            if (checkword === currentWord) {
                currIdx += 1
            } else {
                if (visited.includes(currentWord)) {
                    finished = false
                    break
                } else {
                    visited.push(currentWord)
                    checkword = currentWord
                    currIdx += 1
                }
            }
        }
    }
    console.log(answer)
    return answer
}

solution(words)
