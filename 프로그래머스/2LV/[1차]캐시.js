function solution(cacheSize, cities) {
  let map = new Map()
  let count = 0
  for (const city of cities) {
      // 도시를 소문자로 변환
      const convertCity = city.toLowerCase()
      if (map.has(convertCity)) { // 캐시 존재시 +1
          count++
          // 가장 끝으로 옮겨야 함 (LRU)
          map.delete(convertCity)
          map.set(convertCity, 1)
      } else { // 캐시 없을시 + 5
          count += 5
          map.set(convertCity, 1) // 캐시에 추가
          if (map.size > cacheSize) { // 캐시 사이즈 초과시
              const arr = [...map]
              arr.shift()
              let newMap = new Map()
              arr.map(item => newMap.set(item[0], 1)) 
              map = newMap // 새로운 캐시로 교체
          } 
      }
  }
  return count
}