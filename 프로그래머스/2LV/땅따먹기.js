function solution(land) {
  let rows = land.length
//     let max = 0
//     const recursive = (sum, currentRow, currentColumn) => {
//         // 종료 조건
//         if (currentRow === rows) {
//             if (max < sum) max = sum
//             return
//         }
//         // 반복 동작
//         sum += land[currentRow][currentColumn]
//         for (let i = 0; i < 4; i++) {
//             if (i !== currentColumn) recursive(sum, currentRow + 1, i)
//         } 
//     }

//     // 실행
//     for (let i = 0; i < 4; i++) {
//         recursive(0, 0, i)
//     }
//     return max
  
  // DP로 풀기
  // 1. 이전 행의 최댓값을 본인에 계속 더해나가는 방식으로 하기
  for (let i = 1; i < rows; i++) {
      // land[i] => 각 행
      for (let j = 0; j < 4; j++) {
          // land[i][j] => 현재 위치
          // land[i-1][j] => 전 행 위치
          let list = []
          for (let k = 0; k < 4; k++) {
              if (k !== j) list.push(land[i-1][k])
          }
          land[i][j] += Math.max(...list)
      }
  }
  return Math.max(...land[rows-1])
}