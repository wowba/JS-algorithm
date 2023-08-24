function solution(n) {
  n = n.toString(3) // 3진법 변환
  let arr = n.split("")
  arr = arr.reverse()
  return parseInt(arr.join(""), 3) // 3진법 -> 10진법
}