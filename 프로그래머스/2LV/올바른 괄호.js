function solution(s){
    
  //     시간초과
  //     while (true) {
  //         if (s.includes("()")) {
  //             s = s.replace("()", "")
  //             continue
  //         } else {
  //             break
  //         }
  //     }
  //     return s.length > 0 ? false : true;
      
      let left = 0
      let right = 0
      let answer = true
      for (const char of s) {
          if (char === "(") {
              left += 1
          } else {
              right += 1
              if (left < right) {
                  answer = false
                  break
              }
          }
      }
      if (left !== right) {
          answer = false
      }
      return answer
  }