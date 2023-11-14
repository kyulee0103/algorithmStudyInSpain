const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const n = parseInt(input.shift())
const rowInputs = input.map((x) => x.split(''))
let colInputs = []
for (let i = 0; i < rowInputs.length; i += 1) {
    let line = []
    for (let j = 0; j < rowInputs.length; j += 1) {
        line.push(rowInputs[j][i])
    }
    colInputs.push(line)
}

const findMaxCandy = (inputArr) => {
    let totalMax = 0 // greatest value among each line max value
    for (let i = 0; i < inputArr.length; i += 1) {
        // i = which line
        let count = 1
        let checkingChance = true
        for (let j = 0; j < inputArr.length - 1; j += 1) {
            let comparePoint = inputArr[i][j]
            for (let k = 1; k < inputArr.length; k += 1) {
                if (comparePoint === inputArr[i][k]) {
                    count += 1
                } else {
                    if (checkingChance) {
                    }
                }
            }
        }
    }
    return
}

const solution = (n, rowInputs, colInputs) => {
    const rowMax = findMaxCandy(rowInputs)
    const colMax = findMaxCandy(colInputs)
    console.log(rowMax >= colMax ? rowMax : colMax)
    return
}

solution(n, rowInputs, colInputs)
