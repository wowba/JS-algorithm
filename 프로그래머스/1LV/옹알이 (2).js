function solution(babbling) {
  // "aya", "ye", "woo", "ma"
  let record = []
  let idx = 0
  let answer = 0
  for (let word of babbling) {
      while (true) {
          let flag = true

          if (record.length > 1) {
              if (record.at(-1) === record.at(-2)) {
                  idx = 0
                  record = []
                  break
              }
          }
          if (word[idx] + word[idx + 1] === "ye") {
              idx = idx + 2
              record.push("ye")
              flag = false
          } else if (word[idx] + word[idx + 1] === "ma") {
              idx = idx + 2
              record.push("ma")
              flag = false
          } else if (word[idx] + word[idx + 1] + word[idx + 2] === "woo") {
              idx = idx + 3
              record.push("woo")
              flag = false
          } else if (word[idx] + word[idx + 1] + word[idx + 2] === "aya") {
              idx = idx + 3
              record.push("aya")
              flag = false
          }

          if (flag) {
              if (idx === word.length) {
                  answer += 1
                  record = []
                  idx = 0
                  break
              } else {
                  record = []
                  idx = 0
                  break
              }
          }
      }
  }
  return answer
}