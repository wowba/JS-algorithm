function solution(want, number, discount) {
  let queue = []
  let map = new Map()
  let answerMap = new Map()
  for (let i = 0; i < want.length; i++) {
      answerMap.set(want[i], number[i])
  }
  
  let count = 0
  
  const plusItem = item => {
      queue.push(item)
      if (map.has(item)) {
          map.set(item, map.get(item) + 1)
      } else {
          map.set(item, 1)
      }
  }
  
  const minusItem = item => {
      map.set(item, map.get(item) - 1)
  }
  
  const checkAnswer = () => {
      let flag = true
      for (const item of want) {
          if (!map.has(item) || map.get(item) < answerMap.get(item)) {
              flag = false
              break
          }
      }
      if (flag) {
          count++
      }
  }
  
  // 1일날 ~ 9일날 사이 할인 품목을 추가
  for (let i = 0; i < 10; i++) {
      plusItem(discount[i])
  }
  checkAnswer()
  
  // 10일날 ~ 마지막 사이 할인 품목
  for (let i = 10; i < discount.length; i++) {
      plusItem(discount[i])
      minusItem(queue.shift())
      checkAnswer()
  }
  
  return count
}