const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split(" ")

const [first, second, third] = input.map(Number)

// 같은 눈 개수 구하기
let count = 0
let sameNumber = null

if (first === second) {
    sameNumber = first
    count += 1
}

if (first === third) {
    sameNumber = first
    count += 1
}

if (second === third) {
    sameNumber = second
    count += 1
}

if (count === 3) {
    console.log(10000 + sameNumber * 1000)
}

if (count === 1) {
    console.log(1000 + sameNumber * 100)
}

if (count === 0) {
    // const maxNum = [first, second, third].reduce((a, b) => {Math.max(a,b)})
    console.log(Math.max(first, second, third) * 100)
}