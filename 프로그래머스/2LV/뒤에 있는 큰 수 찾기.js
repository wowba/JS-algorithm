function solution(numbers) {
  let answer = new Array(numbers.length).fill(0)
  let currentMax = numbers.pop()
  let stack = []
  let idx = numbers.length
  stack.push(currentMax)
  answer[idx] = -1
  idx--
  while (numbers.length > 0) {
    const currentNum = numbers.pop()
    if (currentNum >= currentMax) {
      answer[idx] = -1
      idx--
      currentMax = currentNum
      stack.push(currentNum)
    } else {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] > currentNum) {
          answer[idx] = stack[i]
          idx--
          stack.push(currentNum)
          while (true) {
            if (stack.at(-1) >= stack.at(-2)) {
              const getIn = stack.pop()
              const getOut = stack.pop()
              stack.push(getIn)
            } else {
              break
            }
          }
          break
        }
      }
    }
  }
  return answer
}