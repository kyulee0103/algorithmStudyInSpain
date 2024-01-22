const rangeCheck = ([type, r1, c1, r2, c2, degree], [r3, c3]) => {
    let inRange = false
    if (r3 >= r1 && r3 <= r2 && c3 >= c1 && c3 <= c2) {
        inRange = true
    }
    return inRange
}

function solution(board, skill) {
    var answer = 0
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length; j += 1) {
            for (let k = 0; k < skill.length; k += 1) {
                if (rangeCheck(skill[k], [i, j])) {
                    if (skill[k][0] === 1) {
                        board[i][j] -= skill[k][5]
                    } else {
                        board[i][j] += skill[k][5]
                    }
                }
            }
            if (board[i][j] >= 1) {
                answer += 1
            }
        }
    }
    return answer
}

solution(
    [
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
    ],
    [
        [1, 0, 0, 3, 4, 4],
        [1, 2, 0, 2, 3, 2],
        [2, 1, 0, 3, 1, 2],
        [1, 0, 1, 3, 3, 1],
    ],
)
