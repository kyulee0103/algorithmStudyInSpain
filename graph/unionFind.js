// 유니온 파인드 (서로소 집합)
// 부모 노드를 합칠 때 일반적으로 더 작은 값으로 합치고 이를 union 이라고 함
// 인덱스는 노드 번호를 뜻하고, 요소는 부모 노드를 의미
// ex) n = 3 -> [empty, 1, 2, 3] 배열 생성
// 유니온 파인드 (서로소 집합)
// 부모 노드를 합칠 때 일반적으로 더 작은 값으로 합치고 이를 union 이라고 함
// 인덱스는 노드 번호를 뜻하고, 요소는 부모 노드를 의미
// ex) n = 3 -> [empty, 1, 2, 3] 배열 생성
function unionFindMain() {
    const arr = new Array(n + 1)

    const getParent = (arr, n) => {
        if (arr[n] === n) return n

        return (arr[n] = getParent(arr, arr[n]))
    }

    const unionParent = (arr, a, b) => {
        a = getParent(arr, a)
        b = getParent(arr, b)

        if (a < b) {
            // 작은 애가 부모 되도록
            arr[b] = a
        } else arr[a] = b
    }

    const findParent = (arr, a, b) => {
        a = getParent(arr, a)
        b = getParent(arr, b)
        if (a === b) {
            return true
        } else return false
    }

    for (let i = 1; i <= n; i += 1) {
        arr[i] = i
    }
    unionParent(arr, 1, 2)
    unionParent(arr, 2, 3)
    unionParent(arr, 4, 6)
    unionParent(arr, 6, 5)
}

// 크루스칼 -> 사실상 그리디 알고리즘

// 위상 정렬
