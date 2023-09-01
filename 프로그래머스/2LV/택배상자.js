function solution(order) {

  let main = new Array(order.length).fill(0).map((item, idx) => item = order.length - idx)
  let sub = []
  let truck = []
  let idx = 0

  while (true) {

    const currentBox = main.pop()
    if (order[idx] === currentBox) {
      truck.push(currentBox)
      idx++
    } else {
      sub.push(currentBox)
    }

    while (true) {
      if (sub.length > 0) {
        if (sub.at(-1) === order[idx]) {
          truck.push(sub.pop())
          idx++
        } else {
          break
        }
      } else {
        break
      }
    }

    if (main.length === 0) break
  }

  return truck.length
}