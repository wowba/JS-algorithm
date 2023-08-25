function solution(topping) {
  let bro1 = new Map()
  let bro2 = new Map()
  let answer = 0
  for (const top of topping) {
    if (bro1.has(top)) {
      bro1.set(top, bro1.get(top) + 1)
    } else {
      bro1.set(top, 1)
    }
  }

  for (const top of topping) {
    if (bro1.has(top)) {
      if (bro1.get(top) === 1) {
        bro1.delete(top)
      } else {
        bro1.set(top, bro1.get(top) - 1)
      }
    }

    if (bro2.has(top)) {
      bro2.set(top, bro2.get(top) + 1)
    } else {
      bro2.set(top, 1)
    }

    if (bro1.size === bro2.size) answer++
  }

  return answer
}