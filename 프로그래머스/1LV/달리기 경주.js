function solution(players, callings) {    
  // players 현재 순위
  // callings 제칠 순위

  // 시간초과 발생한 문제풀이
  // for (const player of callings) {
  //     // 지명한 선수의 순위 확인
  //     const current = players.indexOf(player)
  //     // 앞 선수와 배열 위치 변경
  //     let sub = players[current - 1]
  //     players[current - 1] = players[current]
  //     players[current] = sub
  // }

  const map = new Map()

  // 빠르게 순위를 조회할 수 있게 Map에 players 할당
  let i = 0
  for (const player of players) {
      map.set(player, i++)
  }

  // 지명한 선수를 map 에서 확인하여 값 업데이트
  for (const player of callings) {
      // 지명된 선수의 순위 변경
      let current = map.get(player)
      map.set(player, current - 1)
      // 쳐진 선수 순위 변경
      const loser = players[current - 1]
      map.set(loser, current)

      // 원본 배열의 순서 변경
      players[current - 1] = players[current]
      players[current] = loser
  }

  return players;
}