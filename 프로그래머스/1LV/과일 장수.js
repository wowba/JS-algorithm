function solution(k, m, score) {

    let answer = 0
    
    const compare = (a, b) => {
        return b - a
    }
    score.sort(compare)
    
    let box = []
    for (let i = 0 ; i < score.length; i++) {
        box.push(score[i])
        if (box.length === m) {
            answer += box.pop() * m
            box = []
        }
    }
    
    return answer
}