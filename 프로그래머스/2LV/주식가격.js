function solution(prices) {
  // prices의 가격이 떨어지지 않는 시간 구하기.
  let arr = []
  let answer = new Array(prices.length).fill(0)
  
  let time = 0 // 인덱스
  
  for (const price of prices) {
      time++
      if (arr.length === 0) {
          arr.push([price, time])
      } else {
          while (arr.length > 0) {
              if (arr.at(-1)[0] > price) {
                  answer[arr.at(-1)[1] - 1] = time - arr.at(-1)[1]
                  arr.pop()
              } else {
                  break
              }
          }
          arr.push([price, time])
      }
  }
  
  for (const item of arr) {
      answer[item[1] - 1] = time - item[1]
  }
  
  return answer
}