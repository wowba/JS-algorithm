const array = [3, 1, 5, 4, 2]

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        console.log(minIndex)
      }
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp

    console.log(arr, i)
  }
}

SelectionSort(array)