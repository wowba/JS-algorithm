// sort 메소드의 파라미터로 들어가는 정렬함수.
// 정렬함수를 사용하지 않으면 배열내 각 원소는 문자열로 처리된다. -> 유니코드 값 순으로 정렬
// 정렬함수가 양수 반환시 a를 앞으로, 음수 반환시 b를 앞으로 옮기며 반환값이 0인경우 순서를 변경하지 않는다.
const arr = [3, 1, 5, 4, 2]

// 오름차순 정렬 함수
const compareFunctionASC = (a, b) => {
  return a - b
}

// 내림차순 정렬 함수
const conpareFunctionDESC = (a, b) => {
  return b - a
}

arr.sort(compareFunctionASC)
console.log(arr)
arr.sort(conpareFunctionDESC)
console.log(arr)

// 문자열 정렬
const stringArr = ['a', 'e', 'c', 'd', 'b']

const stringCompare = (a, b) => {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
}
stringArr.sort()
console.log(stringArr)

