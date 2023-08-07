function solution(s) {
    
  let stack = []
  
  for (let i = 0; i < s.length; i++) {
      stack.push(s[i])
      if (stack.length > 1) {
          if (stack.at(-1) === stack.at(-2)) {
              stack.pop()
              stack.pop()
          }
      }
  }
  
  if (stack.length > 0) {
      return 0
  } else {
      return 1
  }
}