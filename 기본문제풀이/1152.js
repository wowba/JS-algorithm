const fs = require("fs")
const input = fs.readFileSync("input.txt").toString().split("\n")

const wordArr = input[0].trim().split(" ")

console.log(wordArr == "")
console.log(wordArr.length)