const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const totalNum = Number(input[0])
let answer = ""

for (let i = 1; i <= totalNum; i++) {
    const [a, b] = input[i].split(" ").map((str) => Number(str))
    answer += a + b
    answer += "\n"
}
console.log(answer)