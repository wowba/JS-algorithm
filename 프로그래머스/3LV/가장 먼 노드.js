class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }

  enqueue(value) {
    if (this.size() === 0) {
      this.storage['0'] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  dequeue() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

function solution(n, edge) {
  const queue = new Queue()

  // n = 노드의 개수
  // edge = 양방향 간선 정보

  // 시작 노드에서 모든 노드로 길을 찾는 BFS를 이용해 최소길이 찾는 문제

  // 인접 그래프 만들기
  let graph = new Array(n).fill().map(() => [])
  for (let i = 0; i < edge.length; i++) {
    let [start, end] = edge[i]
    graph[start - 1].push(end - 1)
    graph[end - 1].push(start - 1)
  }

  // 방문 내역 기록 만들기
  let visited = new Array(n).fill(false)

  // queue
  // let queue = []
  // queue.push([0, 0]) // node, cnt
  queue.enqueue([0, 0])

  let answer = 0
  let max = 0

  // bfs 로직 작성
  while (queue.size() > 0) {
    // const [current, cnt] = queue.shift()
    const [current, cnt] = queue.dequeue()

    visited[current] = true

    if (cnt > max) {
      max = cnt
      answer = 1
    } else if (cnt === max) {
      answer++
    }

    const available = graph[current]
    for (let next of available) {
      if (!visited[next]) {
        visited[next] = true
        // queue.push([next, cnt + 1])
        queue.enqueue([next, cnt + 1])

      }
    }
  }

  return answer
}