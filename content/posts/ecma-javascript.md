---
title: "Javascript와 ECMAScript - 알아보기"
date: 2020-01-06T23:50:45+09:00
modified: 2020-01-08T16:03:00+09:00
---

# Javascript와 ECMAScript - 알아보기

## ECMAScript 와 JavaScript

### JavaScript

<https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript>

- 복잡한 무언가(주기적으로 내용이 갱신되는 기능이나 능동적인 지도, 변화하는 2D/3D 그래픽, 동영상 등)를 웹페이지에 적용할 수 있게 하는 스크립트 혹은 프로그래밍 언어입니다.

#### 기본 작성 형태

```js
// HTML 요소 중 p태그를 선택
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    //'Enter a new name'과 입력란 출력하여 입력받은 값을 name에 저장
    let name = prompt('Enter a new name');

    // para(p태그)에 새로운 문자열 저장
    para.textContent = `Player 1: ${name}`;
}
```

### ECMAScript

- 자바스크립트(Netscape)와 JScript(Microsoft)를 원천 기술로 기반합니다.
- 자바스크립트의 언어 명세 표준화 작업이라고 볼 수 있습니다.

#### ES6(ECMAScript2015) 추가 사항

- 모듈(modules)
- 클래스 선언(class declarations)
- 렉시컬 블록 스코핑(lexical block scoping)
- 반복기 및 발생기(iterators and generators)
- 비동기 프로그래밍을 위한 프로미스(promises for asynchronous programming)
- 디스트럭쳐링 패턴(destructuring patterns)
- 적절한 꼬리 호출(proper tail calls)

<!-- ## View Template Engine -->

---

> 행복 스크립팅
