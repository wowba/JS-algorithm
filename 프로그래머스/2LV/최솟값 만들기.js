function solution(A,B){
  // 곱하는 두 수의 값이 최소다 되도록 해야함.
  // 각각 ASC, DESC로 정렬 후 곱하여 합을 구한다.
  
  let sum = 0
  A = A.sort((a, b) => a - b)
  B = B.sort((a, b) => b - a)
  for (let i = 0; i < A.length; i++) {
      sum += A[i] * B[i]
  }
  return sum
}