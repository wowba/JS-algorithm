// 하한선과 상한선 함수

// 하한선
// 정렬된 순서를 유지하면서 배열에서 삽입할 가장 왼쪽 인덱스 찾기
// 타겟과 동일한 값중 가장 오른쪽 값.
const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2)

    // 최대한 왼쪽으로 인덱스 이동
    if (arr[mid] >= target) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return end
}

// 상한선
// 정렬된 순서를 유지하면서 배열에서 삽입할 가장 오른쪽 인덱스 찾기
// 하한선 함수와는 다르게 타켓보다 큰 값중 가장 왼쪽 값을 찾는다.
const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2)

    // 최대한 오른쪽으로 이동
    if (arr[mid] > target) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return end
}

// 정렬된 배열에서 특정 범위에 속하는 원소의 갯수 계산
const countByRange = (arr, leftValue, rightValue) => {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length - 1)
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length - 1)
  return rightIndex - leftIndex
}

const arr = [1,2,3,3,3,4,5]
// 2 <= x, x<= 4인 원소의 갯수 출력
console.log(countByRange(arr, 2, 4))