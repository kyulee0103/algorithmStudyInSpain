function solution(board, skill) {
    const r = board.length
    const c = board[0].length
    let skillPrefixSum = Array.from({length: r + 1}, () => Array(c + 1).fill(0))
    for (let i = 0; i < skill.length; i += 1) {
        let [type, r1, c1, r2, c2, degree] = skill[i]
        if (type === 1) {
            degree *= -1
        }
        skillPrefixSum[r1][c1] += degree
        skillPrefixSum[r1][c2 + 1] += -1 * degree
        skillPrefixSum[r2 + 1][c1] += -1 * degree
        skillPrefixSum[r2 + 1][c2 + 1] += degree
    }
    for (let i = 0; i < skillPrefixSum.length; i += 1) {
        for (let j = 1; j < skillPrefixSum[0].length; j += 1) {
            skillPrefixSum[i][j] += skillPrefixSum[i][j - 1]
        }
    }
    for (let i = 0; i < skillPrefixSum[0].length; i += 1) {
        for (let j = 1; j < skillPrefixSum.length; j += 1) {
            skillPrefixSum[j][i] += skillPrefixSum[j - 1][i]
        }
    }
    let answer = 0
    for (let i = 0; i < board.length; i += 1) {
        let survivor = board[i].map((val, idx) => val + skillPrefixSum[i][idx]).filter((x) => x >= 1)
        answer += survivor.length
    }
    return answer
}

solution(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    [
        [1, 1, 1, 2, 2, 4],
        [1, 0, 0, 1, 1, 2],
        [2, 2, 0, 2, 0, 100],
    ],
)
