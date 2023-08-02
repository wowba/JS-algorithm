function solution(today, terms, privacies) {
  // 모든 달은 28일까지만 존재
  // today - 오늘 날짜
  // terms - 약관 종류별 개월수
  
  // terms 를 맵 변환
  terms = terms.map(item => item.split(" ")) // terms[i][0] = 약관 종류, terms[i][1] = 개월 수
  let termMap = new Map()
  for (const term of terms) {
      termMap.set(term[0], term[1])
  }
  
  // privacies 변환
  let index = 1
  let answer = []
  for (let privacy of privacies) {
      privacy = privacy.split(" ") // privacy[0] = 날짜, privacy[1] = 약관 종류
      let date = privacy[0].split(".") // date[0] = 년도, date[1] = 월, date[2] = 날
      date[1] = Number(date[1]) + Number(termMap.get(privacy[1]))
      while (date[1] > 12) {
          date[1] -= 12
          date[0] = Number(date[0]) + 1
      }
      
      date[1] = String(date[1]).length === 1 ? "0" + String(date[1]) : String(date[1])
      privacy[0] = date.map(item => String(item)).join(".")
      
      // 비교
      if (today >= privacy[0]) {
          console.log(today, privacy[0])
          answer.push(index)
      }
      index++
  }
  return answer
}