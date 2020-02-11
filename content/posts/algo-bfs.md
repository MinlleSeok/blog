---
title: "알고리즘 - 그래프 순회 (Graph Traversal)"
date: 2020-02-11T11:57:36+09:00
---

# 알고리즘 - 그래프 순회 (Graph Traversal)

- 순회(traversal)
 - 그래프의 모든 노드들을 방문하는 일
- 대표적 두 가지 방법
 - BFS (Breadth-First Search, 너비우선순회)
 - DFS (Depth-First Search, 깊이우선순회)

## 너비우선순회 (BFS)

- BFS 알고리즘은 다음 순서로 노드들을 방문
 - L(0) = {s}, 여기서 s는 출발 노드
 - L(1) = L(0)의 모든 이웃 노드들
 - L(2) = L(1)의 이웃들 중 L(0)에 속하지 않은 노드들
 - ...
 - L(i) = L(i - 1)의 이웃들 중 L(i - 2)에 속하지 않는 노드들
 - 동심원 형태

## 큐를 이용한 너비우선순회

- s = 1
- 체크는 이미 방문된 노드라는 표시
- 1. check the start node;
- 2. insert the start node into the queue;

```r
while the queue is not empty do
	remove a node v from queue;
	for each unchecked neighbour w of v do
		check and insert w into the queue;
```

## 너비우선순회

```r
BFS(G, s)	// 그래프 G와 출발 노드 s
	Q <- empty queue;
	Enqueue(Q, s);
	while Q =/ empty do
		u <- Dequeue(Q)
		for each v adjacent to u do
			if v is unvisited then
				mark v as visited;
				Enqueue(Q, v);
			end.
		end.
	end.
```

## BFS와 최단경로

s에서 L(i)에 속한 노드까지의 최단 경로의 길이는 i입니다.
여기서 경로의 길이는 경로에 속한 에지의 개수를 의미합니다.
BFS를 하면서 각 노드에 대해서 최단 경로의 길이를 구할 수 있습니다.

## BFS와 최단경로

입력 : 방향 혹은 무방향 그래프 G = (V, E), 그리고 출발 노드 S < V
출력 : 모든 노드 v에 대해서
d[v] = s로부터 v까지의 최단 경로의 길이(에지의 개수)
t[v] = s로부터 v까지의 최단경로상에서 v의 직전 노드(predecessor)

```r
BFS(G, s)
	Q <- empty queue;
d[s] < - 0;	// distance from s to s is 0
t[s] <- null;	// no predecessor of s
Enqueue(Q, s);
while Q =/ empty do
	u <- Dequeue(Q)
	for each v adjacent to u do
		if v is unvisited then
			mark v as visited;
			d[v] <- d[u] + 1;	// distance to v
			t[v] <- u;	// u is the predecessor of v
			Enqueue(Q, v);
	end.
end.	// O(n + m) with adjacent list
```

## 시간복잡도

```r
BFS(G, s)
	Q <- empty queue;
	for each node u do
		d[u] <- -1;
		t[u] <- null;
	end.
	d[s] <- 0; t[s] <- null;
	Enqueue(Q, s);
	while Q =/ empty do	// while문을 한 번 돌 때마다 큐에서 하나를 꺼내므로 while문은 최대 n번 돕니다.
		u <- Dequeue(Q)
		for each v adjacent to u do	// 인접리스트로 구현할 경우 for문은 각 노드 v에 대해서 degree(v)번 돕니다.
			if (d[v] == -1) then
				d[v] <- d[u] + 1;
				t[v] <- u;
				Enqueue(Q, v);	// unchecked 노드만 queue에 들어갈 수 있으므로 어떤 노드도 큐에 두번 들어가지는 않는다.
		end.
	end.
```

인접리스트로 구현할 경우 시간복잡도는 degree(v) = 2m 이므로 O(n + m)

## BFS 트리

각 노드 v와 t[v]를 연결하는 에지들로 구성된 트리
BFS 트리에서 s에서 v까지의 경로는 s에서 v까지 가는 최단경로
어떤 에지도 2개의 layer를 건너가지 않습니다.
(동일 레이어의 노드를 연결하거나, 혹은 1개의 layer를 건너갑니다.)

## 너비우선순회 : 최단 경로 출력하기

```r
PRINT-PATH(G, s, v)	// 출발점 s에서 노드 v까지의 경로 출력하기
	if v = s then
		print s;
	else if t[v] = null then
		print “no path from s to v exists”;
	else
		PRINT-PATH(G, s, t[v]);
		print v;
```

## 너비우선순회 (BFS)

그래프가 disconnected이거나 혹은 방향 그래프라면 BFS에 의해서
모든 노드가 방문되지 않을 수도 있음
BFS를 반복하여 모든 노드 방문

```r
BFS-ALL(G)
{
	while there exists unvisited node v
		BFS(G, v);
}
```
