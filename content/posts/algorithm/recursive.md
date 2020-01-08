---
title: "Recursive"
date: 2019-12-22T23:50:01+09:00
modified: 2020-01-08T16:03:00+09:00
---

# Recursive Thinking

[ Reference ] : https://youtu.be/tuzf1yLPgRI

## 절차적 언어 ? Procedure Language

: 어떤 일을 하는 절차

### 프로그래밍에서의 관점

- 객체 지향 : 객체들 간의 상호작용
- Recursion : 순환적인 관점

### Recursion은 수학함수 계산에만 유용한가

- 수학함수뿐 아니라 다른 많은 문제들을   recursion으로 해결할 수 있습니다.

## 문자열의 길이 계산

:: pesudo code

```t
if the string is empty
    return 0;
else
    return 1 plus the length of the string that
        excludes the first character;
```

- 순환적인 문자열 길이 계산 알고리즘

:: length.java

```java
public static int length(String str) {
    if (str.equals(""))
        return 0;
    else
        return 1 + length(str.substring(1));
}
```

length("ace")  
return 1 + length("ce")  
return 1 + length("e")
return 1 + length("")

## 문자열의 프린트

```java
public static void printChars(String str) {
    if (str.length() == 0)
        return;
    else {
        System.out.print(str.charAt(0));
        printChars(str.substring(1));
    }
} 
```

## 문자열을 뒤집어 프린트

```java
public static void printCharsReverse(String str) {
    if (str.length() == 0)
        return;
    else {
        printCharsReverse(str.substring(1));
        System.out.print(str.charAt(0));
    }
}
```

## 2진수로 변환하여 출력

```java
public void printInBinary(int n) {
    if (n < 2)
        System.out.print(n);
    else {
        printInBinary(n/2);
        System.out.print(n%2);
    }
}
```

## 배열의 합 구하기

```java
public static int sum(int n, int [] data) {
    if (n <= 0)
        return 0;
    else
        return sum(n-1, data) + data[n-1];
}
```

## 데이터파일로부터 n개의 정수 읽어오기

```java
public void readFrom(int n, int [] data, Scanner in) {
    if (n == 0)
        return;
    else {
        readFrom(n-1, data, in);
        data[n-1] = in.nextInt();
    }
}
```

## Recursion vs Iteration

- 모든 순환 함수는 반복문(iteration)으로 변경 가능
- 그 역도 성립함. 즉 모든 반복문은 recursion으로 표현 가능함.
- 순환함수는 복잡한 알고리즘을 단순하고 알기쉽게 표현하는 것을 가능하게 함
- 하지만 함수 호출에 따른 오버헤드가 있음 (매개변수 전달, 액티베이션 프레임 생성 등)

---

<p style="text-align: center">행복 코딩</p>
