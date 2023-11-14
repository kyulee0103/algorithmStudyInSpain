const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const [n, m] = input[0].split(' ').map((x) => parseInt(x))
let charts = []
let checkPoints = []
for (let i = 1; i <= n; i += 1) {
    charts.push(input[i].split(' ').map((x) => parseInt(x)))
}
for (let i = n + 1; i <= n + m; i += 1) {
    checkPoints.push(input[i].split(' ').map((x) => parseInt(x)))
}
const prefixRow = (arrBefore) => {
    let arrAfter = [arrBefore[0]]
    for (let i = 1; i < arrBefore.length; i += 1) {
        arrAfter[i] = arrAfter[i - 1] + arrBefore[i]
    }
    return arrAfter
}

const prefixCol = (arrBefore, n) => {
    let arrAfter = arrBefore.map((x) => x.slice())
    for (let i = 0; i < n; i += 1) {
        for (let j = 1; j < n; j += 1) {
            arrAfter[j][i] = arrBefore[j][i] + arrAfter[j - 1][i]
        }
    }
    return arrAfter
}

const soluton = (n, m, charts, checkPoints) => {
    let answers = []
    let prefixSum1 = []
    for (let i = 0; i < n; i += 1) {
        prefixSum1.push(prefixRow(charts[i]))
    }
    let prefixSum2 = prefixCol(prefixSum1, n)

    for (let i = 0; i < m; i += 1) {
        let [y1, x1, y2, x2] = checkPoints[i]
        let minus1
        let minus2
        let plus
        if (x1 !== 1 && y1 !== 1) {
            minus1 = prefixSum2[y2 - 1][x1 - 2]
            minus2 = prefixSum2[y1 - 2][x2 - 1]
            plus = prefixSum2[y1 - 2][x1 - 2]
        } else {
            if (x1 === 1) {
                minus1 = 0
                plus = 0
            } else {
                minus1 = prefixSum2[y2 - 1][x1 - 2]
            }
            if (y1 === 1) {
                minus2 = 0
                plus = 0
            } else {
                minus2 = prefixSum2[y1 - 2][x2 - 1]
            }
        }
        answers.push(prefixSum2[y2 - 1][x2 - 1] - minus1 - minus2 + plus)
    }
    console.log(answers.join('\n'))
    return
}

soluton(n, m, charts, checkPoints)
