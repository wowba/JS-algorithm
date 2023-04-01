// 표준 입출력으로 console.log 사용
console.log("hello world")

// 몫 나누기
console.log(parseInt(10 / 3))
// 나머지 나누기
console.log(10 % 3) 
// 소수점 아래 특정 자리에서 반올림
let x = 123.456
console.log(x.toFixed(2))

// 코딩 테스트용 빠른 출력
// 매번 console.log를 사용하는게 아닌 하나의 문자열을 출력하는것이 빠름.
let answer = '';
for (let i = 0; i < 5; i++) {
  answer += i + '\n'
}
console.log(answer)

// 코딩 테스트용 기본 입력 - fs 모듈
// dev/stdin 파일에 적힌 텍스트를 불러오는 경우 아래와 같이 실행.
const fs = require('fs')
let input1 = fs.readFileSync('input.txt').toString().split('\n')
console.log(input1)

// readline 모듈을 사용해서 정답 출력 가능
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input2 = [];
rl.on('line', (line) => {
  input2.push(line)
}).on('close', () => {
  console.log(input2)
  process.exit();
})

// 문자열, 정수 변환
let str = '1'
let num = Number(str)
console.log(typeof(num))
str = String(num)
console.log(typeof(str))

// Array.prototype.reduce()
// 배열의 모든 원소에 대해 측정한 연산을 순차적으로 적용할 때 reduce()를 사용.
// reduce(accumlator, currentValue) => 반환값
let data = [1, 2, 3, 4, 5]
let minValue = data.reduce((a, b) => Math.min(a, b))
console.log(minValue)
let sum = data.reduce((a, b) => a + b)
console.log(sum)

// 배열 초기화 방법
// 1. 배열 선언
let arr = [0, 0, 0, 0, 0]
// 2. Array 메서드 사용
arr = new Array(5).fill(0);

// 집합 자료형
// 특정한 원소의 등장 여부를 파악할 때 집합 자료형을 효과적으로 사용 가능
let mySet = new Set(); // 집합 객체 생성, 중복된 객체를 포함하지 않는다.
mySet.add(3)
mySet.add(3)
mySet.add(4)
mySet.add(5)
console.log(mySet.size)
console.log(mySet.has(5))
mySet.delete(5)
for (let item of mySet) {console.log(item)}

// 이스케이프 시퀀스
// 예약 문자 혹은 특수 문자를 출력하기 위해 이스케이프 시퀀스 사용 가능
// ₩t 탭 ₩₩ 역 슬래시 ₩" 큰 따옴표 ₩' 작은 따옴표