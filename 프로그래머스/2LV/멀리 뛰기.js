function solution(n) {
  // 왜 피보나치 수열이 되는지는 모르겠음.
  
  const map = new Map()
  map.set(1, 1n)
  map.set(2, 2n)
  for (let i = 3; i <= n; i++) {
      const num = map.get(i-1) + map.get(i-2)
      map.set(i, num)
  }
  return BigInt(map.get(n) % 1234567n)
}