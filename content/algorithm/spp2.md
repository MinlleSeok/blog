---
title: "최단경로 알고리즘 - Shortest Path Problem 2"
date: 2020-03-02T10:41:18+09:00
categories: ["algorithm"]
---

# 최단경로 알고리즘 - Shortest Path Problem 2

- 벨만포드 알고리즘
- 모든 에지들에 대해서 릴렉스 하는 연산
- 최악의 경우 총 n - 1번

```r
BELLMAN-FORD(G, w, s)
    INITIALIZE-SINGLE-SOURCE(G, s)
    for i <- 1 to |V[G]| - 1
        do for each edge(u, v) ∈ E[G]
            do RELAX(u, v, w)
    for each edge(u, v) ∈ E[G]
        do if d[v] > d[u] + w(u, v)
            then return FALSE
    return TRUE
```

- 음수 사이클이 존재한다는 의미
- 시간복잡도 O(nm)

## Dijkstra의 알고리즘

- d[s] = 0
- 음수 가중치가 없다고 가정
- s로부터의 최단경로의 길이를 이미 알아낸 노드들의 집합 s를 유지.
- 맨 처음엔 S = zero.
- Loop invariant:
    - u ∈/ S 인 각 노드 u에 대해서 d(u)는 이미 S에 속한 노드들만 거쳐서
    - s로부터 u까지 가는 최단경로의 길이
- 정리 : d(u) = min(v ∈/ S) d(v)인 노드 u에 대해서, d(u)는 s에서 u까지의 최단경로의 길이이다.
- 증명 : (proof by contradiction)
    - 아니라고 하자. 그러면 s에서 u까지 다른 최단경로가 존재
- d(v) >= d(u) 이므로 모순
- d(u)가 최소인 노드 u ∈/ S를 찾고, S에 u를 추가
- S가 변경되었으므로 다른 노드들의 d(v)값을 갱신
- d(v) = min{d(v), d(u) + w(u, v)}
- 즉, 에지 (u, v)에 대해서 relaxation하면 Loop invariant가 계속 유지됨

```r
Gijkstra(G, w, s)
    for each u ∈ V do
        d[u] <- Infinity
        ㅠ[u] <- NIL
    end.
    S <- zero
    d[s] <- 0
    while |S| < n do    // while문은 n-1번 반복
        find u ∈/ S with the minimum d[u] value;    // 최소값 찾기 O(n)
        S <- S U {u}
        for each v ∈/ S adjacent to u do    // degree(u) = O(n)
            if d[v] > d[u] + w(u, v) then
                d[v] <- d[u] + w(u, v)
                ㅠ[v] <- u
            end.
        end.
    end.
```

- 시간복잡도 O(n^2)

```r
DIJKSTRA(G, w, s)
    INITIALIZE-SINGLE-SOURCE(G, s)
    S <- zero
    Q <- V[G]
    while Q =/ zero // Q는 최소우선순위큐
        do u <- EXTRACT-MIN(Q)  // O(logN)
            S <- S U {u}
            for each vertex v ∈ Adj[u]
                do RELAX(u, v, w)   // O(logN)
```

- Prim의 알고리즘과 동일함
- 우선순위 큐를 사용하지 않고 단순하게 구현할 경우 O(n^2)
- 이진 힙을 우선순위 큐로 사용할 경우 O(nlog(2)n + mlog(2)n)
- Fibonacci Heap을 사용하면 O(nlog(2)n + m)에 구현가능
