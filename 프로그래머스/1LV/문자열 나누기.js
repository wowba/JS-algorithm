function solution(s) {
    
  let firstChar = null
  let firstCharCount = 0
  let otherCount = 0
  let answer = 0
  
  for (let i = 0; i < s.length; i++) {
      if (i === s.length - 1) {
          answer++
          break
      }
      
      if (firstChar === null) {
          firstChar = s[i]
          firstCharCount++
          continue
      }
      
      if (s[i] === firstChar) firstCharCount++
      if (s[i] !== firstChar) otherCount++
      
      if (firstCharCount === otherCount) {
          answer++
          firstChar = null
          firstCharCount = 0
          otherCount = 0
      }
  }
  
  return answer;
}