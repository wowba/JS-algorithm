function solution(n, a, b) {
  let round = 1
  let arr = new Array(n).fill(0)
  arr[a - 1] = "A"
  arr[b - 1] = "B"
  let stack = []
  while (true) {
    let first = arr.pop()
    let second = arr.pop()

    // 종료
    if (first === "A" && second === "B") break
    if (first === "B" && second === "A") break
    // 대진
    if (first === "A" || second === "A") {
      stack.push("A")
    } else if (first === "B" || second === "B") {
      stack.push("B")
    } else {
      stack.push(0)
    }
    if (arr.length === 0) {
      round++
      arr = [...stack]
      stack = []
    }
  }
  return round
}