---
title: "ECMAScript 6 - Arrow 함수"
date: 2020-03-13T15:29:12+09:00
---

# ECMAScript 6 - Arrow 함수

- arrow의 사전적 의미는 "화살, 화살표(=>)"이며
- 의미보다 표기가 더 어울립니다.
- 영어 발음보다 화살표가 더 직관적이므로 이 책에서는 "화살표 함수"로 표기합니다.

> (param) => { 코드 };  
> param => { 코드 };  
> () => { 코드 };  
> (param1, param2, , , , paramN) => { 코드 };  
> param => ( { key: value });  
> (param1, param2, ...rest) => { 코드 };  
> (param1, param2 = 123, , , paramN) => { 코드 };  
> ([one, two] = [1, 2]) => one + two;  
> ({ key: sum } = { key: 10 + 20 }) => { 코드 };

- 화살표 함수는 ``function(param) { 코드 }`` 형태를 축약한 것으로
- ``"(param) => { 코드 }"`` 형태로 작성합니다.
- 화살표 함수는 함수 이름이 없는 무명/익명(anonymous) 함수입니다.
- 함수를 호출하려면 함수 표현식과 같이 변수에 할당해야 합니다.
- ``"let fn = (param) => { 코드 }"``
- 같이 화살표 함수로 생성한 Function 오브젝트를 할다알 변수를 작성해야 합니다.
