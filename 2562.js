const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const nums = []
for (let i = 0; i < input.length; i++) {
    nums.push(Number(input[i]))
}

let max = nums[0]
let index = 0

for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
        max = nums[i]
        index = i
    }
}
console.log(max)
console.log(index + 1)