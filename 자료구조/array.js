// ES6 이상에서 사용할 수 있는 문법.
// 한 줄로 2차원 배열 초기화 가능
let arr = Array.from(Array(4), () => new Array(5))
console.log(arr)

// 반복문을 이용한 방법
let arr2 = new Array(3)
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Array.from(
    { length: 4 },
    (undefined, j) => i * 4 + j
  )
}
console.log(arr2)

// 배열 붙이기 concat O(N)
let arr3 = [1,2,3]
let arr4 = [4,5,6]
let arr5 = arr3.concat(arr4)
console.log(arr5)

// slice - 특정 구간의 원소를 꺼낸 배열 반환 O(N)
let arr6 = [1,2,3,4,5]
let result = arr6.slice(0,1)
console.log(result)

// indexOf 특정한 값을 가지는 원소의 첫째 인덱스 반환 O(N)
// 해당하는 원소가 없을 경우 -1 반환
let arr7 = [1,2,3,4,5]
console.log(arr7.indexOf(3))
