function solution(n) {
  const decode = num => {
      let length = 0
      while (true) {
          if (Math.pow(2, length) <= num) {
              length++
          } else {
              break
          }
      }
      let decodedNum = ""
      for (let i = length - 1; i >= 0; i--) {
          if (num >= Math.pow(2, i)) {
              decodedNum += "1"
              num -= Math.pow(2, i)
          } else {
              decodedNum += "0"
          }
      }
      return decodedNum
  }
  let decodedN = decode(n).split("")
  
  let count = 0
  for (const num of decodedN) {
      if (num === "1") {
          count++
      }
  }
  
  // 아래 로직을 좀 더 효율적으로 고쳐야 함...
  while (true) {
      n++
      let next = decode(n).split("")
      let nextCount = 0
      for (const num of next) {
          if (num === "1") {
              nextCount++
          }
      }
      if (count === nextCount) {
          break
      }
  }
  return n
}