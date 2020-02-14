---
title: "DAG(Directed Acyclic Graph)"
date: 2020-02-14T16:15:40+09:00
---

# DAG(Directed Acyclic Graph)

- 방향 사이클(directed cycle)이 없는 방향 그래프.
- 예: 작업들의 우선순위

## 위상정렬(topological ordering)

- DAG에서 노드들의 순서화 v(1), v(2), v(3), ... v(n),
- 단, 모든 에지(v(i), v(j))에 대해서 i < j가 되도록.
- 일반적으로 답이 유일하지 않습니다.

## 위상정렬 알고리즘 1

- 들어오는 edge : incoming edge
- 그 갯수 : indegree
- 나가는 edge : outgoing edge
- 그 갯수 : outdegree

- 1. indegree가 0인 노드를 찾습니다.(선행작업 없음)
- 2. 
- 3. 

```r
topologicalSort1(G)
{
    for <- 1 to n {
        진입간선이 없는 임의의 정점 u를 선택합니다;
        A[i] <- u;
        정점 u와 u의 진출간선을 모두 제거합니다;    
    }
    > 배열 A[1...n]에는 정점들을 위상정렬되어 있습니다.
}
```

- 수행시간 : O(n + m)
- indegree가 0인 노드가 존재하지 않다면?
- 알고리즘의 시간복잡도나 이런것들을 고려하지 않고
- 고수준 설명이 되어있습니다.
- 각 노드의 indegree를 먼저 계산해야 합니다.
- 어떻게 구현할 것인가?

## 위상정렬 알고리즘 2

```r
topologicalSort2(G)
{
    for each v < V
        visited[v] <- NO;
    make an empty linked list R;
    for each v < V  // > 정점의 순서는 상관없음
        if (visited[v] = NO) then
            DFS-TS(v, R);
}
```

```r
DFS-TS(v, R)
{
    visited[v] <- YES;
    for each x adjacent to v do
        if (visited[x] = NO) then
            DFS-TS(x, R);
    add v at the front of the linked list R;
}
```

- 알고리즘이 끝나면 연결 리스트 R에는 정점들이 위상정렬된 순서로 매달려 있다.
- 수행시간 : O(n + m)
