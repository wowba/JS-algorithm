function solution(n, words) {
    let map = new Map()
    let idx
    let flag = true
    for (let i = 0; i < words.length - 1; i++) {
        if (map.has(words[i])) {
            idx = i + 1
            flag = false
            break
        }
        if (words[i].at(-1) !== words[i + 1][0]) {
            idx = i + 2
            flag = false
            break
        }
        map.set(words[i], 0)
    }
    
    if (flag) {
        if (map.has(words.at(-1))) {
            idx = words.length
            flag = false
        }
    }

    if (flag) {
        return [0,0]
    } else {
        return [idx % n === 0 ? n : idx % n, idx % n === 0 ? Math.floor(idx / n) : Math.floor(idx / n) + 1]
    }
    
}