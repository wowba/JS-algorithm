const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const testCases = Number(input[0])
let count = 0

for (let i = 1; i <= testCases; i++) {
    
    const set = new Set(input[i].split(""))
    
    let charArr = input[i].split("")
    const dup = []
    for (let j = 0; j < charArr.length - 1; j++) {
        let cur = charArr[j]
        let next = charArr[j + 1]
        if (cur == next) {
            dup.push(j)
        }
    }
    
    for (let j = 0; j < dup.length; j++) {
        charArr[dup[j]] = ""
    }
    charArr = charArr.join("").split("")
    
    if (set.size == charArr.length) {
        count += 1
    }
}

console.log(count)

