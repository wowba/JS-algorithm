function solution(park, routes) {
  // 공원의 길이
  const width = park[0].length
  const height = park.length
  let curPosition
   
  // 시작점 찾기
  let setCurPosition = false
  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          if (park[i][j] === "S") { 
              curPosition = [i, j] // [height, width]
              setCurPosition = true
              break
          }
      }
      if (setCurPosition) break
  }
      
  // routes 계산
  for (const route of routes) {
      // 원본 배열 복사
      const nextPosition = [...curPosition]
      const [direction, distance] = route.split(" ")
      
      // 경우에 따른 다음 좌표 계산
      if (direction === "E") nextPosition[1] += Number(distance)
      if (direction === "W") nextPosition[1] -= Number(distance)
      if (direction === "N") nextPosition[0] -= Number(distance)
      if (direction === "S") nextPosition[0] += Number(distance)
      
      // 공원 바깥으로 나가는 경우
      if (nextPosition[0] < 0 || nextPosition[0] > height - 1 || nextPosition[1] < 0 || nextPosition[1] > width - 1) {
          continue
      } 
      
      // 장애물 판별 (동)
      if (direction === "E") {
          let blocked = false
          for (let i = curPosition[1] + 1; i <= nextPosition[1]; i++) {
              if (park[curPosition[0]][i] === "X") {
                  blocked = true
                  break
              }
          }
          if (blocked) continue
      }
      
      // 장애물 판별 (서)
      if (direction === "W") {
          let blocked = false
          for (let i = curPosition[1] - 1; i >= nextPosition[1]; i--) {
              if (park[curPosition[0]][i] === "X") {
                  blocked = true
                  break
              }
          }
          if (blocked) continue
      }
      
      // 장애물 판별 (남)
      if (direction === "S") {
          let blocked = false
          for (let i = curPosition[0] + 1; i <= nextPosition[0]; i++) {
              if (park[i][curPosition[1]] === "X") {
                  blocked = true
                  break
              }
          }
          if (blocked) continue
      }
      
      // 장애물 판별 (북)
      if (direction === "N") {
          let blocked = false
          for (let i = curPosition[0] - 1; i >= nextPosition[0]; i--) {
              if (park[i][curPosition[1]] === "X") {
                  blocked = true
                  break
              }
          }
          if (blocked) continue
      }
      
      curPosition = nextPosition
  }
  
  return curPosition;
}