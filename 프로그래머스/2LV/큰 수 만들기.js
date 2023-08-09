function solution(number, k) {
    
  // 테스트케이스 시간초과
//     let count = 0
//     let i = 0
//     while (true) {
//         if (Number(number[i]) < Number(number[i + 1])) {
//             number = number.substring(0, i) + number.substring(i + 1, number.length)
//             i = i - 1
//             count++            
//         } else {
//             i++
//         }
//         if (i === -1) i = 0 
//         if (count === k) break
//         if (i === number.length) break
//     } 
  
//     if (k > count) {
//         number = number.substr(0, number.length - k + count)
//     }
  
//     return number
  
  // 스택 사용하기
  const stack = []
  let count = 0
  let idx = 0
  for (let i = 0; i < number.length; i++) {
      idx++
      
      // 종료 조건
      if (count === k) break
      
      // 뒤의 숫자와 비교
      if (Number(number[i]) < Number(number[i + 1])) {
          count++
          stack.push(number[i + 1])
          i++
          idx++
      } else {
          stack.push(number[i])
      }
      
      // 스택에 추가한 뒤 앞의 숫자랑 비교
      while (true) {
          // 종료조건
          if (stack.length === 1) break
          if (count === k) break
          
          if (stack.at(-1) > stack.at(-2)) {
              const last = stack.pop()
              stack.pop()
              stack.push(last)
              count++
          } else {
              break
          }
      }
  }
  
  if (k > count) {
      for (let i = 0; i < k - count; i++) {
          stack.pop()
      }
  }
  
  if (idx < number.length) {
      for (let i = idx - 1; i < number.length; i++) {
          stack.push(number[i])
      }
  }
 
  return stack.join("")
}