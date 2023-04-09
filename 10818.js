const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

const total = Number(input[0])
const nums = input[1].split(" ").map((item) => Number(item))

const min = Math.min(...nums)
const max = Math.max(...nums)

console.log(`${min} ${max}`)