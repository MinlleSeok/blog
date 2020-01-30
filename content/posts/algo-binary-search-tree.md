---
title: "알고리즘 - 이진검색트리(Binary Search Tree)"
date: 2020-01-30T12:48:31+09:00
---

# 알고리즘 - 이진검색트리(Binary Search Tree)

- 이진트리 순회하는 알고리즘
- 트리라는 자료구조
- 조직도, 가계도

## Dynamic Set

- 저장하는 데이터 자체가 계층 구조가 아닌
- 일종의 컨테이너(집합)
- 여러 개의 키(key)를 저장
- 다음과 같은 연산들을 지원하는 자료구조
- INSERT - 새로운 키의 삽입
- SEARCH - 키 탐색
- DELETE - 키의 삭제
- 예 : 심볼 테이블
- called Dynamic Set
- Dictionary
- Search Structure

## 시간 복잡도

- 정렬 안 된 배열 검색 : 순차검색 O(n)
- 정렬 안 된 배열 삽입 : 맨 뒤 O(1) 배열 복사 이동 고려 O(n)
- 정렬 안 된 배열 삭제 : 검색 고려하지 않고 마지막 데이터와 교체 O(1)
- 정렬된 배열 검색 : 이진검색 O(logn)
- 정렬된 배열 삽입 : 다른 값 위치 shift O(n)
- 정렬된 배열 삭제 : 다른 값 위치 shift O(n)
- 정렬 안 된 연결 리스트 검색 : O(n)
- 정렬 안 된 연결 리스트 삽입 : 맨 앞 O(1)
- 정렬 안 된 연결 리스트 삭제 : 검색 고려하지 않고 마지막 데이터와 교체 O(1)
- 정렬된 연결 리스트 검색 : n / 2 바로 탐색 불가 O(n)
- 정렬된 연결 리스트 삽입 : O(n)
- 정렬된 연결 리스트 삭제 : O(1)

## 다양한 방법들

- 정렬된 혹은 정렬되지 않은 배열 혹은 연결 리스트를 사용할 경우
- INSERT, SEARCH, DELETE 중 적어도 하나는 O(n)
- 이진탐색트리(Binary Search Tree), 레드-블랙 트리, AVL-트리 등의
- 트리에 기반한 구조들
- Direct Address Table, 해쉬 테이블 등

## 검색트리

- Dynamic set을 트리의 형태로 구현
- 일반적으로 SEARCH, INSERT, DELETE 연산이 트리의 높이(height)에 비례하는 시간복잡도를 가짐
- 이진검색트리(Binary Search Tree), 레드-블랙 트리(red-black tree), B-트리 등

## 이진검색트리 (BST)

- 이진 트리이면서
- 각 노드에 하나의 키를 저장
- 각 노드 v에 대해서 그 노드의 왼쪽 부트리(subtree)에 있는 키들은
- key[v]보다 작거나 같고, 오른쪽 부트리에 있는 값은 크거나 같습니다.

## SEARCH

```r
TREE-SEARCH(x: 노드(루트), k: 찾는 값)
    if x == NIL or k == key[x]
        then return x
    if k < key[x]
        then return TREE-SEARCH(left[x], k)
        else return TREE-SEARCH(right[x], k)
```

- 시간복잡도 : O(h), 여기서 h는 트리의 높이

## SEARCH - Iterative Version

```r
ITERATIVE-TREE-SEARCH(x, k)
    while x =/ NIL and k =/ key[x]
        do if k < key[x]
            then x <- left[x]
            else x <- right[x]
    return x
```

- skewed tree : 한쪽으로만 치우친 트리

## 최소값

```r
TREE-MINIMUM(x)
    while left[x] =/ NIL
        do x <- left[x]
    return x
```

- 최소값은 항상 가장 왼쪽 노드에 존재
- 시간 복잡도 : O(n)

## 최대값

```r
TREE-MAXIMUM(x)
    while right[x] =/ NIL
        do x <- right[x]
    return x
```

- 최대값은 항상 가장 오른쪽 노드에 존재
- 시간 복잡도 : O(n)

## Successor

- 노드 x의 successor란 key[x]보다 크면서 가장 작은 키를 가진 노드
- 모든 키들이 서로 다르다고 가정
- 노드 x의 오른쪽 부트리가 존재할 경우, 오른쪽 부트리의 최소값
- 오른쪽 부트리가 없는 경우, 어떤 노드 y의 왼쪽 부트리의 최대값이 x가 되는 그런 노드 y가 x의 successor
- 부모를 따라 루트까지 올라가면서 처음으로 누군가의 왼쪽 자식이 되는 노드
- 정리 ) 위로 오르다가 처음으로 왼쪽 자식이 된 순간, 그 부모 노드가 successor
- 그런 노드 y가 존재하지 않을 경우 successor가 존재하지 않음 (즉, x가 최대값)

```r
TREE-SUCCESSOR(x)
    if right[x] =/ NIL
        then return TREE-MINIMUM(right[x])
    y <- p[x]
    while y =/ NIL and x = right[y]
        do x <- y
           y <- p[y]
    return y
```

- 시간복잡도 : O(h)

## Predecessor

- 나보다 작으면서 가장 큰 노드
- 노드 x의 predecessor란 key[x]보다 작으면서 가장 큰 키를 가진 노드
- Successor와 반대

## INSERT

- 2개의 포인터 x, y를 사용
- 이진 검색 트리의 삽입에서는 기존의 노드들은 전혀 건드리지 않습니다.
- y가 x의 한 칸 뒤 노드를 저장합니다.

## 수도 코드

```r
TREE-INSERT(T: Tree, z: insert할 노드)
    y <- NIL
    x <- root[T]
    while x =/ NIL
        do y <- x
            if key[z] < key[x]
                then x <- left[x]
                else x <- right[x]
    p[z] <- y
    if y == NIL
        then root[T] <- z   // Tree T was empty
        else if key[z] < key[y]
            then left[y] <- z
            else right[y] <- z
```

- 시간복잡도 : O(h)

## DELETE

- 특정한 노드를 이진 검색 트리에서 삭제하는 경우
- 먼저 검색하고 노드를 삭제
- Case 1 : 자식노드가 없는 경우
- 4를 삭제하는 경우 : 그냥 삭제
- Case 2 : 자식노드가 1개인 경우
- 7을 삭제하는 경우 : 자신의 자식노드를 원래 자신의 위치로
- Case 3 : 자식노드가 2개인 경우
- 삭제하려는 노드의 sucessor
- 삭제하려는 노드의 successor는 최대 1개의 자식노드를 가짐
- successor의 값을 삭제하려는 노드로 copy
- successor 노드를 대신 삭제한다. Case 1 or Case 2

```r
TREE-DELETE(T: 트리, z: 삭제할 노드)
    if left[z] == NIL or right[z] == NIL
        then y <- z
        else y <- TREE-SUCCESSOR(z)
    if left[y] =/ NIL
        then x <- left[y]
        else x <- right[y]
    if x =/ NIL
        then p[x] <- p[y]
    if p[y] == NIL
        then root[T] <- x
        else if y == left[p[y]]
                then left[p[y]] <- x
                else right[p[y]] <- x
    if y =/ z
    then key[z] <- key[y]
        copy y's satelite data into z
    return y
```

## BST

- 각종 연산의 시간복잡도 O(h)
- 그러나, 최악의 경우 트리의 높이 h=O(n)
- 균형잡힌(balanced) 트리
- 레드-블랙 트리 등
- 키의 삽입이나 삭제시 추가로 트리의 균형을 잡아줌으로써 높이를 O(log(2)n)으로 유지
