function solution(cards1, cards2, goal) {
    // card1 index
    let i = 0
    // card2 index
    let j = 0
    let answer = "Yes"
    for (const word of goal) {
        let isExist = false
        if (cards1[i] === word) {
            i++
            isExist = true
            continue
        }
        if (cards2[j] === word) {
            j++
            isExist = true
            continue
        }
        if (!isExist) {
            answer = "No"
            break
        }
    }
    return answer
}