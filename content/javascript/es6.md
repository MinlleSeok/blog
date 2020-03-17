---
title: "ECMAScript 6 - var, let, const"
date: 2020-03-13T12:40:07+09:00
---

# ECMAScript 6 - var, let, const

[1. var 키워드](##1.-var-키워드)  
[2. let 키워드](##2.-let-키워드)  
[3. 블록 스코프](3.-블록-스코프)  
[4. let과 this 키워드](##4.-let과-this-키워드)  
[5. function](##5.-function)  
[6. try-catch](##6.-try-catch)  
[7. switch-case](##7.-switch-case)  
[8. 호이스팅](##8.-호이스팅)  
[9. for()](##9.-for())  
[10. const](##10.-const)

- 자바스크립트 코드 실행되려면
    - 코드 컴파일
    - 실행할 자바스크립트 엔진이 필요
    - ECMA 262 스펙
- ES6
    - 객체지향 언어의 장점을 적극적으로 도입
    - 효율적인 메모리 사용에 중점
- 빌트인 오브젝트
    - 엔진이 사전에 오브젝트로 생성한 것
    - 사전 처리를 하지 않고 바로 사용할 수 있는 것
    - Function, Object, Array, Number, String 등의 오브젝트
- object
    - 첫 문자가 영문 소문자이고 빌트인 오브젝트로 생성한 오브젝트를 의미
    - 첫 문자가 대문자인 Object는 {key: value} 형태를 의미
- 인스턴스
    - new 연산자와 생성자 함수로 인스턴스를 생성합니다.
    - new 연산자로 생성한 오브젝트를 인스턴스로 표기
- 프로퍼티 key와 name
    - var obj = { dogs: "Retriever" }
    - dogs: 프로퍼티 키(key) 또는 프로퍼티 이름 (문자열 타입의 이름과 Symbol 값을 포함)
    - "Retriever": 프로퍼티 값
- 함수와 메서드
    - function get() {} : 함수
    - Array.isArray() : 정적 메서드
    - 오브젝트의 prototype에 연결된 함수 : 메서드

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>타이틀</title>
    <script src="code.js" defer></script>
</head>
<body>
</body>
</html>
```

```js
"use strict";   // Class 오브젝트와 같은 일부 오브젝트는 strict 모드에서 실행이 기본
debugger;       // 바로 소스 코드를 라인 단위로 디버깅할 수 있어 편리함

```

## 1. var 키워드

- 변수를 선언할 때 사용
- 로컬 변수와 글로벌 변수로 구분
- 로컬 변수 : 함수 또는 오브젝트를 스코프로 사용하려는 의도
- 글로벌 변수 : 프로그램 전체에서 공용으로 사용하려는 의도

```js
// "use strict";
one = 100;
function get() {
    one = 300;
    console.log("함수 : ", one);
}
get();
console.log("글로벌 : ", one);
```

- var 키워드가 없으므로 글로벌 변수
- use strict를 사용할 때, 키워드 없이 변수를 선언하면 에러가 발생

## 2. let 키워드

``js let dogs = "리트리버";``

- 함수 안에 작성한 let 변수는 함수가 스코프입니다.
- 함수 안에 ``js if(a==b) { let sports = "축구" }``형태로 코드를 작성했을 때,
- sports 변수는 함수가 스코프가 아니라 if 문의 블록 {}이 스코프입니다.
- 블록 {} 밖에 같은 이름의 변수가 있어도 스코프가 다르므로
- 변수 각각에 값을 설정할 수 있으며 변수 값이 유지됩니다.
- 블록 안에 블록을 계층적으로 작성하면 각각의 블록이 스코프입니다.
- let 변수는 호이스팅(hoisting)되지 않습니다.

> let name1 [= value1] [, name2 [= value2]] [, nameN [= valueN]];

- name1, name2, nameN에 변수 이름을 작성합니다.
- 같은 스코프에 같은 이름을 작성할 수 없으며 이를 Temporal dead zone 이라고 합니다.
- "ABC", 123과 같이 직접 값을 작성할 수 있습니다.
- (1 + 2 + 3)과 같이 표현식으로 작성할 수도 있습니다. (평가 결과를 값으로 사용)
- 변수에 초깃값을 할당하지 않고 선언만 할 수 있습니다.

```js
"use strict";
let book;
let sports = "축구";
sports = "농구";

// let sports = "배구";
let one = 1, two = 2, three;
// let four = 4, let five = 5;
// let six = 6, var seven = 7;
```

- 변수에 값을 할당하지 않고 선언만 하면 디폴트(Default)값으로 undefined
- 자바스크립트에서 undefined는 값입니다.
- 같은 변수 명을 let 키워드로 또 선언하였을 경우 SyntaxError 구문(문법) 에러가 컴파일 단계에서 발생합니다.
- 여러 개의 let 변수를 선언할 때, let 키워드를 변수마다 사용하면 SyntaxError 발생합니다.
- let 키워드, var 키워드 동시에 사용하면 에러가 납니다.

## 3. 블록 스코프

- let 변수를 선언하는 가장 큰 목적은 스코프입니다.

```js
let sports = "축구";
if (sports) {
    let sports = "농구";
    console.log("블록: ", sports);
}
console.log("글로벌: ", sports);
```

- 특히 {} 중괄호 블록 스코프에 많이 사용됩니다.

## 4. let과 this 키워드

```js
var music = "음악";
console.log(this.music);

let sports = "축구";
console.log(this.sports);
```

- var 변수는 this(글로벌 오브젝트 참조)에 잡히지만
- let 변수는 잡히지 않습니다.

## 5. function

- 함수도 스코프를 가지므로 하나의 블록 스코프

```js
let sports = "축구", music = "재즈";
function get() {
    let music = "클래식";
    console.log(music);
    console.log(sports);
}
get();
```

- 스코프 내에 변수가 없으면 가장 가까운 스코프에 있는 변수를 먼저 사용

```js
"use strict";
var sports = "축구";
let music = "재즈";

function get() {
    var sports = "농구";
    let music = "클래식";
    console.log("1:", sports);
    console.log("2:", this.sports);
    console.log("3:", this.music);
};
window.get();
get();
```

> 1:농구  
> 2:축구  
> 3:undefined  
> 1:농구  
> 에러발생 (이것은 출력되지 않습니다)

- strict 모드에서는 this가 볼 수 있도록 오브젝트 참조를 명시해줘야 합니다.
- ``js get()``는 에러가 발생합니다.

## 6. try-catch

- try 블록 {} 기준으로 블록 스코프를 갖습니다.
- catch 블록은 스코프를 갖지 않으며 try 블록 스코프에 속합니다.

```js
let sports = "축구";
try {
    let sports = "농구";
    console.log(sports);
} catch (e) { };
console.log(sports);
```

> 농구  
> 축구

## 7. switch-case

- switch 블록이 블록 스코프입니다.
- switch 안의 case는 별도의 스코프를 갖지 않으며 switch의 스코프에 속합니다.

```js
var count = 1;
let sports = "축구";
switch (count) {
    case 1:
        let sports = "농구";
        console.log(sports);
};
console.log(sports);
```

> 농구  
> 축구

## 8. 호이스팅

- 자바스크립트는 소스 코드를 위에서 아래로 순차적으로 실행합니다.
    - 따라서 호출될 함수를 작성한 후, 아래에서 함수를 호출해야 함수가 호출됩니다.
    - 하지만 함수 선언문은 함수를 호출하는 코드를 위에 작성하고 호출될 함수를 아래에 작성해도
    - 함수가 호출됩니다. 이를 호이스팅(hoisting)이라고 합니다.
- var 변수는 함수 선언문과 차이가 있습니다.
    - 변수를 사용하는 코드를 위에 작성하고 아래에 변수를 선언해도 에러가 나지 않습니다.
    - 단, 변수 값이 undefined 입니다.
    - 함수 표현식에도 마찬가지입니다.
- 반면, let 변수는 호이스팅이 되지 않습니다.
    - 즉, let 변수를 사용하는 코드를 위에 작성하고
    - 아래에 변수를 선언하면 에러가 발생합니다.

```js
console.log(sports);
var sports = "스포츠";

console.log(music);
let music = "음악";
```

> undefined  
에러 발생(이것이 출력되는 것은 아닙니다)

## 9. for()

- ``for (var k = 0; k < 5; k++) {}``
- ``for (let k = 0; k < 5; k++) {}``
- for() 문에서 let 변수는 반복할 때마다 스코프를 갖는 반면,
- var 변수는 스코프를 갖지 않습니다.

```html
<ul>
    <li>1~10</li>
    <li>11~20</li>
    <li>21~30</li>
</ul>
```

```js
var nodes = document.querySelector("ul");
for (var k = 0; k < nodes.children.length; k++) {
    var el = nodes.children[k];
    el.onclick = function(event) {
        event.target.style.backgroundColor = "yellow";
        console.log(k);
    }
};
```

> 3

- 어떤 엘리먼트를 클릭하든 k의 출력이 변수의 최종 값 3이 됩니다.
- ``for (let k = 0; k < 5; k++) {}`` 로 교체해주면
- let 변수는 스코프를 갖기 때문에 사용한 k 변수 값을 출력합니다.

> 0  
> 2  
> 1

## 10. const

> const name1 = value1 [, name2 = value2 [, nameN [= valueN]]];

- const 키워드는 변수에 할당된 값을 변경할 수 없습닏.
- const 변수에 할당된 값은 상수가 됩니다.
- const 변수는 선언만 할 수 없으며 초깃값을 할당해야 합니다.
- const가 값을 변경할 수 없다는 점을 제외하면
- let 키워드와 기능이 같으며 스코프도 같습니다.
- 관례적으로 상수의 변수 이름을 영문 대문자로 표기하지만,
- const 키워드로 구분할 수 있으므로 사용하지 않아도 됩니다.

```js
const SPORTS = "축구";
try {
    SPORTS = "농구";
} catch (e) {
    console.log("const 재할당 불가");
}
```

> const 재할당 불가

```js
const obj = { language: "한글" };
try {
    obj = {};
} catch (e) {
    console.log("const 재할당 불가");
}
obj.language = "영어";
console.log(obj.language);
```

> const 재할당 불가  
> 영어

- 프로퍼티에는 값을 할당할 수 있습니다.
