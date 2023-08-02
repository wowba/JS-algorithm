function solution(s) {
  // 단어 map 만들기
  const nums = new Map()
  const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let idx = 0
  for (const item of arr) {
      nums.set(item, idx++)
  }
  
  let answer = ""
  let string = ""
  for (let i = 0; i < s.length; i++) {
      if (!isNaN(s[i])) {
          answer += s[i]
      } else {
          string += s[i]
          if (string.length > 2) {
              if (nums.has(string)) {
                  answer += String(nums.get(string))
                  string = ""
              }
          } 
      }
  }
  return Number(answer)
}