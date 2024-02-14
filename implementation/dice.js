const makeCombination = (diceKey, selectNum) => {
    let results = []
    if (selectNum === 1) {
        return diceKey.map((x) => [x])
    }
    diceKey.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx + 1)
        let combinations = makeCombination(rest, selectNum - 1)
        let attached = combinations.map((x) => [fixed, ...x])
        results.push(...attached)
    })
    return results
}

const possibleSum = (diceList, selectNum, sum = 0, endPoint, results) => {
    if (selectNum === endPoint) {
        results.push(sum)
        return
    }
    for (let i = 0; i < 6; i += 1) {
        let currentDice = diceList[selectNum][i]
        possibleSum(diceList, selectNum + 1, sum + currentDice, endPoint, results)
    }
    return results
}

const getWinPossibility = (aChoice, diceObj, diceKey) => {
    let bChoice = diceKey.filter((v) => !aChoice.includes(v))
    let diceListA = []
    let diceListB = []
    for (let i = 0; i < aChoice.length; i += 1) {
        diceListA.push(diceObj[aChoice[i]])
        diceListB.push(diceObj[bChoice[i]])
    }
    let aPossibleSum = possibleSum(diceListA, 0, 0, aChoice.length, []).sort((a, b) => a - b)
    let bPossibleSum = possibleSum(diceListB, 0, 0, bChoice.length, []).sort((a, b) => a - b)
    let winCnt = 0
    let idx = 0
    for (let i = 0; i < aPossibleSum.length; i += 1) {
        while (aPossibleSum[i] > bPossibleSum[idx]) {
            idx += 1
        }
        winCnt += idx
    }
    return winCnt
}

function solution(dice) {
    let n = dice.length
    let diceObj = {}
    let diceKey = []
    for (let i = 0; i < dice.length; i += 1) {
        diceObj[i + 1] = dice[i]
        diceKey.push(i + 1)
    }
    let combinations = makeCombination(diceKey, parseInt(n / 2))
    let cntMax = 0
    let answer = []
    for (let i = 0; i < combinations.length; i += 1) {
        let winCnt = getWinPossibility(combinations[i], diceObj, diceKey)
        if (winCnt > cntMax) {
            cntMax = winCnt
            answer = combinations[i]
        }
    }
    return answer.sort((a, b) => a - b)
}
