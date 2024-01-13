# Big O 표기법

- Big O 표기법의 필요성
- 시간 복잡성
- Big O 단순화 / 규칙
- 공간 복잡도

## Big O 표기법의 필요성

빅 오 표기법을 이용한다면 한 문제에 대한 여러가지 해결방법중 어떤 방법이 더 좋은 방법인지 비교할 수 있다.  
즉, 해당 코드의 실행 횟수를 판단하여 코드간 성능 비교를 할 수 있는 것이다.

제대로 동작하는 코드가 물론 제일 좋은 코드이지만, 알고리즘을 제대로 이해하고 더 빨리 동작하는 코드를 작성하는것은  
매우 중요한 능력이다.

또한 내가 작성한 코드의 어떤 부분이 느리게 동작하는지 파악하는 능력 또한 개발자에게 필수적이다.  
결국 더 좋은 코드를 작성할 수 있기 위해 Big O 표기법을 이해해야 한다.

## 시간 복잡성

1부터 n까지의 합을 구하기 위해 아래 두 함수를 작성해보자.

아래 코드는 1부터 n까지 덧셈이 동작하기에 n번 동작해야 한다.

```javascript
function addToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    toal += i;
  }
  return total;
}
```

아래 코드는 수학 공식을 이용하여 한번만에 원하는 값을 출력할 수 있다.

```javascript
function addToN(n) {
  return ((1 + n) * n) / 2;
}
```

여기서 더 좋은 코드가 무엇인지는 기준에 따라 다를 수 있지만, 보통 코드의 호출 시간 및 메모리 사용에 대해서 주로 논의한다.  
빠르고, 읽기 쉬우며, 메모리를 적게 사용하는것이 일반적으로 중요하다 할 수 있다.

컴퓨터가 처리해야 하는 연산의 횟수를 측정할 때,  
각 연산에 대해 정확하게 측정하는 것이 아닌 연산의 대략적인 실행 횟수를 추상적으로 표현하는 방법이다.  
즉 입력의 크기와 실행 시간간의 관계를 간단하게, 동시에 가장 오랜 시간이 걸리는 것을 표현하는 것이 Big O 표기법이다.

- O(1) : n이 커져도 연산 횟수에 변화 없음.
- O(log n) : 매우 효율적인 알고리즘. 탐색 알고리즘에서 자주 나옴
- O(n) : n이 커지면 연산 횟수도 일정한 비율로 증가.
- O(n log n) : 정렬 알고리즘 등에서 자주 나옴
- O(n²) : O(n) 연산 내 O(n) 연산이 있는 경우.
- ...

## Big O 단순화 / 규칙

- 상수는 신경쓰지 않는다.

  - O(2n) -> O(n)
  - O(500) -> O(1)
  - O(13n²) -> O(n²)

- 작은 연산은 제외한다.

  - O(2n + 123) -> O(n)
  - O(13n² + 125n + 19) -> O(n²)

- 사칙연산은 하나의 상수로 계산된다.
- 변수 할당은 상수로 계산된다.
- 배열, 객체 내부 값에 접근하는 것은 상수로 계산된다.
- 루프 내 복잡도는 (루프의 길이) X (루프 내 연산 수) 로 계산된다.

## 공간 복잡도

- 원시 타입중 boolean, number, undefined, null은 불변 공간( O(1) )으로 여겨진다.
- 원시 타입중 문자열은 O(n) 공간이 필요하다. (n은 문자열의 길이)
- 참조 타입(객체, 배열 등)은 일반적으로 O(n) 공간이 필요하다. (n은 배열의 길이 혹은 객체의 key 갯수)