function solution(skill, skill_trees) {
  skill = skill.split("")
  const map = new Map()
  let idx = 0
  for (const item of skill) {
    map.set(item, idx++)
  }

  let currentIdx = 0
  let answer = 0
  for (const tree of skill_trees) {
    const skills = tree.split("")
    let flag = true
    for (const skill of skills) {
      if (map.has(skill)) {
        if (map.get(skill) === currentIdx) {
          currentIdx++
        } else {
          flag = false
          break
        }
      }
    }
    if (flag) {
      answer++
    }
    currentIdx = 0
  }
  return answer
}