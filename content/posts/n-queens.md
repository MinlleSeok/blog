---
title: "N-Queens Problem"
date: 2020-01-11T14:24:45+09:00
---

# N-Queens Problem

- N x N 체스 보드
- N = 8
- 동일한 행, 동일한 대각선, 동일한 열 빼놓고 말을 놓는 방법

## 4 x 4

- 하나의 행마다 정확히 하나의 말
- 서로 다른 경우의 수 : N의 N승
- Backtracking : 최근에 내렸던 결정을 번복하고, 지나온 궤적을 되돌아 나간다.

## 상태 공간 트리

- 상태공간트리 : 찾는 해를 포함하는 트리.
- 즉, 해가 존재한다면 그것은 반드시 이 트리의 어떤 한 노드에 해당함
- 따라서 이 트리를 체계적으로 탐색하면 해를 구할 수 있음

### 상태 공간 트리의 모든 노드를 탐색해야 하는 것은 아님

- (1,1) (2,1) -> non-promising
- (1,1) (2,2) -> infeasible: 꽝
- (1,1) (2,3) -> continue...

## 되추적 기법(Backtracking)

- 상태공간 트리를 깊이 우선 방식으로 탐색하여 해를 찾는 알고리즘

### 깊이 우선 탐색

- recursion
- stack 자료구조 이용

## Design Recursion

```r
// 매개변수는 내가 현재 트리의 어떤 노드에 있는지를 지정해야 한다.
return type queens( arguments )
{
    // 도착한 노드의 꽝 체크
    if non-promising
        report failure and return;
    // 답
    else if success
        report answer and return;
    // 계속 진행
    else
        visit children recursively;
}
```

```r
int [] cols = new int [N+1];
return type queens( int level )
{
    // 도착한 노드의 꽝 체크
    if non-promising
        report failure and return;
    // 답
    else if success
        report answer and return;
    // 계속 진행
    else
        visit children recursively;
}
```

- 매개변수 level은 현재 노드의 
- 1번에서 level 말이 어디에 놓였는지는 전역변수 배열 cols로 표현하자.
- cols[i] = j는 i번 말이 (i행, j열)

```r
int [] cols = new int [N+1];
boolean queens( int level )
{
    // 도착한 노드의 꽝 체크
    if (!promising(level))
        return false;
    // 답
    else if success
        report answer and return;
    // 계속 진행
    else
        visit children recursively;
}
```

```r
int [] cols = new int [N+1];
boolean queens( int level )
{
    // 도착한 노드의 꽝 체크
    if (!promising(level))
        return false;
    // 답 - 모든 말이 놓였다는 의미, 성공
    else if (level == N)
        return true;
    // 계속 진행
    else
        visit children recursively;
}
```

```r
int [] cols = new int [N+1];
boolean queens( int level )
{
    // 도착한 노드의 꽝 체크
    if (!promising(level))
        return false;
    // 답 - 모든 말이 놓였다는 의미, 성공
    else if (level == N)
        return true;
    // level+1번째 말을 각각의 열에 놓은 후 recursion을 호출한다.
   for (int i=1; i<=N; i++) {
       cols[level+1] = i;
       if (queens(level+1))
            return true;
   }
   return false;
}
```

```r
// 1 ~ level - 1
boolean promising( int level )
{
    for (int i=1; i<level; i++) {
        if (cols[i] == cols[level])
            return false;
        else if on the same diagonal
            return false;
    }
    return true;
}
```

- 대각선 구하기
- cols[level] 과 cols[i]
- level-i = | cols[level] - cols[i] |

```r
boolean promising(int level)
{
    for (int i=1; i<level; i++) {
        if (cols[i] == cols[level])
            return false;
        else if (level-i == Math.abs(cols[level]-cols[i]))
            return false;
    }
    return true;
}
```
