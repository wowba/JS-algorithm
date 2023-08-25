function solution(s) {
  s = s.slice(1, s.length - 1)
  s = s.slice(1, s.length - 1).split("},{")
  s = s.map((item) => item.split(","))
  s = s.sort((a, b) => {
    if (a.length > b.length) {
      return 1
    } else {
      return -1
    }
  })

  const map = new Map()
  let answer = []
  for (const arr of s) {
    for (const item of arr) {
      if (!map.has(item)) {
        map.set(item, 1)
        answer.push(Number(item))
      }
    }
  }
  return answer
}