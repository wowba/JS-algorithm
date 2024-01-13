function solution(n, wires) {
  // 모든 간선을 한번씩 잘라본 뒤 DFS를 이용해 노드의 개수 구하기    
  // n -> 노드의 개수, wires -> 간선

  let answer = Infinity

  // 간선의 개수만큼 로직 반복하기
  for (let i = 0; i < wires.length; i++) {
    // graph[0]은 사용하지 않는다.    
    let graph = new Array(n + 1).fill().map(() => [])
    let visited = new Array(n + 1).fill(false)

    // 간선 하나 제거하기
    let newWires = [...wires]
    newWires.splice(i, 1)

    for (let wire of newWires) {
      const [start, end] = wire
      graph[start].push(end)
      graph[end].push(start)
    }

    // dfsNodes를 기반으로 dfs 수행, 노드의 개수 차 기록하기
    // 두 그래프 중 하나만 dfs 해도 된다.
    let cnt = 0 // 한쪽 그레프 노드의 수
    const dfs = (node) => {
      const nextNodes = graph[node]
      for (const next of nextNodes) {
        if (!visited[next]) {
          visited[next] = true
          cnt++
          dfs(next)
        }
      }
    }
    dfs(1)
    answer = Math.min(answer, Math.abs(n - cnt - cnt))
  }

  return answer
}