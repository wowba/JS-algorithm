function solution(survey, choices) {
  // mbti 점수표 map
  const arr = ["R", "T", "C", "F", "J", "M", "A", "N"]
  let scores = new Map()
  for (const item of arr) {
      scores.set(item, 0)
  }
  
  // survey, choice 조회
  for (let i = 0; i < survey.length; i++) {
      survey[i] = survey[i].split("") 
      
      if (choices[i] === 1) {
          scores.set(survey[i][0], scores.get(survey[i][0]) + 3)
      }
      if (choices[i] === 2) {
          scores.set(survey[i][0], scores.get(survey[i][0]) + 2)
      }
      if (choices[i] === 3) {
          scores.set(survey[i][0], scores.get(survey[i][0]) + 1)
      }
      if (choices[i] === 5) {
          scores.set(survey[i][1], scores.get(survey[i][1]) + 1)
      }
      if (choices[i] === 6) {
          scores.set(survey[i][1], scores.get(survey[i][1]) + 2)
      }
      if (choices[i] === 7) {
          scores.set(survey[i][1], scores.get(survey[i][1]) + 3)
      }
  }
  
  // 결과 비교
  let answer = ""
  if (scores.get("R") >= scores.get("T")) {
      answer += "R"
  } else {
      answer += "T"
  }
  if (scores.get("C") >= scores.get("F")) {
      answer += "C"
  } else {
      answer += "F"
  }
  if (scores.get("J") >= scores.get("M")) {
      answer += "J"
  } else {
      answer += "M"
  }
  if (scores.get("A") >= scores.get("N")) {
      answer += "A"
  } else {
      answer += "N"
  }
  return answer;
}