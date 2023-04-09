const fs = require("fs")
const input = fs.readFileSync("input.txt").toString().split("\n")

let answer = ""
for (let i = 0; i < input.length; i++) {
    const data = input[i].split(" ")
    console.log(data)
    if (data.length == 1) {
        continue
    }

    const times = data[0]
    const str = data[1].split("")
    for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < times; k++) {
            answer += str[j]
        }
    }
    answer += "\n"
}
console.log(answer)