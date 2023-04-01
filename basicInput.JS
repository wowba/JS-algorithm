// 기본 입출력 문제들
// a + b
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0])
let b = Number(input[1])
console.log(a + b)

// a * b
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const arr = input[0].split(' ')
console.log(Number(arr[0]) * Number(arr[1]))

// 세자리수 곱셈
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const a = Number(input[0])
const b = input[1].split('').map((elem) => Number(elem))
b.unshift(Number(input[1]))
for (let i = b.length - 1; i >= 0 ; i--) {
    console.log(a * b[i])
}