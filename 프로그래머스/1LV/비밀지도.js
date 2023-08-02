function solution(n, arr1, arr2) {
  // 암호 해독
  const decode = arr => {
      let newArr = []
      for (let num of arr) {
          let row = ""
          for (let i = n - 1; i >= 0; i--) {
              if (Math.pow(2, i) > num) {
                  row += " "
              } else {
                  row += "#"
                  num -= Math.pow(2, i)
              }
          }
          newArr.push(row)
      }
      return newArr
  }
  const decodedArr1 = decode(arr1)
  const decodedArr2 = decode(arr2)
      
  // 해독한 지도 더하기
  let answer = []
  for (let i = 0; i < n; i++) {
      let row = ""
      for (let j = 0; j < n; j++) {
          if (decodedArr1[i][j] === "#" || decodedArr2[i][j] === "#") {
              row += "#"
          } else {
              row += " "
          }
      }
      answer.push(row)
  }
  return answer
}