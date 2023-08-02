// 막무가내 문제풀이
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

// 스택을 이용한 문제풀이
function solution(s){
  
    let arr = []
    let answer = true
    for (const char of s) {
        arr.push(char)
        if (char === ")") {
            if (arr.at(-2) === "(") {
                arr.pop()
                arr.pop()
            } else {
                answer = false
            }
        }
    }
    if (arr.at(-1) === "(") {
        answer = false
    }

    return answer
}