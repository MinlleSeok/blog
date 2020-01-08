---
title: "타입스크립트 기초 - TypeScript basic"
date: 2019-12-18T21:34:00+09:00
modified: 2020-01-08T16:03:00+09:00
---

# 타입스크립트 기초 - TypeScript basic

## Typescript 부터 출발합니다

[Reference] : <https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html>

## Install

```bash
npm install -g typescript
```

- node.js가 설치되어 있는 환경에서 typescript를 npm 패키지 매니저로 전역(-g) 설치합니다.

## Compile

```bash
tsc helloworld.ts
```

- 컴파일 명령어는 tsc 입니다.

## greeter.ts

```ts
function greeter(person) {
	return "Hello, " + person;
}

let user = "Jane User";

// document.body.textContext = greeter(user);
console.log(greeter(user));
```

- 가장 기본적인 방법으로 함수에 인자 넣어 콘솔에 로그를 찍습니다.

터미널 환경에서 "tsc greeter.ts", "node greeter.js" 와 같은 방법으로 테스트 해볼 수 있습니다.

## Type annotations

```ts
function greeter(person: string) {
	return "Hello, " + person;
}

let user = [0, 1, 2];

console.log(greeter(user));
```

- : 뒤에 타입을 선언하네요, string 타입이 아니므로 컴파일 에러가 발생합니다.

## Interfaces

```ts
interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));
```

- 와우, 인터페이스를 구현할 수 있습니다!

## Classes

```ts
class Student {
	fullName: string;
	constructor(public firstName: string,
				public middleInitial: string,
				public lastName: string) {
					this.fullName = firstName + " " +
									middleInitial + " " +
									lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));
```

- 클래스로도 만들어집니다!

## greeter.html

```html
<!DOCTYPE html>
<html>
	<head>
		<title>TypeScript Greeter</title>
	</head>
	<body>
		<script src="greeter.js"></script>
	</body>
</html>
```

- Html 파일로 한 번 출력해볼까요.

:: greeter.ts

```ts
interface Person {
        firstName: string;
        lastName: string;
}

class Student implements Person {
        fullName: string;
        constructor(public firstName: string, 
					public middleInitial: string,
					public lastName: string) {
        				this.fullName = firstName + " " +
										middleInitial + " " +
										lastName;
        }
}

function greeter(person: Student) {
        return "Hello, " + person.fullName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```

- Student 클래스는 Person 인터페이스를 구현하고,  
	greeter함수는 Student타입을 받아서 document에 출력합니다.
- ```tsc greeter.ts``` 컴파일해서 index.html 을 브라우저에 띄워보세요.

---

$$행복 코딩
