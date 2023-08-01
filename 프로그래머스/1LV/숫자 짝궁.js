function solution(X, Y) {
  var answer = '';
  let arr = []
  // 공통 숫자 배열로 구하기
  // x, y를 쪼갠 뒤 map을 이용해서 숫자 표시
  let xArr = X.split("").map(char => Number(char)).sort()
  let yArr = Y.split("").map(char => Number(char)).sort()
  
  // 공통 숫자 구하기
  const getMap = arr => {
      const map = new Map()
      for (const num of arr) {
          if (map.has(num)) {
              map.set(num, map.get(num) + 1)
          } else {
              map.set(num, 1)
          }
      }
      return map
  }
  const xMap = getMap(xArr)
  const yMap = getMap(yArr)
  
  let common = []
  for (let i = 0; i < 10; i++) {
      if (xMap.has(i) && yMap.has(i)) {
          const count = Math.min(xMap.get(i), yMap.get(i))
          for (let j = 0; j < count; j++) {
              common.push(i)
          }
      }
  }
      
  const DESC = (a, b) => {
      return b - a
  }
      
  if (common.length === 0) {
      answer = "-1"
  } else if (common[0] === 0 && common.at(-1) === 0) {
      answer = "0"
  } else {
      answer = common.sort(DESC).join("")
  } 
  
  return answer;
}