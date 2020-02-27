---
title: "ES6 - 적절한 꼬리 호출(Proper Tail Calls)"
date: 2020-01-08T18:46:45+09:00
categories: ["javascript"]
---

# ECMAScript 6 - 적절한 꼬리 호출(Proper Tail Calls)

<https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/>

## 적절한 꼬리 호출?(Proper Tail Calls)

- Proper Tail Calls(PTC)는 ECMAScript 6 언어의 새로운 특징입니다.
- recursive 프로그래밍 패턴을 수월하게 하고자 추가됬다고 합니다.
- stack overflow exception 를 발생시키는 코드도 실행할 수 있게 한다고 합니다.

## 부연 설명

- 일반적으로 함수 호출할 때, 함수 호출과 관련된 데이터에 스택 공간을 할당합니다.
- 이 데이터에는 반환 주소, 이전 스택 포인터, 함수에 대한 전달인자, 로컬 값에 대한 공간(스택 프레임)등 있습니다.
- 꼬리 위치에 있는 함수를 호출하면 호출 함수의 스택 공간을 재사용할 수 있습니다.

### 꼬리 위치 함수 호출 조건

- 함수 호출은 "strict mode" 안에서 되어야 합니다.
- 일반 함수나 화살표 함수이어야 합니다.
- generator 함수는 안 됩니다.
- 호출한 함수의 반환 값은 함수 호출에 의해 반환되어야 합니다.

### 결론: 재귀 호출시 PTC를 쓰면 성능 향상을 많이 누릴 수 있다

```js
/*
 * 유클리드의 최대공약수 (Greatest Common Divisor of Euclid's algorithm)
 * 아름답고 적절한 꼬리 호출의 예제 입니다.
 */

"use strict";

function gcd(m, n)
{
    console.log(`m=${m} n=${n}`)
    if (!n)
        return m;
    return gcd(n, m % n);
}
```

```js
/*
 * factorial() 기본 형태
 * 마지막 return 호출 시에
 * n * 연산("return n * factorial(n - 1)")이 있으므로
 * 적합한 꼬리 호출이 성립하지 않습니다!
 */

"use strict";

function factorial(n)
{
    console.log(n)
    if (!n)
        return 1;
    return n * factorial(n - 1);
}
```

```js
/* factorial()을 PTC화
 * 꼬리 호출에
 * 자기 자신 호출("return factorial(n - 1, n * partialFactorial)")이
 * 쏘옥 들어가야 합니다.
 */

"use strict";

function factorial(n, partialFactorial = 1)
{
    if (!n)
        return partialFactorial;
    return factorial(n - 1, n * partialFactorial);
}
```

```js
/*
 * 뉴턴의 반복 방법을 이용한 제곱근 구하기
 * 첫 번째 함수 computeSquareRoot()를 제외하고,
 * ("return computePositiveSquareRoot(x).toString() + imaginaryPart"
 * 함수 호출 외의 연산이 포함되어 있으므로 적합한 꼬리 호출이 성립되지 않습니다)
 * 나머지 두 함수(computePositiveSquareRoot(), iterativeSquareRoot())는 꼬리 호출을 사용합니다.
 * (computing Square Root using Newton’s Iterative method)
 */

"use strict";

function computeSquareRoot(x)
{
    if (!x)
        return "0";
    
    let imaginaryPart = "";
    if (x < 0) {
        x = -x;
        imaginaryPart = "i";
    }

    return computePositiveSquareRoot(x).toString() + imaginaryPart;
}

function computePositiveSquareRoot(x)
{
    let targetEpsilon = x / 10000000000;
    return iterativeSquareRoot(x, x / 2, targetEpsilon);
}

function iterativeSquareRoot(x, estimate, targetEpsilon)
{
    let newEstimate = ((x / estimate) + estimate) / 2;
    let delta = Math.abs(estimate - newEstimate);

    if (delta <= targetEpsilon)
        return newEstimate;
    
    return iterativeSquareRoot(x, newEstimate, targetEpsilon);
}
```

```js
// PTC를 이용하는 함수형 프로그래밍
// functional programming using PTC

"use strict";

function newList(count)
{
    let head = { value: count, next: null };
    while (--count)
        head = { value: count, next: head };
    return head;
}

let count = 100000;
let list = newList(count);

function contains(list, x)
{
    if (!list)
        return false;
    if (list.value == x)
        return true;
    return contains(list.next, x);
}
```

---

> 행복 코딩
