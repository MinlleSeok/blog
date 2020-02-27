---
title: "정렬 알고리즘 2 - Sort Algorithm"
date: 2020-01-14T11:13:38+09:00
categories: ["algorithm"]
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

## 정렬할 배열을 힙으로 만들기

```r
BUILD-MAX-HEAP(A)
	heap-size[A] <- length[A]		// 힙의 저장된 노드의 개수 <- 정렬할 데이터의 개수
	for i <- (length[A]/2) downto 1
		do MAX-HEAPIFY(A, i)
```

- 일차원 배열  A [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
- 힙으로 변환
- [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]

### 힙 정렬 만드는 함수 시간 복잡도

- 힙을 만드는데 시간복잡도 : O(n)
- 시작할 노드의 인덱스 : i / 2
- for 문 : n / 2
- MAX-HEAPIFY(A, i) = logn
- O(nlogn) -> 많이 넉넉하게 잡았다 -> O(n)
- 전체 힙 정렬 알고리즘 시간복잡도 : O(nlogn)

## 힙 정렬 실행 - Heap Sort

- 주어진 배열을 힙으로 만듭니다.
- 부모는 자식보다 큽니다. 데이터의 최대값은 항상 루트 인덱스 1번입니다.
- 힙에서 최대값(루트)을 가장 마지막 값과 자리를 바꿉니다. (정렬했을 때 최대값 위치로 보냅니다)
- 힙의 크기가 1 줄어든 것으로 간주합니다. 즉, 가장 마지막 값은 힙의 일부가 아닌 것으로 간주합니다.
- 루트 노드에 대해서 Heapify()를 합니다.
- 2 ~ 4 번을 반복합니다.

```r
HEAPSORT(A)
	BUILD-MAX-HEAP(A)					// O(n)
	for i <- heap_size downto 2 do		// n-1 times
		exchange A[1] <-> A[i]			// O(1)
		heap_size <- heap_size - 1		// O(1)
		MAX-HEAPIFY(A, 1)				// O(log(2)n)
```

- Total time : O(nlog(2)n)

## 힙의 응용 : 우선순위 큐

- 이진 힙은 힙 정렬 이외에도 중요한 용도를 가집니다.
- 큐 : 선입선출(FIFO) QUEUE
- 최대 우선순위 큐(maximum priority queue)는 다음의 두 가지 연산을 지원하는 자료구조
- INSERT(x) : 새로운 원소 x를 삽입
- EXTRACT_MAX() : 최대값을 삭제하고 반환
- 최소 우선순위 큐(minimum priority queue)는 EXTRACT-MAX대신 EXTRACT-MIN을 지원하는 자료구조
- MAX HEAP(= 일차원 배열)을 이용하여 최대 우선순위 큐를 구현

### INSERT

- Complete Binary Tree 이어야 합니다.
- Max Heap Property(부모는 자식보다 큽니다)

```r
MAX-HEAP-INSERT(A, key) {
	heap_size = heap_size + 1;					// 배열의 길이를 + 1
	A[heap_size] = key;							// insert
	i = heap_size;								// 문제 노드 인덱스
	while (i > 1 and A[PARENT(i)] < A[i]) {		// 루트 노드가 아니고, 부모 노드값보다 큰 동안
		exchange A[i] and A[PARENT(i)];			// 문제 노드와 부모 노드 교체
		i = PARENT(i);							// 문제 노드 <= 부모 노드
	}
}
```

- O(h), h = 높이
- 시간복잡도 O(log(2)n)

### EXTRACT_MAX()

- 최대값을 삭제하고 반환해주는 연산
- Max Heap 최대값은 항상 루트에 존재합니다.
- 노드 개수 - 1
- 새로운 부모 지정
- 마지막 노드와 루트 노드를 교체하고, Heapify를 합니다.

```r
HEAP-EXTRACT-MAX(A)
	if heap-size[A] < 1
		then error "heap underflow"
	max <- A[1]
	A[1] <- A[heap-size[A]]
	heap-size[A] <- heap-size[A] - 1
	MAX-HEAPIFY(A, 1)
	return max
```

- 시간복잡도 O(log(2)n)

## 정렬 알고리즘 비교 - Comparison Sort

- 최악의 경우 O(n^2)
  - bubble
  - selection
  - insertion
  - quicksort (average. O(nlogn))
- 최악의 경우 O(nlogn)
  - merge
  - heap
- O(nlogn) 보다 더 좋을 수 없을까? X
- 정렬 알고리즘이 Comparison Sort인 경우에!

## 정렬 알고리즘의 유형

- Comparison Sort
  - 데이터들간의 상대적 크기관계만을 이용해서 정렬하는 알고리즘
  - 따라서 데이터들간의 크기 관계가 정의되어 있으면 어떤 데이터에든 적용가능(문자열, 알파벳, 사용자 정의 객체 등)
  - 버블정렬, 삽입정렬, 합병정렬, 퀵정렬, 힙정렬 등
- Non-comparison Sort
  - 정렬할 데이터에 대한 사전지식을 이용 - 적용에 제한
  - Bucket Sort
  - Radix Sort
- 시험성적을 정렬한다고 하면, 일반적으로 정렬하기 전에 분류를 먼저 합니다.
- 90점대, 80점대, 70점대 ... 정렬할 데이터가 2자리 정수라는 사실을 알고있기 때문입니다.
- 정렬할 데이터를 먼저 분류하는 정렬 => Bucket Sort
- Radix Sort ?

## 정렬 문제의 하한

> Comparison Sort 결론 : 어떤 Comparison Sort 도 O(nlogn) 보다 더 빠를 수 없습니다.

- 하한 (Lower Bound)
  - 입력된 데이터를 한번씩 다 보기위해서 최소 O(n)의 시간복잡도 필요 (trivial lower bound)
  - 합병정렬과 힙정렬 알고리즘들의 시간복잡도는 O(nlog(2)n)
  - 어떤 comparison sort 알고리즘도 O(nlog(2)n)보다 나을 수 없습니다.

## Decision Tree

- Abstraction of any comparison sort

3개의 값을 정렬하는 삽입정렬 알고리즘에 대한 decision tree

```r
		<=	  1:2  >
		2:3			1:3
 <1,2,3> 1:3   	<2,1,3> 2:3
  <1,3,2> <3,1,2>   <2,3,1> <3,2,1>
```

- Leaf노드의 개수는 n!개, 왜냐하면 모든 순열(permutation)에 해당 하므로
- 최악의 경우 시간복잡도는 트리의 높이
- 트리의 높이 height >= log(2)n! = O(nlog(2)n)
