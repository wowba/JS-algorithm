// 두 수의 최대공약수, 최대공배수를 구하는 알고리즘

const euclidanAlgorithm = (a, b) => {
  // 1. 작은수로 큰 수를 나누고, 나온 나머지를 이용해 다시 작은수를 나누는 과정을 반복해서 나머지가 0이 나오도록 한다.
  let bigNum = a
  let smallNum = b
  while (true) {
    let left = bigNum % smallNum
    if (left === 0) {
      break
    } else {
      bigNum = smallNum
      smallNum = left
    }
  }
  return smallNum
}

const greatestCommonDivider = euclidanAlgorithm(3, 12)

// 두 수를 최대공약수로 나눈 몫을 곱하면 최소공배수를 구할 수 있다

const leastCommonMultiple = 3 * 12 / greatestCommonDivider

console.log(greatestCommonDivider, leastCommonMultiple)