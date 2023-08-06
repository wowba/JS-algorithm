// 조합
// 서로 다른 n개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것.

const arr = [1, 2, 3]

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); 
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

console.log(getCombinations(arr, 2))