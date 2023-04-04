const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const currentTime = input[0].split(" ")
let currentHour = Number(currentTime[0])
let currentMin = Number(currentTime[1])

const cookingMin = Number(input[1])

let totalMin = currentHour * 60 + currentMin + cookingMin

totalMin = totalMin % 1440

currentHour = parseInt(totalMin / 60)
currentMin = totalMin % 60

console.log(currentHour + " " + currentMin)