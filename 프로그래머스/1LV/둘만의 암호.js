function solution(s, skip, index) {
    
  // skip 내 문자를 map으로 만들어 O(1)
  const map = new Map
  for (const char of skip) {
      map.set(char.charCodeAt(0), char)
  }
  
  let answer = ""
  for (let i = 0; i < s.length; i++) {
      
      let nextCode = s.charCodeAt(i)
      
      for (let j = 0; j < index; j++) {
          while (true) {
              let booleanCode = nextCode + 1
              if (booleanCode > 122) {
                  booleanCode = booleanCode - 122 + 96
              }
              if (map.has(booleanCode)) {
                  nextCode++
                  if (nextCode > 122) {
                      nextCode = nextCode - 122 + 96
                  }
              } else {
                  nextCode++
                  if (nextCode > 122) {
                      nextCode = nextCode - 122 + 96
                  }
                  break
              }
          }
      }
      
      answer += String.fromCodePoint(nextCode)
  }

  return answer;
}