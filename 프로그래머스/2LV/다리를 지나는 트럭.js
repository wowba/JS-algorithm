function solution(bridge_length, weight, truck_weights) {
    
  // truck_weights 순서대로 다리를 건넘.
  // onBridge[i] = [무게, 시간]
  const trucks = truck_weights.length
  let onBridge = []
  let arrival = 0
  let count = 0
  
  while (arrival !== trucks) {
      count++
      
      // 다리 위 트럭 시간 업데이트
      for (let i = 0; i < onBridge.length; i++) {
          // 다리를 건넌 트럭 제거
          if (onBridge[i][1]++ === bridge_length) {
              onBridge.shift()
              arrival++
              i--
          }
      }
      
      // 트럭을 다리에 올리는 로직
      let bridgeWeight = 0
      for (const truck of onBridge) {
          bridgeWeight += truck[0]
      }
      if (bridgeWeight + truck_weights[0] <= weight) {
          onBridge.push([truck_weights.shift(), 1]) // onBridge[i] = [무게, 시간]
      }
  }
  return count
}