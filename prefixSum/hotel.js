function solution(book_time) {
    let book_time_int = book_time.map((x) => x.map((time) => time.split(':').map((t) => parseInt(t, 10))))
    const changeToMin = (timeArr) => {
        for (let i = 0; i < timeArr.length; i += 1) {
            for (let j = 0; j < 2; j += 1) {
                let changeTime = timeArr[i][j][0] * 60 + timeArr[i][j][1]
                if (j == 1) {
                    changeTime += 10
                }
                timeArr[i][j] = changeTime
            }
        }
        return timeArr
    }
    book_time_int = changeToMin(book_time_int).sort((a, b) => a[0] - b[0])
    let roomArr = [0]
    for (let i = 0; i < book_time_int.length; i += 1) {
        let changed = false
        for (let j = 0; j < roomArr.length; j += 1) {
            if (book_time_int[i][0] >= roomArr[j]) {
                roomArr[j] = book_time_int[i][1]
                changed = true
                break
            }
        }
        if (!changed) {
            roomArr.push(book_time_int[i][1])
        }
        roomArr = roomArr.sort((a, b) => a - b)
    }
    return roomArr.length
}

//퇴실 시간 + 10분
// - 시간 모두 분으로 계산해서 int arr로 만들기
// - 먼저, 시작 시간 기준으로 정렬
// - 현재 존재하는 방의 끝나는 시점을 배열에 만들기
// - 새로운 방은 00:00 상태일것
// - 끝나는 시간 <= 시작 시간 -> 방 가능 else 방 추가
// - 퇴실시간 = 퇴실 시간 + 10로 설정
// - 하나씩 확인하면서 방 개수 구하기
