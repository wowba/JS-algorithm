function solution(n) {
  // queen이 서로 공격할 수 없으려면 아래를 만족해야 함
  // 1. 같은 행에 있으면 안됨
  // 2. 같은 열에 있으면 안됨
  // 3. 대각선에 있으면 안됨
  // 위 조건을 만족하는 경우의 수 모두 찾기 (백트래킹)

  let queens = []

  const check = (x, y) => {
    for (let [a, b] of queens) {
      if (x === a || y === b) return false
      if (Math.abs(a - x) === Math.abs(b - y)) return false
    }
    return true
  }

  let answer = 0

  const backTracking = (row) => {
    // 종료 조건
    if (row === n) {
      answer++
      return
    }

    // queen 체스판에 두기
    for (let i = 0; i < n; i++) {
      if (!check(row, i)) continue
      queens.push([row, i]) // queens 배열 추가
      backTracking(row + 1) // 다음 행 재귀
      queens.pop() // 함수 끝난 이후 탈출
    }
  }

  backTracking(0)

  return answer
}