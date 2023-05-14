// 입력값
// arr - 정렬된 배열
// target - 찾고자 하는 원소
// start - 배열의 시작 인덱스
// end - 배열의 끝 인덱스
const BinarySearch = (arr, target, start, end) => {
  // 시작점이 끝점보다 값이 큰 경우 결과 존재하지 않음
  if (start > end) {
    return -1
  }

  // 중간점 - 배열의 중간 인덱스
  let mid = parseInt((start + end) / 2)

  // 값을 찾은 경우 배열의 인덱스 리턴
  if (arr[mid] === target) {
    return mid
  }

  // 중간점의 값보다 찾고자 하는 값이 작은경우 왼쪽 확인
  if (arr[mid] > target) {
    return BinarySearch(arr, target, start, mid - 1)
  }
  // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  if (arr[mid] < target) {
    return BinarySearch(arr, target, mid + 1, end)
  }
}

const arr = [1,2,3,4,5,6]
console.log(BinarySearch(arr, 3, 0, arr.length - 1))