const array = [4,2,5,1,3]
console.log("first", array)

const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      } else {
        // 자기보다 작은 수를 만나면 그 위치에서 멈춤
        break
      }
    }
    console.log(arr)
  }
}

InsertionSort(array)