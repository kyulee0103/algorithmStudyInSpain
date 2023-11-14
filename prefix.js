const array = [3, 6, 4, 8, 1, 2]
const n = array.length
let prefixSum = new Array(n + 1).fill(0)
console.log(prefixSum)

for (let i = 0; i < n; i += 1) {
    prefixSum[i + 1] = prefixSum[i] + array[i]
}

console.log(prefixSum)
