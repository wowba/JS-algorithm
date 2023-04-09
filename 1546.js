const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const total = Number(input[0])
const arr = input[1].split(" ").map(Number)

const max = Math.max(...arr)
//모든 점수를 점수/M*100으로 고쳤다.

const newArr = arr.map((score) => score/max * 100)
let sum = 0
for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
}
console.log(sum / newArr.length)