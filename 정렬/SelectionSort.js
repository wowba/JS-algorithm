const array = [1, 2, 4, 5, 7, 3, 6, 8, 9, 0]
console.log(array)

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(arr)
}

SelectionSort(array)