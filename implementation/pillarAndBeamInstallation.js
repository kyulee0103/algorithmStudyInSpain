const inTheList = (locationList, [x, y], needLocation) => {
    for (let i = 0; i < locationList.length; i += 1) {
        if (locationList[i][0] === x && locationList[i][1] === y) {
            if (needLocation) {
                return i
            } else {
                return true
            }
        }
    }
    return false
}

const checkBeam = (beamLocation, pillarLocation, [x, y]) => {
    if (
        inTheList(pillarLocation, [x, y - 1], false) ||
        inTheList(pillarLocation, [x + 1, y - 1], false) ||
        (inTheList(beamLocation, [x - 1, y], false) && inTheList(beamLocation, [x + 1, y], false))
    ) {
        return true
    }
    return false
}

const checkPillar = (beamLocation, pillarLocation, [x, y]) => {
    if (
        y === 0 ||
        inTheList(beamLocation, [x - 1, y], false) ||
        inTheList(beamLocation, [x, y], false) ||
        inTheList(pillarLocation, [x, y - 1], false)
    ) {
        return true
    }
    return false
}

const isEverythingOkay = (beamLocation, pillarLocation) => {
    for (let i = 0; i < beamLocation.length; i += 1) {
        if (!checkBeam(beamLocation, pillarLocation, beamLocation[i])) {
            return false
        }
    }
    for (let j = 0; j < pillarLocation.length; j += 1) {
        if (!checkPillar(beamLocation, pillarLocation, pillarLocation[j])) {
            return false
        }
    }
    return true
}
const finalSort = (beamLocation, pillarLocation) => {
    beamLocation.map((x) => x.push(1))
    pillarLocation.map((x) => x.push(0))
    let totalLocation = [...beamLocation, ...pillarLocation]
    totalLocation.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        if (a[2] !== b[2]) {
            return a[2] - b[2]
        }
    })
    return totalLocation
}

function solution(n, build_frame) {
    let beamLocation = []
    let pillarLocation = []
    for (let i = 0; i < build_frame.length; i += 1) {
        let [x, y, a, b] = build_frame[i]

        if (a === 0) {
            // pillar
            if (b === 0) {
                let currentIdx = inTheList(pillarLocation, [x, y], true)
                pillarLocation.splice(currentIdx, 1)
                if (!isEverythingOkay(beamLocation, pillarLocation)) {
                    pillarLocation.push([x, y])
                }
            }
            if (b === 1) {
                if (checkPillar(beamLocation, pillarLocation, [x, y])) {
                    pillarLocation.push([x, y])
                }
            }
        }
        if (a === 1) {
            // beam
            if (b === 0) {
                let currentIdx = inTheList(beamLocation, [x, y], true)
                beamLocation.splice(currentIdx, 1)
                if (!isEverythingOkay(beamLocation, pillarLocation)) {
                    beamLocation.push([x, y])
                }
            }
            if (b === 1) {
                if (checkBeam(beamLocation, pillarLocation, [x, y])) {
                    beamLocation.push([x, y])
                }
            }
        }
    }
    return finalSort(beamLocation, pillarLocation)
}

// build_frame : [가로좌표, 세로좌표, 기둥 = 0 / 보 = 1, 삭제 = 0 / 설치 = 1] + 순서대로.
// 보는 위치의 오른쪽에 기둥은 위쪽에
// 작업 수행 결과가 조건 만족하지 않는다면 해당 작업은 무시됨
//[[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]
// 보가 조건에 맞는지 확인하는 함수: checkBeam
// 기둥이 조건에 맞는지 확인하는 함수 : checkPillar
// 현재 존재하는 보들의 위치 리스트 : beamLocation
// 현재 존재하는 기둥들의 위치 리스트 : pillarLocation
// 마지막에 존재하는 값들 모두 모아서 sort해서 출력하기
