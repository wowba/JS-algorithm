// graph = 노드 연결 리스트
// v = 현재 노드(인덱스)
// visited = 노드 방문 확인
const dfs = (graph, v, visited) => {
  // 현재 노드 방문처리
  visited[v] = true;
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited)
    }
  }
  // 현재 노드 방문 마무리
  visited[v] = false
}