function solution(k, tangerine) {
  let map = new Map()
  for (const item of tangerine) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }
  map = [...map]
  map.sort((a, b) => a[1] - b[1])
  let cnt = 0
  let answer = 0
  while (true) {
    cnt += map.pop()[1]
    answer++
    if (k <= cnt) {
      break
    }
  }
  return answer
}