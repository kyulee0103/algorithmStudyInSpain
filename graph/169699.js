// 한쪽 방향으로 쭉 가는 함수
const slideResult = (boardArr, currLocation, dir) => {
    let [x, y] = currLocation
    if (dir === 0) {
        // up
        if (x === 0 || boardArr[x - 1][y] === 1) {
            return false
        } else {
            while (x !== 0 && boardArr[x - 1][y] === 0) {
                x -= 1
            }
            return [x, y]
        }
    } else if (dir === 1) {
        // right
        if (y === boardArr[0].length - 1 || boardArr[x][y + 1] === 1) {
            return false
        } else {
            while (y !== boardArr[0].length - 1 && boardArr[x][y + 1] === 0) {
                y += 1
            }
            return [x, y]
        }
    } else if (dir === 2) {
        // down
        if (x === boardArr.length - 1 || boardArr[x + 1][y] === 1) {
            return false
        } else {
            while (x !== boardArr.length - 1 && boardArr[x + 1][y] === 0) {
                x += 1
            }
            return [x, y]
        }
    } else if (dir === 3) {
        // left
        if (y === 0 || boardArr[x][y - 1] === 1) {
            return false
        } else {
            while (y !== 0 && boardArr[x][y - 1] === 0) {
                y -= 1
            }
            return [x, y]
        }
    }
}

const bfs = (boardArr, start, target, visited) => {
    let needToCheck = [[...start, 0]]
    while (needToCheck.length > 0) {
        let [beforeX, beforeY, cnt] = needToCheck.shift()
        for (let i = 0; i < 4; i += 1) {
            let newLocation = slideResult(boardArr, [beforeX, beforeY], i)
            if (!newLocation) {
                continue
            } else {
                let [x, y] = newLocation
                if (visited[x][y]) {
                    continue
                } else {
                    if (x === target[0] && y === target[1]) {
                        return cnt + 1
                    }
                    visited[x][y] = true
                    needToCheck.push([...newLocation, cnt + 1])
                }
            }
        }
    }
    return -1
}

function solution(board) {
    let boardArr = []
    let target
    let start
    for (let i = 0; i < board.length; i += 1) {
        let line = []
        for (let j = 0; j < board[i].length; j += 1) {
            if (board[i][j] === '.') {
                line.push(0)
            } else if (board[i][j] === 'D') {
                line.push(1)
            } else if (board[i][j] === 'G') {
                target = [i, j]
                line.push(0)
            } else if (board[i][j] === 'R') {
                start = [i, j]
                line.push(0)
            }
        }
        boardArr.push(line)
    }
    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false))
    let answer = bfs(boardArr, start, target, visited)
    return answer
}
