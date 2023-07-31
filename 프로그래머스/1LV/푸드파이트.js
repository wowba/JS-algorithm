function solution(food) {
  let str = ""
  for (let i = 1; i < food.length; i++) {
      if (food[i] % 2 !== 0) {
          food[i] -= 1
      }
      if (food[i] === 0) {
          continue
      }
      for (let j = 0; j < food[i] / 2; j++) {
          str += `${i}`
      }
  }
  const answer = str + "0" + str.split("").reverse().join("")
  return answer
}