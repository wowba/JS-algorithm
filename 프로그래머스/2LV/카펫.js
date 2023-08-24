function solution(brown, yellow) {
  // 가로길이 = width, 세로길이 = height
  // (1) brown = width * 2 + height * 2 - 4
  // (2) yellow = (width - 2)(height - 2)
  // (3) width >= height > 2
  // 두 조건을 만족하는 경우 구하기.

  let answer
  for (let height = 3; height < Infinity; height++) {
    let flag = false
    for (let width = height; width < Infinity; width++) {
      const yellowArea = (width - 2) * (height - 2)
      const brownArea = width * 2 + height * 2 - 4
      if (yellowArea < yellow) {
        continue
      } else if (yellowArea > yellow) {
        break
      } else {
        if (brownArea === brown) {
          flag = true
          answer = [width, height]
        }
      }
    }
    if (flag) {
      break
    }
  }
  return answer
}