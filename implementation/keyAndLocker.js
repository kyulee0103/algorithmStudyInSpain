function solution(key, lock) {
    var answer = true
    return answer
}

// 돌기와 돌기가 만날 수는 없음
// 자물쇠 영역 외에서는 상관 없음
// 자물쇠 영역 내에서는 열쇠 돌기와 자물쇠 홈이 정확히 맞아야함
// 엣지케이스 : lock에 0이 없는 경우 -> 무조건 true
// lock의 0이 되는 부분들간에 거리와 방향성 계산
// key에 있는 숫자 1을 하나씩 확인하면서 방향과 거리가 맞는지 계산하기
// 만약에 다 맞다면 남은 1이 lock의 바깥에 존재할지 확인하기
