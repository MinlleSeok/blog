---
title: "탐욕 알고리즘 - Greedy Algorithm"
date: 2020-01-22T22:39:30+09:00
categories: ["algorithm"]
---

# 탐욕 알고리즘 - Greedy Algorithm

- 현재 상황에서 가장 좋아 보이는 답을 선택하는 방법
- 각 부분에서 최적을 선택하면 전체에서도 최적이 될 것이라는 가정을 전제로 합니다.
- 선택은 항상 하위 문제에 대한 해답이 나오기 전에 선택됩니다.

## 탐욕 선택

- 하위 문제를 풀기 전에 선택을 합니다.
- 항상 하나의 문제만을 고려합니다.

## 동적 프로그래밍

- 하위 문제를 풀고 나서 선택을 합니다.
- 동시에 여러 개의 하위 문제를 고려합니다.

## 0-1 배낭 채우기 문제 (0-1 knapsack)

- 도둑이 상점에서 n개의 물건을 훔친다고 합니다.
- 1. 10kg $60
- 2. 20kg $100
- 3. 30kg $120
- 가방 최대 50kg

### 풀이

- 제일 비싼거부터 시작
- 30kg + 20kg = $220
- 20kg + 10kg = $160
- 30kg + 10kg = $180

## 가중 무방향성 그래프 (Weighted undirected graph)

- G = (V, E)
- 간선 집합에

### 신장트리(Spanning Trees)

- 트리가 그래프 G의 모든 정점을 포함할 때 그래프 G에 속한 

### 최소 신장 트리

- 각각의 트리의 웨이트값을 모두 더해 그 중 최소값
- 일반적인 MST

```t
GENERIC-MST(G, W)
A <- 0
while A does not form a spanning tree
    do find an edge (u, v) that is safe for A
    A <- A {{u, v}}
return A
```

- 한 번에 하나의 간선

## 프림 알고리즘

- cross, cut 이라고 부르는 것을 이용해서 최소값을 찾아 연결
- 간선 중에 가장 작다면 가벼운 간선(light edge)
- 한 버텍스 씩 추가하면서 모든 정점이 포함될 때 까지

```t
MST-PRIM(G, w, r)
    for each u < V[G]
        do key[u] <-
```

- 큐 사용

## 쿠르스칼 알고리즘(Kruskal's Algorithm)

- set 사용
- weight값으로 정렬 모든 간선을 검사
