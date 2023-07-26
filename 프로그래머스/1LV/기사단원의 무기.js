function solution(number, limit, power) {
  // 약수 구하는 함수 작성
  const getYaksu = (num) => {
      if (num === 1) return 1
      let count = 2
      for (let i = 2; i <= Math.ceil(num / 2); i++) {
          if (Number.isInteger(num / i)) {
              count++
          }
      }
      return count
  }
  
  let powers = []
  for (let i = 1; i <= number; i++) {
      const yaksusu = getYaksu(i)
      powers.push(yaksusu)
  }
  
  let answer = 0
  powers.forEach((item) => {
      if (item > limit) {
          answer += power
      } else {
          answer += item
      }
  })
  
  return answer;
}