function solution(lottos, win_nums) {
  let count = 0
  let zeros = 0
  for (const num of lottos) {
      if (win_nums.includes(num)) {
          count++
      }
      if (num === 0) {
          zeros++
      }
  }
  
  return [7-count-zeros > 5 ? 6 : 7 - count - zeros, 7-count > 5 ? 6 : 7 - count]
}