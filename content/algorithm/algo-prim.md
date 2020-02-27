---
title: "MST 알고리즘 - Prim의 알고리즘"
date: 2020-02-24T13:59:28+09:00
categories: ["algorithm"]
---

# MST 알고리즘 - Prim의 알고리즘

- 임의의 노드를 출발노드로 선택
- 출발 노드를 포함하는 트리를 점점 키워 감.
- 매 단계에서 이미 트리에 포함된 노드와 포함되지 않은 노드를 연결하는 에지들 중 가장 가중치가 작은 에지를 선택

> A = zero
> safe
> |A| = n - 1

## 왜 MST가 찾아지는가?

- Prim의 알고리즘의 임의의 한 단계를 생각해보자.
- A를 현재까지 알고리즘이 선택한 에지의 집합이라고 하고, A를 포함하는 MST가 존재한다고 가정하자.
- 출발 노드에 이미 연결된 노드와 그렇지 않은 노드를 연결하는 에지들 중 lightest edge

## 가중치가 최소인 에지 찾기

- V(A) : 이미 트리에 포함된 노드들
- V(A) 에 아직 속하지 않은 각 노드 v에 대해서 다음과 같은 값을 유지
    - key(v) : 이미 V(A) 에 속한 노드와 자신을 연결하는 에지들 중 가중치가 최소인 에지 (u, v)의 가중치
    - ㅠ(v) : 그 에지 (u, v)의 끝점 u
- 가중치가 최소인 에지를 찾는 대신
- key값이 최소인 노드를 찾습니다.

> key 값이 최소인 노드 f를 찾고,
> 에지 (f, ㅠ(f))를 선택합니다.

```r
MST-PRIM(G, w, r)
    for each u <= V do
        key[u] <- zero
        ㅠ[u] <- NIL
    end.
    V(A) <- {r}
    key[r] <- 0
    while |V(A)| < n do // while문은 n-1번 반복
        find u <=/ V(A) with the minimum key value; // 최소값 찾기 O(n)
        V(A) <- V(A) U {u}
        for each V <=/ V(A) adjacent to u do
            if key[v] > w(u, v) then
                key[v] <- w(u, v)
                ㅠ[v] <- u
            end.
        end.
    end.
```

- 시간복잡도 O(n^2)

## key 값이 최소인 원소를 찾기

- 최소 우선순위 큐를 사용
    - V - V(A)에 속한 노드들을 저장
    - Extract-Min : key값이 최소인

```r
MST-PRIM(G, w, r)
    for each u <= V[G]
        do key[u] <- Infinity
            ㅠ[u] <- NIL
    key[r] <- 0
    Q <- V[G]
    while Q =/ zero
        do u <- EXTRACT-MIN(Q)
            for each v <= Adj[u]
                do if v <= Q and w(u, v) < key[v]
                    then ㅠ[v] <- u
                        key[v] <- w(u, v)
                        // 우선순위큐에서 key값 decrease: O(logn)
```

## Prim의 알고리즘 : 시간복잡도

- 이진 힙(binary heap)을 사용하여 우선순위 큐를 구현한 경우
- while loop:
    - n번의 Extract-Min 연산 : O(nlogn)
    - m번의 Decrease-Key 연산 : O(mlogn)
- 따라서 시간복잡도 : O(nlogn + mlogn) = O(mlogn)
- 우선순위 큐를 사용하지 않고 단순하게 구현할 경우 : O(n^2)
- Fibonacci 힙을 사용하여 O(m + nlogn)에 구현가능[Fredman-Tarjan 1984]
