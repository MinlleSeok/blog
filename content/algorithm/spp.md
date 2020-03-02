---
title: "최단경로 알고리즘 - Shortest Path Problem"
date: 2020-02-28T12:32:26+09:00
---

# 최단경로

- 가중치 (방향) 그래프 G=(V, E), 즉 모든 에지에 가중치가 있음
- 경로 p=(V(0), V(1), ..., V(k))의 길이는 경로상의 모든 에지의 가중치의 합
- 노드 u에서 v까지의 최단경로의 길이를 S(u, v)라고 표시하자.

## 최단경로문제의 유형

- Single-source:
    - 하나의 출발 노드 s로부터 다른 모든 노드까지의 최단 경로를 찾아라.
    - 예 : Dijkstra의 알고리즘
- Single-destination:
    - 모든 노드로부터 하나의 목적지 노드까지의 최단 경로를 찾아라.
    - single-source 문제와 동일
- Single-pair:
    - 주어진 하나의 출발 노드 s로 부터 하나의 목적지 노드 t까지의 최단 경로를 찾아라
    - 최악의 경우 시간복잡도에서 single-source 문제보다 나은 알고리즘이 없음
- All-pairs:
    - 모든 노드 쌍에 대해서 최단 경로를 찾아라.

## 최단경로와 음수 가중치

- 음수 사이클(negative cycle)이 있으면 최단 경로가 정의되지 않음
- 알고리즘에 따라 음수 가중치가 있어도 작동하는 경우도 있고 그렇지 않은 경우도 있음

## 최단경로의 기본 특성

- 최단 경로의 어떤 부분경로도 역시 최단 경로입니다.
- 전체 u에서 v까지의 최단경로라면
- 그 경로 내의 x에서 y까지의 거리도 최단경로입니다.
- 최단 경로는 사이클을 포함하지 않는다. (음수 사이클이 없다는 가정하에서)

## Single-source 최단경로문제

- 입력 : 음수 사이클이 없는 가중치 방향그래프 G = (V, E)와 출발 노드 S <= V
- 목적 : 각 노드 v <= V에 대해서 다음을 계산합니다.
    - d[v]
        - 처음에는 d[s]=0, d[v]=Infinity로 시작합니다.
        - 알고리즘이 진행됨에 따라서 감소해갑니다. 하지만 항상 d[v] >= S(s, v)를 유지합니다.
        - 최종적으로는 d[v] = S(s, v)가 됩니다.
    - ㅠ[v] : s에서 v까지의 최단경로상에서 v의 직전 노드(predecessor)
        - 그런 노드가 없는 경우 ㅠ[v]=NIL

## 기본 연산 : Relaxation

```r
RELAX(u, v, w)
    if d[v] > d[u] + w(u, v)
        then d[v] <- d[u] + w(u, v)
            ㅠ[v] <- u
```

## Single-source 최단경로

- 대부분의 single-source 최단경로 알고리즘의 기본 구조
    - 1. 초기화 : d[s]=0, 노드 v=/s에 대해서 d[v]=Infinity, ㅠ[v]=NIL
    - 2. 에지들에 대한 반복적인 relaxation
- 알고리즘들 간의 차이는 어떤 에지에 대해서, 어떤 순서로 relaxation을 하느냐에 있음

## 기본 알고리즘

```r
Generic-Single-Source(G, w, s)
    INITIALISE-SINGLE-SOURCE(G, s)
    repeat
        for each edge(u, v) <= E
            RELAX(u, v, w)
    until there is no change.
```

- 질문 1 : 이렇게 계속 반복하면 최단 경로가 찾아지는가?
- 질문 2 : 몇번 반복해야 하는가?

## Bellman-Ford 알고리즘

```r
BELLMAN-FORD(G, w, s)
    INITIALIZE-SINGLE-SOURCE(G, s)
    for i <- 1 to |V[G]| - 1
        do for each edge (u, v) <= E[G]
            do RELAX(u, v, w)
    for each edge (u, v) <= E[G]
        do if d[v] > d[u] + w(u, v)
            then return FALSE
    return TRUE
```
