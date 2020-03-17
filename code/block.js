// "use strict";   // Class 오브젝트와 같은 일부 오브젝트는 strict 모드에서 실행이 기본
// debugger;       // 바로 소스 코드를 라인 단위로 디버깅할 수 있어 편리함

let sports = "축구";
if (sports) {
    let sports = "농구";
    console.log("블록: ", sports);
}
console.log("글로벌: ", sports);

