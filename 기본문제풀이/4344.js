const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const total = Number(input[0])

for (let i = 1; i <= total; i++) {
    let data = input[i].split(" ").map((item) => Number(item))
    let students = data[0]
    let sum = 0
    for (let j = 1; j <= students; j++){
        sum += data[j]
    }
    let average = sum / students
    let cnt = 0
    for (let j = 1; j <= students; j++) {
        if (data[j] > average) {
            cnt += 1
        }
    }
    console.log(`${(cnt / students * 100).toFixed(3)}%`)
}