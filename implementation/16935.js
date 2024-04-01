const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')
let board = []
const [n, m, r] = input[0].split(' ').map((x) => Number(x))
for (let i = 1; i <= n; i += 1) {
    board.push(input[i].split(' ').map((x) => Number(x)))
}
const calcNum = input[input.length - 1].split(' ').map((x) => Number(x))

const calcOne = (board) => {
    let newBoard = []
    for (let i = board.length - 1; i >= 0; i -= 1) {
        newBoard.push(board[i])
    }
    return newBoard
}

const calcTwo = (board) => {
    let newBoard = []
    for (let i = 0; i < board.length; i += 1) {
        let line = []
        for (let j = board[i].length - 1; j >= 0; j -= 1) {
            line.push(board[i][j])
        }
        newBoard.push(line)
    }
    return newBoard
}

const calcThree = (board) => {
    let newBoard = []
    for (let i = 0; i < board[0].length; i += 1) {
        let line = []
        for (let j = board.length - 1; j >= 0; j -= 1) {
            line.push(board[j][i])
        }
        newBoard.push(line)
    }
    return newBoard
}

const calcFour = (board) => {
    let newBoard = []
    for (let i = board[0].length - 1; i >= 0; i -= 1) {
        let line = []
        for (j = 0; j < board.length; j += 1) {
            line.push(board[j][i])
        }
        newBoard.push(line)
    }
    return newBoard
}

const dividePart = (board) => {
    let group1 = []
    let group2 = []
    let group3 = []
    let group4 = []

    for (let i = 0; i < board.length / 2; i += 1) {
        for (let j = 0; j < board[0].length / 2; j += 1) {
            group1.push(board[i][j])
        }
    }

    for (let i = 0; i < board.length / 2; i += 1) {
        for (let j = board[0].length / 2; j < board[0].length; j += 1) {
            group2.push(board[i][j])
        }
    }

    for (let i = board.length / 2; i < board.length; i += 1) {
        for (let j = board[0].length / 2; j < board[0].length; j += 1) {
            group3.push(board[i][j])
        }
    }

    for (let i = board.length / 2; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length / 2; j += 1) {
            group4.push(board[i][j])
        }
    }

    return [group1, group2, group3, group4]
}

const calcFive = (board) => {
    let [group1, group2, group3, group4] = dividePart(board)
    let newBoard = Array.from({length: board.length}, () => Array(board[0].length).fill(0))

    for (let i = 0; i < board.length / 2; i += 1) {
        for (let j = 0; j < board[0].length / 2; j += 1) {
            newBoard[i][j] = group4[0]
            group4.shift()
        }
    }

    for (let i = 0; i < board.length / 2; i += 1) {
        for (let j = board[0].length / 2; j < board[0].length; j += 1) {
            newBoard[i][j] = group1[0]
            group1.shift()
        }
    }

    for (let i = board.length / 2; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length / 2; j += 1) {
            newBoard[i][j] = group3[0]
            group3.shift()
        }
    }

    for (let i = board.length / 2; i < board.length; i += 1) {
        for (let j = board[0].length / 2; j < board[0].length; j += 1) {
            newBoard[i][j] = group2[0]
            group2.shift()
        }
    }

    return newBoard
}

const calcSix = (board) => {
    let [group1, group2, group3, group4] = dividePart(board)
    let newBoard = Array.from({length: board.length}, () => Array(board[0].length).fill(0))

    for (let i = 0; i < board.length / 2; i += 1) {
        for (let j = 0; j < board[0].length / 2; j += 1) {
            newBoard[i][j] = group2[0]
            group2.shift()
        }
    }

    for (let i = 0; i < board.length / 2; i += 1) {
        for (let j = board[0].length / 2; j < board[0].length; j += 1) {
            newBoard[i][j] = group3[0]
            group3.shift()
        }
    }

    for (let i = board.length / 2; i < board.length; i += 1) {
        for (let j = board[0].length / 2; j < board[0].length; j += 1) {
            newBoard[i][j] = group4[0]
            group4.shift()
        }
    }

    for (let i = board.length / 2; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length / 2; j += 1) {
            newBoard[i][j] = group1[0]
            group1.shift()
        }
    }

    return newBoard
}

function solution(board, calcNum) {
    for (let i = 0; i < calcNum.length; i += 1) {
        if (calcNum[i] === 1) {
            board = calcOne(board)
        } else if (calcNum[i] === 2) {
            board = calcTwo(board)
        } else if (calcNum[i] === 3) {
            board = calcThree(board)
        } else if (calcNum[i] === 4) {
            board = calcFour(board)
        } else if (calcNum[i] === 5) {
            board = calcFive(board)
        } else if (calcNum[i] === 6) {
            board = calcSix(board)
        }
    }
    for (let i = 0; i < board.length; i += 1) {
        console.log(board[i].join(' '))
    }
    return
}

solution(board, calcNum)
