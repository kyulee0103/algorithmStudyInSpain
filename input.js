//  입력 한줄일 때,
const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim()

const solution = (input) => {
    const answer = ''
    return answer
}

solution(input)

// 입력 여러줄일 때,
// const fs = require('fs')
// const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
// const input = fs.readFileSync(file).toString().trim().split('\n')
// const testCases = Number(input[0])

// const solution = (input) => {
//     const answer = ''
//     return answer
// }

// Array.from({length: testCases})
//     .fill(0)
//     .map((_, index) => {
//         const currentInput = input[index + 1]
//         const result = solution(currentInput)
//         console.log(result)
//     })
