function solution(s) {
  let deleted0 = 0
  let convertCount = 0

  while (s !== "1") {
    // 1. 0 제거하기
    let newS = ""
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        newS += "1"
      } else {
        deleted0++
      }
    }

    // 2. 길이를 이진수 변환하기
    let length = newS.length
    function convert(num) {
      let pow = 0
      let str = ""
      while (true) {
        if (num > Math.pow(2, pow)) {
          pow++
        } else if (num === Math.pow(2, pow)) {
          break
        } else {
          pow--
          break
        }
      }
      while (pow !== -1) {
        if (num >= Math.pow(2, pow)) {
          num -= Math.pow(2, pow)
          pow--
          str += "1"
        } else {
          pow--
          str += "0"
        }
      }
      return str
    }

    s = convert(length)
    convertCount++
  }
  return [convertCount, deleted0]
}