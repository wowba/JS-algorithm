const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const nums = input[0].split(" ")
                .map((item) => item.split(""))

const answer = []
for (let i = 0; i < nums.length; i++) {
    let a = null
    a = nums[i][0]
    nums[i][0] = nums[i][2]
    nums[i][2] = a
    
    answer.push(Number(nums[i].join("")))
}
console.log(Math.max(...answer))
