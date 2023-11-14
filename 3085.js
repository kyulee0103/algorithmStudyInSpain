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

const reverseArr = (beforeArr) => {
    let newArr = []
    for (let i = 0; i < beforeArr.length; i += 1) {
        let newLine = []
        for (let j = beforeArr.length - 1; j >= 0; j -= 1) {
            newLine.push(beforeArr[i][j])
        }
        newArr.push(newLine)
    }
    return newArr
}

const findMaxCandy = (inputArr) => {
    let lineMax = 0
    for (let i = 0; i < inputArr.length; i += 1) {
        for (let j = 0; j < inputArr.length - 1; j += 1) {
            let count = 1
            let checkingChance = true
            for (let k = j + 1; k < inputArr.length; k += 1) {
                // console.log(`i = ${i}, j = ${j}, k = ${k} count = ${count} checkingChance = ${checkingChance}`)
                if (inputArr[i][j] === inputArr[i][k]) {
                    count += 1
                    if (k === inputArr.length - 1) {
                        if (count > lineMax) {
                            lineMax = count
                        }
                        // console.log('1 break here with count : ', count)
                        break
                    }
                    continue
                } else if (checkingChance) {
                    // 여기서 각 줄별로 예외 처리 필요
                    // if (k === j + 1) {
                    //     //시작 지점에서만 자기 자신의 위치에서 변경하는거 하나만 추가하기
                    //     if (i === 0){
                    //         if (inputArr[i + 1][j] === inputArr[i][k])
                    //     }
                    //     else if (i === inputArr.length - 1){

                    //     }
                    //     else {

                    //     }
                    // }
                    if (i === 0) {
                        // console.log('******** ', inputArr[i + 1][k], inputArr[i][j])
                        if (inputArr[i + 1][k] === inputArr[i][j]) {
                            // console.log('여기 들어옴??')
                            checkingChance = false
                            count += 1
                            if (k === inputArr.length - 1) {
                                if (count > lineMax) {
                                    lineMax = count
                                }
                                // console.log('2 i break here with count : ', count)
                                break
                            }
                            continue
                        } else {
                            if (count > lineMax) {
                                lineMax = count
                            }
                            // console.log('3 i break here with count : ', count)
                            break
                        }
                    } else if (i === inputArr.length - 1) {
                        if (inputArr[i - 1][k] === inputArr[i][j]) {
                            checkingChance = false
                            count += 1
                            if (k === inputArr.length - 1) {
                                if (count > lineMax) {
                                    lineMax = count
                                }
                                // console.log('1 break here with count : ', count)
                                break
                            }
                            continue
                        } else {
                            if (count > lineMax) {
                                lineMax = count
                            }
                            // console.log('4 i break here with count : ', count)
                            break
                        }
                    } else {
                        // console.log('******** ', inputArr[i + 1][k], inputArr[i][j])
                        if (inputArr[i + 1][k] === inputArr[i][j] || inputArr[i - 1][k] === inputArr[i][j]) {
                            // console.log('여기야??????????????')
                            checkingChance = false
                            count += 1
                            if (k === inputArr.length - 1) {
                                if (count > lineMax) {
                                    lineMax = count
                                }
                                // console.log('1 break here with count : ', count)
                                break
                            }
                            continue
                        } else {
                            if (count > lineMax) {
                                lineMax = count
                            }
                            // console.log('5 i break here with count : ', count)
                            break
                        }
                    }
                } else {
                    if (count > lineMax) {
                        lineMax = count
                    }
                    // console.log('i break here with count : ', count)
                    break
                }
            }
            //console.log('lineMax is : ', lineMax)
        }
    }
    return lineMax
}

const solution = (n, rowInputs, colInputs) => {
    const rowMax = findMaxCandy(rowInputs)
    const colMax = findMaxCandy(colInputs)
    const rowMax2 = findMaxCandy(reverseArr(rowInputs))
    const colMax2 = findMaxCandy(reverseArr(colInputs))
    console.log(Math.max(rowMax, colMax, rowMax2, colMax2))
    return
}

solution(n, rowInputs, colInputs)
