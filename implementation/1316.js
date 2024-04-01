const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

const n = Number(input[0])
let words = []

for (let i = 1; i <= n; i += 1) {
    words.push(input[i].split(''))
}

const checkGroup = (word) => {
    let standardIdx = 0
    let currIdx = 1
    let visited = [word[0]]
    if (word.length === 1) {
        return true
    }
    while (currIdx < word.length) {
        if (word[currIdx] === word[standardIdx]) {
            currIdx += 1
            if (currIdx === word.length) {
                return true
            }
        } else {
            if (visited.includes(word[currIdx])) {
                return false
            } else {
                standardIdx = currIdx
                currIdx += 1
                if (standardIdx === word.length - 1) {
                    if (visited.includes(word[standardIdx])) {
                        return false
                    } else {
                        return true
                    }
                }
                visited.push(word[standardIdx])
            }
        }
    }
}

function solution(words) {
    let answer = 0
    for (let i = 0; i < words.length; i += 1) {
        if (checkGroup(words[i])) {
            answer += 1
        }
    }
    console.log(answer)
    return answer
}

solution(words)
