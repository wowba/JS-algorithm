function solution(n) {

  // 재귀
  // 시간초과
//     let max = Infinity
//     const recursive = (energy, position) => {
//         // 종료 조건
//         if (position === n) {
//             if (energy < max) max = energy
//             return
//         } else if (position > n) {
//             return
//         }
      
//         // 재귀
//         recursive(energy + 1, position + 1)
//         recursive(energy, position * 2)
//     }
//     recursive(1, 1)
//     return max
  
  // DP
  // map.get(n) = Math.min(map.get(n - 1) + 1, map.get(n / 2))
  // 효율성 테스트 시간초과
//     const map = new Map()
//     map.set(1, 1n) // key = position, value = energy
//     map.set(2, 1n)

//     for (let i = 3; i <= n; i++) {
//         if (i % 2 === 0) { // 짝수인 경우
//             map.set(i, map.get(i - 1) + 1n > map.get(i / 2) ? map.get(i / 2) : map.get(i - 1) + 1n)
//         } else { // 홀수인 경우
//             map.set(i, map.get(i - 1) + 1n)
//         }
//     }
//     return map.get(n)
  
  // 단순 구현
  let count = 0
  while (n !== 0) {
      if (n % 2 === 0) {
          n = n / 2
      } else {
          n -= 1
          count += 1
      }
  }
  return count
}