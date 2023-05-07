const array = [4, 3, 2, 1, 8, 7, 6, 5]

// 임시배열 선언
const sorted = Array.from({ length: array.length }, () => 0)

// 반으로 나눈 배열을 다시 정렬하는 함수
const merge = (arr, left, mid, right) => {
  let i = left
  let j = mid + 1;
  let k = left // 결과 배열의 인덱스

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sorted[k++] = arr[i++]
    } else {
      sorted[k++] = arr[j++]
    }
  }

  // 왼쪽 배열이 먼저 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) {
      sorted[k++] = arr[j]
    }
  } 
  // 오른쪽 배열이 먼저 끝난 경우
  else {
    for (; i <= mid; i++) {
      sorted[k++] = arr[i]
    }
  }

  // 정렬 결과 원본 배열에 반영
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

// 정렬할 배열을 반으로 나누는 함수
const mergeSort = (arr, left, right) => {
  // 원소가 1개이면 이미 정렬된 상태
  if (left < right) {
    let mid = parseInt((left + right) / 2) // 2개의 부분 배열로 분할 (divde)
    mergeSort(arr, left, mid) // 왼쪽 부분 배열 정렬 수행 (conquer)
    mergeSort(arr, mid + 1, right) // 오른쪽 부분 배열 정렬 수행 (conquer)
    merge(arr, left, mid, right) // 정렬된 두개의 배열을 하나로 병합 (conbine)
  }
}

mergeSort(array, 0, array.length - 1)