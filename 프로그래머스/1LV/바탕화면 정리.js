function solution(wallpaper) {
    
  // 문제 내 좌표 [x, y]
  
  const width = wallpaper[0].length // y
  const height = wallpaper.length // x
  
  // 문제 해결법
  // 가장 오른쪽에 있는 파일의 y, 가장 위쪽 파일의 x => [lux, luy]
  // 가장 왼쪽에 있는 파일의 y, 가장 아래쪽 파일의 x => [rdx, rdy]
  
  // 기본값 할당
  let lux = 51
  let luy = 51
  
  let rdx = 0
  let rdy = 0
  
  // wallpaper 순회
  for (let i = 0; i <= height - 1; i++) {
      for (let j = 0; j <= width - 1; j++) {
          if (wallpaper[i][j] === "#") {
              // lux 확인
              if (i <= lux) {
                  lux = i
              }
              // luy 확인
              if (j <= luy) {
                  luy = j
              }
              // rdx 확인
              if (i >= rdx) {
                  rdx = i
              }
              // rdy 확인
              if (j >= rdy) {
                  rdy = j
              }
          }
      }
  } 
  
  // wallpaper과는 다르게 실제로 드래그를 하기 위해선 대각선 한칸 더 움직여야 함
  rdx++
  rdy++
  
  return [lux, luy, rdx, rdy];
}