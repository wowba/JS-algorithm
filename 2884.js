const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0]

const time = input.split(" ") 
const hour = Number(time[0])
const min = Number(time[1])

if (min >= 45) {
    console.log(hour + ' ' + (min - 45))
} else {
    if (hour === 0) {
        console.log(23 + ' ' + (min + 15))
    } else {
        console.log((hour - 1) + ' ' + (min + 15))
    }
}