function solution(citations) {

  // H-index는 citations.length 보다 클 수 없다
  citations = citations.sort((a, b) => (a - b))
  let max = 0
  
  // max의 범위 = i
  for (let i = 0; i <= citations.length; i++) {
      // i와 동일하거나 큰 값의 인덱스 = j
      for (let j = 0; j < citations.length; j++) {
          if (citations[j] >= i) {
              if (citations.length - j >= i) {
                  max = i
                  break
              }
          }
      }
  }
     
  return max
}