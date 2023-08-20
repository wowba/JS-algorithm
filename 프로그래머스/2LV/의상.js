function solution(clothes) {
  const map = new Map()
  
  for (const cloth of clothes) {
      if (map.has(cloth[1])) {
          map.set(cloth[1], map.get(cloth[1]) + 1)
      } else {
          map.set(cloth[1], 2)
      }
  }
  
  const arr = [...map]
  let answer = 1
  for (const item of arr) {
      answer = answer * item[1]
  }
  return answer - 1
}