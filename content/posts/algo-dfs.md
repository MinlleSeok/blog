---
title: "알고리즘 - 깊이우선순회(DFS)"
date: 2020-02-11T12:02:13+09:00
---

# 알고리즘 - 깊이우선순회(DFS)

- 이진트리 순회 방법
    - in-order(dfs)
    - pre-order(dfs)
    - post-order(dfs)
    - level-order(bfs)
- 1. 출발점 s에서 시작합니다.
- 2. 현재 노드를 visited로 mark하고 인접한 노드들 중 unvisited 노드가 존재하면 그 노드로 갑니다.
- 3. 2번을 계속 반복합니다.
- 4. 만약 unvisited인 이웃 노드가 존재하지 않는 동안 계속해서 직전 노드로 되돌아갑니다.
- 5. 다시 2번을 반복합니다.
- 6. 시작노드 s로 돌아오고 더 이상 갈 곳이 없으면 종료합니다.

## DFS 깊이우선탐색

```r
DFS(G, v)
    visited[v] <- YES;
    for each node x adjacent to v do
        if visited[x] = NO then
            DFS(G, x);
    end.
end.
```

- 그래프가 disconnected 이거나 혹은 방향 그래프라면 DFS에 의해서 모든 노드가 방문되지 않을 수도 있음
- DFS를 반복하여 모든 노드 방문

```r
DFS-ALL(G)
{
    for each v < V
        visited[v] <- NO;
    for each v < V
        if (visited[v] = NO) then
            DFS(G, v);
}
```

- 시간복잡도 : O(n + m)
