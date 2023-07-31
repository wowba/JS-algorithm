function solution(ingredient) {
  //     시간초과 로직
  //     let count = 0
  //     let str = ingredient.join("")
  //     while (true) {
  //         if (str.includes("1231")) {
  //             str = str.replace("1231", "")
  //             count++
  //         } else {
  //             break
  //         }
  //     }
  //     return count
      let count = 0
      let arr = []
      for (const num of ingredient) {
          arr.push(num)
          if (arr.length > 3) {
              if (arr.at(-1) === 1 && arr.at(-2) === 3 && arr.at(-3) === 2 && arr.at(-4) === 1) {
                  arr.pop()
                  arr.pop()
                  arr.pop()
                  arr.pop()
                  count += 1
              }
          }
      }
      return count
  }