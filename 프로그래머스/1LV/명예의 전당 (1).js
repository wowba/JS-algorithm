function solution(k, score) {
  let answer = [];
  
  let arr = []
  
  const DESC = (a, b) => {
      return b - a
  }
  
  for (let i = 0; i < score.length; i++) {
      arr.push(score[i])
      arr.sort(DESC)
      
      if (arr.length > k) {
          arr.pop()
      }
      
      answer.push(arr.at(-1))
  }
  
  return answer;
}