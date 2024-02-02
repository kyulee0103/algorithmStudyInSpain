const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')
const n = parseInt(input[0])
let board = Array.from({length: n}, () => Array(n).fill(0))
const k = parseInt(input[1])
let changeMoment = []
for (let i = 2; i < k + 2; i += 1) {
    let [row, col] = input[i].split(' ').map((x) => parseInt(x))
    board[row - 1][col - 1] = 1
}
for (let j = k + 3; j < input.length; j += 1) {
    let [sec, dir] = input[j].split(' ')
    dir === 'L' ? (dir = -1) : (dir = +1)
    changeMoment.push([parseInt(sec), dir])
}

const checkBreakCondition = (snake, currentHead, n) => {
    if (snake.filter((x) => x[0] === currentHead[0] && x[1] === currentHead[1]).length > 0) {
        return true
    }
    if (currentHead[0] < 0 || currentHead[0] >= n || currentHead[1] < 0 || currentHead[1] >= n) {
        return true
    }
    return false
}

const checkCurrentDir = (changeMoment, currentTime, currentDir) => {
    if (changeMoment.length !== 0) {
        let latestTime = changeMoment[0][0]
        if (currentTime === latestTime) {
            currentDir += changeMoment[0][1]
            changeMoment.shift()
            if (currentDir < 0) {
                currentDir += 4
            }
            if (currentDir === 4) {
                currentDir = 0
            }
        }
    }
    return [currentDir, changeMoment]
}

function solution(board, changeMoment) {
    const dir = [
        [0, 1], //동
        [1, 0], //남
        [0, -1], //서
        [-1, 0], //북
    ]
    let time = 0
    let snake = [[0, 0]]
    let currentDir = 0
    while (true) {
        time += 1
        let newHead = snake[0].map((v, idx) => v + dir[currentDir][idx])
        ;[currentDir, changeMoment] = checkCurrentDir(changeMoment, time, currentDir)
        if (checkBreakCondition(snake, newHead, board.length)) {
            break
        }
        snake.unshift(newHead)
        if (board[newHead[0]][newHead[1]] === 1) {
            board[newHead[0]][newHead[1]] = 0
        } else {
            snake.pop()
        }
    }
    return time
}
solution(board, changeMoment)

// 현재 방향성에 따라서 L이나 D가 들어
// 방향 전환 좌표값 배열. 근데 뱀의 제일 끝 몸통 부분이 방향 전환 좌표를 지나가면 해당 좌표는 배열에서 빼기.
// 방향 전환 좌표를 지나가면 방향성에 따라서 좌표값 움직이기
//

// 벽이나 자기 자신한테 부딪히면 게임 종료
// ㅇ ㅇ ㅇ ㅇ ㅇ ㅇ
// ㅇ ㅇ ㅇ ㅇ ㅅ ㅇ
// ㅇ ㅇ ㅇ ㅅ ㅇ ㅇ
// ㅇ ㅇ ㅇ ㅇ ㅇ ㅇ
// ㅇ ㅇ ㅅ ㅇ ㅇ ㅇ
// ㅇ ㅇ ㅇ ㅇ ㅇ ㅇ
