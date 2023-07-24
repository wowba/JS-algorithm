function solution(keymap, targets) {
  // 1. keymap을 분석하여 각 문자별로 최소 클릭회수를 map에 저장한다.
  const map = new Map()
  for (const keys of keymap) {
      for (let i = 0; i < keys.length; i++) {
          // 없을 경우
          if (!map.has(keys[i])) {
              map.set(keys[i], i + 1)
          } 
          
          // 존재할 경우
          if (map.get(keys[i]) && map.get(keys[i]) > i + 1) {
              map.set(keys[i], i + 1)
          }
      }
  }
  
  // 2. target 분석
  let answer = []
  for (const target of targets) {
      let count = 0
      for (const char of target) {
          if (map.get(char)) {
              count += map.get(char)
          } else {
              count = 0
              break
          }
      }
      if (count === 0) {
          answer.push(-1)
      } else {
          answer.push(count)
      }
  }
  
  return answer;
}