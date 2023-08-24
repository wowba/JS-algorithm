function solution(s) {
  // 1. 회전 시키기
  // 문자열을 slice로 자른 뒤 더한다
  function rotation(str, idx) {
    const A = str.slice(0, idx)
    const B = str.slice(idx, str.length)
    return B + A
  }

  // 2. 올바른 괄호 문자열 판별
  function checkBracket(str) {
    let brackets = ["[]", "{}", "()"]
    let stack = []
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i])
      while (stack.length > 1) {
        if (brackets.includes(stack.at(-2) + stack.at(-1))) {
          stack.pop()
          stack.pop()
        } else {
          break
        }
      }
    }
    if (stack.length === 0) {
      return true
    } else {
      return false
    }
  }

  let answer = 0
  for (let i = 0; i < s.length; i++) {
    const rotated = rotation(s, i)
    if (checkBracket(rotated)) {
      answer++
    }
  }

  return answer
}