---
title: "Design Recursion"
date: 2020-01-01T15:54:01+09:00
---

[ Reference ] : <https://youtu.be/Vwfo_hrxuzg>

# Design Recursion

## 순환적 알고리즘 설계

- 적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야 함 (at least one base case)
- 모든 case는 결국 base case로 수렴해야 함


> 암시적(implicit) 매개변수를
명시적(explicit) 매개변수로 바꾸어라.

### 순차 탐색 (Sequential Search)

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

### 매개변수의 명시화: 순차 탐색

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

- data[begin] ~ data[end] target을 검색
- 즉, 검색구간의 시작점을 명시적(explicit)으로 지정합니다.
- search(data, 0, n-1, target) 앞의 iteration 함수와 동일한 기능

### 
