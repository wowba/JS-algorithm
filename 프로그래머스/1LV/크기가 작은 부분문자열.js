function solution(t, p) {
  let count = 0
  const numLength = p.length
  for (let i = 0; i < t.length - p.length + 1; i++) {
      const substrNum = t.substr(i, numLength)
      if (Number(substrNum) <= Number(p)) {
          count += 1
      }
  }
  return count;
}