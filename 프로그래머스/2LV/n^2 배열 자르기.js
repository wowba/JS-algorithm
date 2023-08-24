function solution(n, left, right) {
  // 1, 2, 3 ... n -> 1 ~ n
  // 2, 2, 3 ... n -> n + 1 ~ 2n 
  // n, n, n ... n -> 2n + 1 ~ 3n

  const startRow = Math.floor(left / n)
  const startIdx = left % n
  // row.slice(startIdx, row.length)
  const endRow = Math.floor(right / n)
  const endIdx = right % n
  // row.slice(0, endIdx + 1)

  let arr = []

  for (let i = startRow; i <= endRow; i++) {
    let row = []
    for (let j = 0; j <= i; j++) {
      row.push(i + 1)
    }
    for (let j = i + 1; j < n; j++) {
      row.push(j + 1)
    }

    if (startRow === endRow) {
      arr.push(...row.slice(startIdx, endIdx + 1))
    } else {
      if (i === startRow) {
        arr.push(...row.slice(startIdx, row.length))
      } else if (i === endRow) {
        arr.push(...row.slice(0, endIdx + 1))
      } else {
        arr.push(...row)
      }
    }
  }

  return arr
}