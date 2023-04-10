const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const total = Number(input[0])
const strArr = input[1].split("").map(Number)

let sum = 0
for (let i = 0; i < strArr.length; i++) {
    sum += strArr[i]
}

console.log(sum)