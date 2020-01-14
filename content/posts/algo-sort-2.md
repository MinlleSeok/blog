---
title: "정렬 알고리즘 2 - Sort Algorithm"
date: 2020-01-14T11:13:38+09:00
---

# 정렬 알고리즘 - Sort Algorithm

[ Reference ] : <https://youtu.be/0dG7xTt5IfQ>

- 정렬이 가장 기본입니다.
  
## 간단하고, 느린 정렬 - Simple, Slow

- Bubble sort
- Insertion sort
- Selection sort

## 빠른 정렬 - Fast

- Quick sort
- Merge sort
- Heap sort

## O(N) 근본적으로 다른 알고리즘

- Radix sort

## 힙 정렬 - Heap Sort

- 힙, 바이너리 힙
- 이진 힙 자료구조 정렬
- 최악의 경우 시간복잡도 O(nlog(2)n)
- Sorts in place - 추가 배열 불필요
- 이진 힙(binary heap) 자료구조를 사용

### Heap의 정의

- complete binary tree이면서,
- heap property 만족

### Full vs Complete Binary Trees

- full binary tree: 모든 레벨에 노드들이 꽉 차있는 형태
- complete binary tree: 마지막 레벨을 제외하면 완전히 꽉 차있고,  마지막 레벨에는 가장 오른쪽 부터 연속된 몇 개의 노드가 비어있을 수 있음
- tree: 계층적 관계
- 부모 노드 (parent node)
- 자식 노드 (child node)
- 부모 없는 노드: 루트 노드 (root node)
- 자식 없는 노드: 리프 노드 (leaf node)

- 이진 트리 (Binary Tree)
- : 각 노드가 최대 2개의 자식 노드를 가지는 트리

Full Binary Tree > Complete Binary Tree

## Heap의 정의

- Max Heap Property : 부모는 자식보다 크거나 같습니다.
- Min Heap Property : 부모는 자식보다 작거나 같습니다.

Max Heap
Height = O(log(2)n)

## Heap

```t
Heap O
15 - 6
10 - 8, 7 - 2,3 | 6
21 - 10, 12

Heap X
6 - 15
10 - 2, 7 - 8, 3 | 6
12 - 10, 21

자식 노드가 왼쪽이 없고 오른쪽만 있어도 Heap X
```

## Heaps

- 동일한 데이터를 가진 서로 다른 힙이 있을 수 있습니다.
- 즉, 힙의 모양은 유일하지 않습니다.

## Heap의 표현

- 힙은 일차원 배열로 표현 가능: A[1...n]
- 루트 노드 A[1]
- A[i]의 부모 = A[i/2]
- A[i]의 왼쪽 자식 = A[2i]
- A[i]의 오른쪽 자식 = A[2i + 1]

루트			1
레벨		2		3
레벨	  4	  5	  6   7
레벨	8 9	10

## 기본 연산 : MAX - HEAPIFY

- 전체를 힙으로 만들어라
- 트리의 전체 모양은 complete binary tree임
- 왼쪽 부트리(subtree)는 그 자체로 heap이고
- 오른쪽 부트리(subtree)는 그 자체로 heap일 때
- 유일하게 루트만이 heap property를 만족 안함

- 두 자식들 중 더 큰 쪽이 나보다 크면 exchange 합니다.
- exchange안 한 부트리는 heap이 되기 위한 모든 조건이 충족
- exchange한 부트리는 heap property를 다시 만족시켜야 합니다.

### MAX-HEAPIFY Recursion

```r
// 노드 i를 루트로하는 서브트리를 heapify합니다.

MAX-HEAPIFY(A, i)
{
	if there is no child of A[i]
		return;
	k <- index of the biggest child of i;
	if A[i] >= A[k]
		return;
	exchange A[i] and A[k];
	MAX-HEAPIFY(A, k);
}
```

- root 노드에 대한 heapify는 MAX-HEAPIFY(1)을 호출하면 됩니다.

### MAX-HEAPIFY Iterative

```r
MAX-HEAPIFY(A, i)
{
	while A[i] has a child do
		k <- index of the biggest child of i;
		if A[i] >= A[k]
			return;
		exchange A[i] and A[k];
		i = k;
	end.
}
```

- 시간 O(h)
- h: heap 높이
- Complete binary tree
- 노드 수 : n
- h = O(logn)
