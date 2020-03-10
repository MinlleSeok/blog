---
title: "최단경로 알고리즘 - Shortest Path Problem 3"
date: 2020-03-03T11:04:33+09:00
---

# 최단경로 알고리즘 - Shortest Path Problem 3

- all to all 알고리즘

## Floyd-Warshall Algorithm

- 가중치 방향 그래프 G=(V, E), V={1, 2, ..., n}
- 모든 노드 쌍들간의 최단경로의 길이를 구함
- d^k[i, j]
    - 중간에 노드집합 {1, 2, ..., k}에 속한 노드들만 거쳐서
    노드 i에서 j까지 가는 최단경로의 길이
- d^0[i, j] = {if (i, j) ∈ E => W(i, j), Infinity}
- d^k[i, j] = min{d^(k-1)[i, j], d^(k-1)[i, k] + d^(k-1)[k, j]}
    - 중간정점들이 모두 {1, 2, ..., k-1}에 속함
    - 중간정점들이 모두 {1, 2, ..., k}에 속함
- d^n[i, j] = S(i, j)
- 중간에 노드집합 {1, 2, ..., k}에 속한 노드들만 거쳐서 노드
- i에서 j까지 가는 최단경로는 두가지 경우가 있음:
- 노드 k를 지나는 경우와 지나지 않는 경우

## Floyd-Warshall Algorithm

- d^k[i, j] = min{d^(k-1)[i, j], d^(k-1)[i, k] + d^(k-1)[k, j]}

```r
FloydWarshall(G)
{
    for i <- 1 to n
        for j <- 1 to n
            d^0[i, j] <- W(i, j);
    for k <- 1 to n // 중간정점 집합 {1, 2, ..., k}
        for i <- 1 to n
             for j <- 1 to n
                d^k[i, j] = min{d^(k-1)[i, j], d^(k-1)[i, k] + d^(k-1)[k, j]};
}
```

- 시간복잡도 : O(n^3)

```r
FloydWarshall(G)
{
    for i <- 1 to n
        for j <- 1 to n
            d[i, j] <- w(i, j);
    for k <- 1 to n // 중간정점 집합 {1, 2, ..., k}
        for i <- 1 to n
             for j <- 1 to n
                d[i, j] = min{d[i, j], d[i, k] + d[k, j]};
}
```

## 경로 찾기

```r
FloydWarshall(G)
{
    for i <- 1 to n
        for j <- 1 to n
            d[i, j] <- w(i, j);
            ㅠ[i, j] <- NIL;
    for k <- 1 to n // 중간정점 집합 {1, 2, ..., k}
        for i <- 1 to n
             for j <- 1 to n
                if d[i, j] > d[i, k] + d[k, j] then
                    d[i, j] = d[i, k] + d[k, j];
                    ㅠ[i, j] = k;
}
```

```r
Print-PATH(s, t, ㅠ)
{
    if ㅠ[s, t] = NIL then
        return;
    Print-PATH(s, ㅠ[s, t]);
    print(ㅠ[s, t]);
    Print-PATH(ㅠ[s, t], t);
}
```

- s에서 t까지 가는 경로가 존재한다는 가정하에
- 최단경로사이의 중간노드들 (s와 t자신은 제외)을 출력함
