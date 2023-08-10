function solution(s) {
  let answer = []
  
  // 정규식
  const pattern = /[a-zA-Z]/
  
  // 스택 이용
  let stack = []
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
          stack.push(s[i])
      }
      
      if (s[i] === " ") {
          if (stack.length > 0) {
              if (pattern.test(stack[0])) {
                  stack[0] = stack[0].toUpperCase()
              }
              for (let j = 1; j < stack.length; j++) {
                  stack[j] = stack[j].toLowerCase()
              }
              answer.push(stack.join(""))
              stack = []
          }
          answer.push(" ")
      }
  }
  
  if (stack.length > 0) {
      if (pattern.test(stack[0])) {
          stack[0] = stack[0].toUpperCase()
      }
      for (let j = 1; j < stack.length; j++) {
          stack[j] = stack[j].toLowerCase()
      }
      answer.push(stack.join(""))
  }
  
  return answer.join("")
}