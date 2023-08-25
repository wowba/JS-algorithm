function solution(n) {
  let blocks = 0
  for (let i = 1; i <= n; i++) {
    blocks += i
  }

  let triangle = new Array(n).fill(0) // triangle[y][x] = 좌표
  for (let i = 0; i < n; i++) {
    triangle[i] = new Array(i + 1).fill(0)
  }

  let cnt = 1
  let move = [[1, 0], [0, 1], [-1, -1]] // [y, x]
  let currentMove = 0
  let maxHeight = n - 1
  let maxWidth = n - 1
  let currentX = 0
  let currentY = 0
  while (cnt <= blocks) {
    triangle[currentY][currentX] = cnt++

    currentY += move[currentMove][0]
    currentX += move[currentMove][1]

    if (currentMove === 0) {
      if (currentY === maxHeight) {
        currentMove = 1
        maxHeight -= 1
      }
    }
    if (currentMove === 1) {
      if (currentX === maxWidth) {
        currentMove = 2
        maxWidth -= 2
      }
    }
    if (currentMove === 2) {
      if (triangle[currentY + move[currentMove][0]][currentX + move[currentMove][1]] !== 0) {
        currentMove = 0
      }
    }
  }
  let answer = []
  for (const arr of triangle) {
    answer.push(...arr)
  }
  return answer
}