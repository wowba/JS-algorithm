const input = ['100', '200']
const a = Number(input[0])
const b = input[1].split('').map((elem) => Number(elem))
b.push(Number(input[1]))
for (let i = 0; i < b.length; i++) {
    console.log(a * b[i])
}