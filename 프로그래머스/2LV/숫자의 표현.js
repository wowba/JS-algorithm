function solution(n) {
    
  // n 이하의 연속된 자연수로 n 구하기
  // Math.floor(n/2) + 1 이상의 수 부터는 n을 구할수 없음.
  
  // 시간초과
//     let count = 1
  
//     for (let i = 1; i < Math.floor(n/2) + 1; i++) {
//         let sum = 0
//         let cur = i
//         while (true) {
//             sum += cur
//             if (sum === n) {
//                 count++
//                 break
//             } else if (sum > n) {
//                 break
//             }
//             cur++
//         }    
//     }
//     return count

  // 등차수열 공식 문제풀이
  let count = 1
  for (let i = 1; i < Math.floor(n/2) + 1; i++) {
      for (let j = i + 1; j <= Math.floor(n/2) + 1; j++) {
          if (Math.pow(j, 2) + j === (Math.pow(i, 2) - i) + (n * 2)) {
              count++
              break
          }
          if (Math.pow(j, 2) + j > (Math.pow(i, 2) - i) + (n * 2)) break
      }
  }
  return count
}