function solution(elements) {
  let set = new Set()
  for (let length = 1; length <= elements.length; length++) {
    for (let idx = 0; idx < elements.length; idx++) {
      let arr = []
      let start = idx
      while (true) {
        if (start !== elements.length) {
          arr.push(elements[start++])
        } else {
          start = 0
          arr.push(elements[start++])
        }
        if (arr.length === length) {
          const sum = arr.reduce((acc, cur) => acc + cur, 0)
          set.add(sum)
          break
        }
      }
    }
  }
  return set.size
}