function solution(sequence, k) {
    let prefixSum = Array(sequence.length).fill(0)
    prefixSum[0] = sequence[0]
    for (let i = 1; i < sequence.length; i++) {
        prefixSum[i] = sequence[i] + prefixSum[i - 1]
    }

    let properSum = []

    //
    for (let i = 0; i < prefixSum.length; i++) {
        if (prefixSum[i] === k) {
            properSum.push([0, i])
        } else if (prefixSum[i] > k) {
            let left = 0,
                right = i - 1
            while (left <= right) {
                let mid = Math.floor((left + right) / 2)
                let sum = prefixSum[i] - prefixSum[mid]
                if (sum === k) {
                    properSum.push([mid + 1, i])
                    break
                } else if (sum < k) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
    }
    //

    let min = Infinity
    let answer = []
    for (let i = 0; i < properSum.length; i++) {
        let length = properSum[i][1] - properSum[i][0]
        if (length < min) {
            min = length
            answer = properSum[i]
        }
    }
    return answer
}
