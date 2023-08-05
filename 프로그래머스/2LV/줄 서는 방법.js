function solution(n, k) {
  // 모든 경우의 수 n!
  // 맨 앞에 1인 경우의 수 -> n! / n
  // 맨 앞이 1이고 다음이 2인 경우의 수 -> n! / n / n -1
  // 계속해서 경우의 수의 범위를 좁혀나가서 답을 구하기.
  
  let total = 1
  for (let i = 1; i <= n; i++) {
      total = total * i
  }
  
  let arr = new Array(n).fill(0).map((item, index) => item = index + 1)
  let answer = []
  
  let start = 1 // 범위 시작
  let currentCount = total / arr.length // 현재 범위 내 경우의 수 개수
  
  for (let i = 0; i < arr.length + 1; i++) {
      if (k >= start && k < currentCount) {
          total = total / arr.length
          answer.push(arr[i])
          arr.splice(i, 1)
          currentCount = start + total / arr.length
          i = -1
          if (arr.length === 0) break
      } else {
          start += total / arr.length
          currentCount += total / arr.length
      }
  }
  
  return answer
}