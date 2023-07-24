function solution(n, m, section) {
  let answer = 0
  // 페인팅 시작 지점
  let curPoint = section[0]
  
  for (let i = 0; i < section.length; i++) {
      if (curPoint > section[i]) {
          continue
      } else {
          curPoint = section[i] + m
          answer++
      }
  }
  
  return answer;
}