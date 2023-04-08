const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const num = Number(input[0])

for (let i = 1; i <= num; i++ ) {
    let str = ""
    for (let j = 1; j <= i; j++ ) {
        str += "*"
    }
    console.log(str)
}