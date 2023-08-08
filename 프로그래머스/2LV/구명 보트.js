function solution(people, limit) {
    
  // deque 자료구조 이용하기.
  // 혹은 투포인터?
  
  let boats = 0
  people = people.sort((a, b) => a - b)

  while (people.length > 0) {
      const weight = people.length > 1 ? people[0] + people.at(-1) : people[0]
      if (weight <= limit) {
          people.pop()
          people.shift()
          boats++
      } else {
          people.pop()
          boats++
      }
      
  }
  return boats
}