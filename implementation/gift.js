function solution(friends, gifts) {
    let giftList = gifts.map((gift) => gift.split(' '))
    let giftReceiver = {}
    let presentRatio = {}
    let giftCount = {}
    for (let i = 0; i < friends.length; i += 1) {
        let newObj = {}
        presentRatio[friends[i]] = 0
        giftCount[friends[i]] = 0
        for (let j = 0; j < friends.length; j += 1) {
            newObj[friends[j]] = 0
        }
        giftReceiver[friends[i]] = newObjㄴ
    }

    for (let gift = 0; gift < giftList.length; gift += 1) {
        let giver = giftList[gift][0]
        let receiver = giftList[gift][1]
        giftReceiver[receiver][giver] += 1
        presentRatio[receiver] -= 1
        presentRatio[giver] += 1
    }
    for (let i = 0; i < friends.length; i += 1) {
        for (let j = 0; j < friends.length; j += 1) {
            let friend = giftReceiver[friends[i]][friends[j]]
            let compared = giftReceiver[friends[j]][friends[i]]
            if (friend < compared) {
                giftCount[friends[i]] += 1
            } else if (friend > compared) {
                giftCount[friends[j]] += 1
            } else {
                if (presentRatio[friends[i]] < presentRatio[friends[j]]) {
                    giftCount[friends[j]] += 1
                } else if (presentRatio[friends[i]] > presentRatio[friends[j]]) {
                    giftCount[friends[i]] += 1
                }
            }
        }
    }

    let maxCount = Math.max(...Object.values(giftCount))
    return maxCount / 2
}

solution(
    ['joy', 'brad', 'alessandro', 'conan', 'david'],
    ['alessandro brad', 'alessandro joy', 'alessandro conan', 'david alessandro', 'alessandro david'],
)
