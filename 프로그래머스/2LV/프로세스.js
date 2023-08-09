function solution(priorities, location) {
  // 배열 복사
  let sorted = [...priorities] 
  
  // priorities[i][0] = 우선순위, priorities[i][1] = 최초 위치
  priorities = priorities.map((item, index) => [item, index])
  
  // 우선순위 개수를 나타내는 배열 만들기
  sorted = sorted.sort((a, b) => a - b)
          
  // 큐는 shift와 push 활용
  let count = 0
  while (true) {
      if (priorities[0][0] === sorted.at(-1)) {
          count++
          if (priorities[0][1] === location) {
              break
          }
          sorted.pop()
          priorities.shift()
      } else {
          const first = priorities.shift()
          priorities.push(first)
      }
  }
  return count
}