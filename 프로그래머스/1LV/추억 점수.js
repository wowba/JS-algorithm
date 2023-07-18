function solution(name, yearning, photo) {
  var answer = [];

  // map에 인물, 그리움 점수 저장
  const map = new Map()
  
  for (let i = 0; i < name.length; i++) {
      map.set(name[i], yearning[i])    
  }
  
  // 각 사진 그룹별 점수 계산
  for (let i = 0; i < photo.length; i++) {
      let count = 0
      for (let j = 0; j < photo[i].length; j++) {
          if (map.has(photo[i][j])) {
              count += map.get(photo[i][j])
          }
      }
      answer.push(count)
  }
  
  return answer;
}