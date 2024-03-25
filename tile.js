function solution(sequence, k) {
    let prefixSum = Array(sequence.length).fill(0)
    prefixSum[0] = sequence[0]
    for (let i = 1; i < sequence.length; i += 1) {
        prefixSum[i] = sequence[i] + prefixSum[i - 1]
    }
    let properSum = []

    for (let i = 0; i < prefixSum.length; i += 1) {
        if (prefixSum[i] === k) {
            properSum.push([0, i])
        }
        if (prefixSum[i] > k) {
            let left = 0
            let right = i - 1
            let find = prefixSum[i] - k
            while (left <= right) {
                let mid = Math.floor((left + right) / 2)
                if (prefixSum[mid] === find) {
                    properSum.push([mid + 1, i])
                    break
                }
                if (prefixSum[mid] > find) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
    }

    let min = Infinity
    let answer = []
    for (let i = 0; i < properSum.length; i += 1) {
        if (properSum[i][1] - properSum[i][0] < min) {
            min = properSum[i][1] - properSum[i][0]
            answer = properSum[i]
        }
    }
    return answer
}
