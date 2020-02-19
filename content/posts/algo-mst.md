---
title: "알고리즘 - 최소비용 신장 트리(MST)"
date: 2020-02-15T16:44:18+09:00
---

# 알고리즘 - 최소비용 신장 트리(MST)

- 입력 : n개의 도시, 도시와 도시를 연결하는 비용
- 문제 : 최소의 비용으로 모든 도시들이 서로 연결되게 합니다.

## 최소비용 신장 트리 (Minimum Spanning Tree)

- 해가 유일하지는 않음
- 무방향 가중치 그래프 G=(V,E)
- 각 에지 (u, v) < E 에 대해서 가중치 w(u, v)
- 문제 : 다음과 같은 조건을 만족하는 에지들의 부분집합 T < E 를 찾자.
    - 1. T에 속한 에지들에 의해 그래프의 모든 정점들이 서로 연결됩니다.
    - 2. 가중치의 합 이 최소가 됩니다.

## 왜 트리라고 부르나?

- 싸이클이 없는 연결된(connected) 무방향 그래프를 트리라고 부릅니다.
- MST 문제의 답은 항상 트리가 됩니다. 왜?
- 노드가 n개인 트리는 항상 n - 1개의 에지를 가집니다.

## Generic MST 알고리즘

- 어떤 MST의 부분집합 A에 대해서 A U {(u, v)}도 역시 어떤 MST의 부분집합이 될 경우
- 에지 (u, v)는 A에 대해서 안전하다(safe)고 합니다.
- Generic MST 알고리즘:
    - 1. 처음에는 A = zero입니다.
    - 2. 집합 A에 대해서 안전한 에지를 하나 찾은 후 이것을 A에 더합니다.
    - 3. 에지의 개수가 n - 1개가 될 때까지 2번을 반복합니다.

```r
GENERIC-MST(G, w)
    A <- zero
    while A does not form a spanning tree
        do find an edge(u, v) that is safe for A
            A <- A U {(u, v)}
    return A
```

## 안전한 에지 찾기

- 그래프의 정점들을 두 개의 집합 S와 V-S로 분할한 것을 컷(cut) (S, V-S)라고 부릅니다.
- 에지 (u, v)에 대해서 u < S이고, v < V-S일 때 에지 (u, v)는 컷 (S, V-S)를 cross한다고 말합니다.
- 에지들의 부분집합 A에 속한 어떤 에지도 컷 (S, V-S)를 cross하지 않을 때 컷 (S, V-S)는 A를 존중한다(respect)고 말합니다.

## 정리

- A가 어떤 MST의 부분집합이고, (S, V-S)는 A를 존중하는 컷이라고 하자.
- 이 컷을 cross하는 에지들 중 가장 가중치가 작은 에지 (u, v)는 A에 대해서 안전합니다.

## Kruskal 의 알고리즘

- 에지들은 가중치의 오름차순으로 정렬합니다.
- 에지들을 그 순서대로 하나씩 선택해갑니다. 단, 이미 선택된 에지들과 사이클(cycle)을 형성하면 선택하지 않습니다.
- n-1개의 에지가 선택되면 종료합니다.

## 왜 MST가 찾아지는가?

- Kruskal의 알고리즘의 임의의 한 단계를 생각해봅시다.
- A를 현재까지 알고리즘이 선택한 에지의 집합이라고 하고,
- A를 포함하는 MST가 존재한다고 가정합시다.
- cycle을 만들지 않는 lightest edge

## 사이클 검사

- 초기 상태 : 선택된 에지 없음
- 각각의 연결요소를 하나의 집합으로 표현
- {a} {b} {c} {d} {e} {f} {g} {h} {i}
- 동일한 집합에 속해있다면(이미 연결된 노드) 사이클을 만들게 됩니다.

## 사이클 검사 과정

- 1. 가중치가 최소인 에지 (h, g)를 고려합니다.
- 2. g와 h가 서로 다른 집합에 속합니다.
- 3. 에지 (g,h)를 선택하고, g와 h가 속한 집합을 합집합하여 하나의 집합으로 만듭니다.
- 반복
- 4. n-1 개의 에지가 선택되었으므로 종료합니다.

## Kruskal의 알고리즘

```r
MST-KRUSKAL(G, w)
    A <- zero
    for each vertex v < V[G]    // 각각의 노드들을 유일한 원소로 가지는 집합 생성
        do MAKE-SET(v)
    sort the edges of E into nondecreasing order by weight w
    for each edge(u,v) , taken in nondecreasing order by weight
        do if FIND-SET(u) =/ FIND-SET(v) // 노드 v가 속한 집합을 찾기
            then A <- A U {(u, v)}
                UNION(u, v) // u와 v가 속한 두 집합을 하나로 합침
    return A
```

## 서로소인 집합들의 표현

- 각 집합을 하나의 트리로 표현
- 예 : 2개의 집합
- disjoint set
- 공통의 원소가 없습니다.
- union - find

### 부가 설명

- 집합의 각 원소들이 트리의 노드가 됨, 누가 루트이고 누가 누구의 부모이든 상관없음.
- 트리의 각 노드는 자식노드가 아닌 부모 노드의 주소를 가짐 (상향식 트리)
- 루트노드는 부모노드를 자기 자신을 가리킵니다.
- 모든 트리를 하나의 배열로 표현
- 일차원 배열 : 각 키 인덱스에 부모의 위치(값)를 표현

## FIND_SET(v)

- 자신이 속한 트리의 루트를 찾음

```r
FIND-SET(x)
    if x =/ p[x]
        then p[x] <- FIND-SET(p[x])
    return p[x]
```

- O(h), h는 트리의 높이
- h는 최악의 경우 O(n)

## Union(u, v)

- 한 트리의 루트를 다른 트리의 루트의 자식 노드로 만듬

```r
UNION(u, v)
    x <- FIND-SET(u);
    y <- FIND-SET(v);
    p[x] <- y;
```

- 루트 노드를 찾은 이후에는 O(1)
- 하지만 루트를 찾는데 O(h)

## MAKE-SET(v)

- 1차원 배열을 만들고 각자 자신 인덱스 값으로 초기화

## weighted union

- 두 집합을 union할 때 작은 트리의 루트를 큰 트리의 루트의 자식으로 만듬 (여기서 크기란 노드의 개수)
- 각 트리의 크기(노드의 개수)를 카운트하고 있어야 합니다.

```r
WEIGHTED-UNION(u, v)
    x <- FIND-SET(u);
    y <- FIND-SET(v);
    if size[x] > size[y] then
        p[y] <- x;
        size[x] <- size[x] + size[y];
    else
        p[x] <- y;
        size[y] <- size[y] + size[x];
```

## Path Compression

```r
FIND-SET-PC(x)
    while x =/ p[x] do
        p[x] <- p[p[x]];
        x <- p[x];
    end.
    return p[x];
```

- 찾은 노드 경로의 높이를 반으로 줄여줍니다.

## Weighted Union with Path Compression (WUPC)

- M번의 union-find 연산의 총 시간복잡도는 O(N + Mlog*N), 여기서 N은 원소의 개수
- log*N = (log log log ... logN) 몇번 취하면 1이 되는지 횟수
- 거의 선형시간 알고리즘, 즉 한 번의 Find혹은 union이 거의 O(1)시간

## Kruskal의 알고리즘

- 시간복잡도
- Initialize A : O(1)
- First for loop : |V| MAKE-SETs O(n)
- Sort E : O(|E|log(2)|E|) O(nlogm)
- Second for loop : O(|E|) FIND-SETs and UNIONs O(m)
- O(|E|log(2)|E|)
- 에지들을 weight순으로 정렬할 때 가장 많이 걸립니다.
- O(mlogm) = O(nlogn)
- O(mlogn^2) = O(mlogn)