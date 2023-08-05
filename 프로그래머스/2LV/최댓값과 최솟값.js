function solution(s) {
  s = s.split(" ").sort((a, b) => a - b)
  return String(s[0]) + " " + String(s.at(-1))
}