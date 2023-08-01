function solution(a, b, n) {
  // n개를 가져다 주면 몇병을 얻을 수 있는가
  // 빈병 a개를 주면 콜라 b병을 준다
  let total = 0
  while (n >= a) {
      n -= a - b
      total += b
  }
  return total;
}