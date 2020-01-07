---
title: "Design Recursion"
date: 2020-01-01T15:54:01+09:00
---

[ Reference ] : <https://youtu.be/Vwfo_hrxuzg>

# Design Recursion

- Recursion을 어떻게 짜야할까?

## 순환적 알고리즘 설계

- 적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야 함 (at least one base case)
- 모든 case는 결국 base case로 수렴해야 함

```java
if () {
    return base_case;
} else {
    recursion();
}
```

> 암시적(implicit) 매개변수를
명시적(explicit) 매개변수로 바꾸어라.

## 순차 탐색 (Sequential Search)

- 배열에 내가 원하는 특정한 값이 있는지 검사
- 데이터들이 정렬되있다면 이진 검색
- 정렬되어있지 않다면(순서 조건) 하나씩 순서대로 검사

```java
int search(int [] data, int n, int target) {
    for (int i=0; i<n; i++)
        if (data[i] == target)
            return i;
    return -1;
}
```

- data[0] ~ data[n-1] target을 검색하는 것
- 검색 구간의 시작 인덱스 0은 보통 생략합니다.
- 즉, 암시적 매개변수입니다.

## 매개변수의 명시화: 순차 탐색

```java
int search(int [] data, int begin, int end, int target) {
    if (begin > end)
        return -1;
    else if (target == data[begin])
        return begin;
    else
        return search(data, begin+1, end, target);
}
```

- 맨 처음 search()를 호출할 때는.. 0 ~ n-1 => 1 ~ n-1 => 2 ~ n-1
- 자기 자신을 다시 호출할 때의 필요한 매개변수(시작 위치)까지 표현해야 합니다. 

- data[begin] ~ data[end] target을 검색
- 즉, 검색구간의 시작점을 명시적(explicit)으로 지정합니다.
- search(data, 0, n-1, target) 앞의 iteration 함수와 동일한 기능

## 순차 탐색 : 다른 버전

```java
int search(int [] data, int begin, int end, int target) {
    if (begin > end)
        return -1;
    else if (target == items[end])
        return end;
    else
        return search(data, begin, end-1, target);
}
```

## 순차 탐색 : 다른 버전 2

```java
int search(int [] data, int begin, int end, int target) {
    if (begin > end)
        return -1;
    else {
        int middle = (begin+end) / 2;
        if (data[middle] == target)
            return middle;
        int index = search(data, begin, middle-1, target);
        if (index != -1)
            return index;
        else
            return search(data, middle+1, end, target);
    }
}
```

## 매개변수의 명시화 : 최대값 찾기

```java
int findMax(int [] data, int begin, int end) {
    if (begin == end)
        return data[begin];
    else
        return Math.max(data[begin], findMax(data, begin+1, end));
}
```

## 최대값 찾기 : 다른 버전

```java
int findMax(int [] data, int begin, int end) {
    if (begin == end)
        return data[begin];
    else {
        int middle = (begin+end) / 2;
        int max1 = findNax(data, begin, middle);
        int max2 = findMax(data, middle+1, end);
        return Math.max(max1, max2);
    }
}
```

## 이진 검색 Binary Search

- 데이터가 크기 순으로 정렬되어 배열에 저장되어 있을 때 적용할 수 있는 검색 방법

```java
public static int binarySearch(String[] items, String target, int begin, int end) {
    if (begin > end)
        return -1;
    else {
        int middle = (begin+end) / 2;
        int compResult = target.compareTo(items[middle]);
        if (compResult == 0)
            return middle;
        else if (compResult < 0)
            return binarySearch(items, target, begin, middle-1);
        else
            return binarySearch(items, target, middle+1, end);
    }
}
```

- 모든 매개변수를 명시화해야 합니당.

```js
const binarySearchPrint = (items, target, begin, end) => {
    if (begin > end)
        return -1;
    else {
        const MIDDLE = (begin+end) / 2;
        const MIDDLE_VALUE = items[MIDDLE];
        if (target == MIDDLE_VALUE)
            return MIDDLE;
        else if (target < MIDDLE_VALUE)
            return binarySearchPrint(items, target, begin, MIDDLE-1);
        else
            return binarySearchPrint(items, target, MIDDLE+1, end);
    }
}
```
