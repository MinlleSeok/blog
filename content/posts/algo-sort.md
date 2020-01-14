---
title: "정렬 알고리즘 - Sort Algorithm"
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

## 기본적인 정렬 알고리즘

## 선택 정렬 - Selection Sort

- initial array = [29, 10, 14, 37, 13];
- 가장 큰 값을 맨 마지막 값과 바꿉니다.
- The largest item <=> Last index item

```t
selectionSort(A[], n) { // 배열 A[1...n]을 정렬합니다.
    for last <- n down to 2 {
        A[1...last] 중 가장 큰 수 A[k]를 찾습니다;
        A[k] <-> A[last]; // swap A[k], A[last]
    }
}
```

### 실행시간

- for 루프는 n-1번 반복
- 가장 큰 수를 찾기 위한 비교 횟수: n-1, n-2, ..., 2, 1
- 교환은 상수시간 작업
- n(n-1) / 2

시간 복잡도 : T(n) = (n-1)+(n-2)+...+2+1 = O(n^2) 점근적 표현법

[Reference] : <https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw>

- 정렬만큼 알고리즘의 효율성 차이를 극명하게 보여주는 것이 없기 때문입니다.

### 다음의 숫자들을 오름차순으로 정렬하는 프로그램

- 1 10 5 8 7 6 4 3 2 9
- 가장 작은 것을 선택해서 제일 앞으로 보내면 어떨까?

```t
1 10 5 8 7 6 4 3 2 9

1 2 5 8 7 6 4 3 10 9
1 2 3 8 7 6 4 5 10 9
1 2 3 4 7 6 8 5 10 9
1 2 3 4 5 6 8 7 10 9
1 2 3 4 5 6 7 8 10 9
1 2 3 4 5 6 7 8 9 10
```

### C

```c
#include <stdio.h>

int selection_sort(void) {
	// i, j: 배열 원소 반복적으로 탐색하기 위한 변수 
	// min: 최소값 변수 
	// index: 가장 작은 원소가 존재하는 위치 변수 
	// temp: 두 수를 스왑하기 위한 변수 
	int i, j, min, index, temp;
	int array[10] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};
    //	for (i = 0; i < 10; i++) {
	for (i = 1; i < 10; i++) {
		// min = 9999;
		min = array[i];
		for (j = i; j < 10; j++) {
			if (min > array[j]) {
				min = array[j];
				index = j;
			}
		}
		temp = array[i];
		array[i] = array[index];
		array[index] = temp;
	}
	for (i = 0; i < 10; i++) {
		printf("%d ", array[i]);
	}
 	return 0;
}

int main(void) {
	selection_sort();
	return 0;
}
```

### 시간 복잡도

- 등차수열
- 10 + 9 + 8 + ... + 1

=> 10 * (10 + 1) / 2 = 55
=> n * (n + 1) / 2
=> n * n
=> 특정한 알고리즘의 간략한 시간 표기법 : O(n * n)

- 선택정렬의 시간 복잡도 : O (N * N)
- 제곱은 수가 커질 수록 기하급수적으로 올라갑니다.

## 버블 정렬 - Bubble Sort

- 가장 큰 값을 찾아 맨 마지막으로 옮긴 후에 나머지 데이터를 정렬
- 실행시간 : (n-1)+(n-2)+...+2+1 = O(n^2)

```r
bubbleSort(A[], n)  // 배열 A[1...n]을 정렬합니다.
{ 
    for last <- n down to 2 {
        for i <- 1 to last-1
            if (A[i] > A[i+1]) then A[i] <-> A[i+1]; // swap
    }
}
```

- 수행 시간
- for 루프는 n-1번 반복
- for 루프는 각각 n-1, n-2, ..., 2, 1번 반복
- n(n-1) / 2
- 교환은 상수시간 작업
- T(n) = (n-1)+(n-2)+...+2+1 = O(n^2)

[Reference] : <https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw>

- 옆에 있는 값과 비교해서 더 작은 값을 앞으로 보내면 어떨까?
- 구현하기는 제일 쉽지만 가장 비효율적인 알고리즘

### 손고리즘

```t
1 10 5 8 7 6 4 3 2 9

1 ~ 10
1 ~ 9
1 ~ 8

1 10 
  10 5

1 5 10 8 7 6 4 3 2 9
1 5 8 10 7 6 4 3 2 9
1 5 8 7 10 6 4 3 2 9
1 5 8 7 6 10 4 3 2 9
1 5 8 7 6 4 10 3 2 9
1 5 8 7 6 4 3 10 2 9
1 5 8 7 6 4 3 2 10 9
1 5 8 7 6 4 3 2 9 10

1 5 7 8 6 4 3 2 9 10
1 5 7 6 8 4 3 2 9 10
1 5 7 6 4 8 3 2 9 10
1 5 7 6 4 3 8 2 9 10
1 5 7 6 4 3 2 8 9 10

...

1 2 3 4 5 6 7 8 9 10
```

### c

```c
#include <stdio.h>

int bubble_sort(void) {
	// i, j = for
	// temp = swap
	int i, j, temp;

	int array[10] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};
	for (i = 0; i < 10; i++) {
		for (j = 0; j < 9 - i; j++) {
			if(array[j] > array[j + 1]) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	for(i = 0; i < 10; i++) {
		printf("%d ", array[i]);
	}
	return 0;
}

int main(void) {
	bubble_sort();
}
```

### 시간 복잡도

- 10 + 9 + 8 + ... + 1
- 등차수열

- N x (N + 1) / 2
- O(N x N)

- 버블 정렬의 경우,
- 자리를 바꾸는 연산(스왑)을 계속 수행(매번)하기 때문에
- 실제 수행 시간이 더 느린 정렬입니다.

## 삽입 정렬 - Insertion Sort

- 데이터가 하나 있다면 정렬되어 있는 상태
- 두 개의 데이터가 정렬된 상태를 만들어줍니다.
- 사이에 끼워 넣는 정렬입니다.

```r
15 [12] 13 10 14 11
12 [15] 13 10 14 11
12 15 [13] 10 14 11
12 13 [15] 10 14 11
12 13 15 [10] 14 11
10 12 13 [15] 14 11
10 12 13 15 [14] 11
10 12 13 14 [15] 11
10 12 13 14 15 [11]
10 11 12 13 14 [15]
```

### Insertion

```r
0 ~ k-1 : 정렬된 상태
k 번째를 잘 끼워넣어서
k 개의 정렬된 알고리즘

1. copy the item to tmp
2 3 5 6 7 8 [4] 1

2. compare
tmp = 4
2 3 5 6 7 8 [ ] 1

3. shift
tmp = 4
2 3 5 6 7 [ ] 8 1

4. compare
tmp = 4
2 3 5 6 [7] ( ) 8 1

5. shift
tmp = 4
2 3 5 6 [ ] 7 8 1

...

finally
2 3 [4] 5 6 7 8 1
```

### Insertion Sort

```r
insertionSort(A[], n) // 배열 A[1...n]을 정렬합니다.
{
    for i <- 2 to n {
        A[1...i]의 적당한 자리에 A[i]를 삽입합니다.
    }
}
```

- 수행시간
- for 루프는 n-1번 반복
- 삽입은 최악의 경우는 i-1번 비교
- 최악의 경우 : T(n) = (n-1)+(n-2)+...+2+1 = O(n^2)
- n(n-1) / 2
- 최선의 경우 : n-1번 비교

## 합병 정렬 - Merge Sort

분할 정복법 : Divide and Conquer

- 세 가지 단계
- 분할 : 해결하고자 하는 문제를 작은 크기의 [동일한] 문제들로 분할
- 정복 : 각각의 작은 문제를 [순환적](recursion)으로 해결
- 합병 : 작은 문제의 해를 합하여(merge) 원래 문제에 대한 해를 구함

```r
입력 : n 개의 데이터
최대값 : 절반을 나눈 앞쪽, 뒤쪽 최대값 중의 최대값 = 전체 최대값
```

### 합병 정렬 이해

- 데이터가 저장된 배열을 절반으로 나눔 (divide)
- 각각을 순환적으로 정렬 (recursively sort)
- 정렬된 두 개의 배열을 합쳐 전체를 정렬 (merge)

반으로 나눠 길이가 1인 데이터로 만든 후, 2개 한 쌍씩 합병

- 두개의 정렬된 리스트 합병 (정렬된 두 배열)
- n / 2
- => 하나의 정렬된 리스트 (추가 배열 이용)

- 가장 작은 값을 비교
- i: 첫번째 리스트에서 가장 작은 값
- j: 두번째 리스트에서 가장 작은 값
- k: 전체 리스트에서 가장 작은 값
- Math.min(A[i], B[j]) = C[k]

```r
mergeSort(A[], p, r) // A[p...r]을 정렬합니다.
{
	if (p < r) then {
		q <- (p+q) / 2;			// p, q의 중간 지점 계산
		mergeSort(A, p, q);		// 전반부 정렬
		mergeSort(A, q+1, r);	// 후반부 정렬
		merge(A, p, q, r);		// 합병
	}
}

merge(A[], p, q, r)
{
	정렬되어 있는 두 배열 A[p...q]와 A[q+1...r]을 합하여
	정렬된 하나의 배열 A[p...r]을 만듭니다.
}
```

- 분할 정복법
- q = p와 r의 평균

```java
void merge(int data[], int p, int q, int r) {
	int i=p, j=q+1, k=p;
	int tmp[data.length()];
	while (i<=q && j<=r) {
		if (data[i] <= data[j])
			tmp[k++] = data[i++];
		else
			tmp[k++] = data[j++];
	}
	while (i<=q)
		tmp[k++] = data[i++];
	while (j<=r)
		tmp[k++] = data[j++];
	for (int i=p; i<=r; i++)
		data[i] = tmp[i];
}
```

- 시간 복잡도
- T(n) = { 0(if n == 1), T([n/2]) + T([n/2]) + n }
- 데이터를 한 번 비교할 때 마다 한 개씩 데이터가 내려옵니다.
- 비교 연산의 횟수 = n
- T(n) = 2T(n/2) + n
- O(nlogn)

- merge sort
- 길이가 n인 리스트 정렬하기 위해
- (n/2 정렬 + n/2 정렬) 합병
- (n/4 정렬 + n/4 정렬 + n/4 정렬 + n/4 정렬) 합병
- (n/8 정렬 + n/8 정렬 + n/8 정렬 + n/8 정렬 + n/8 정렬 + n/8 정렬 + n/8 정렬 + n/8 정렬) 합병
- n번의 비교 연산

## 퀵 정렬 - Quick Sort

- 분할정복법
- 분할 : 배열을 다음과 같은 조건이 만족되도록 두 부분으로 나눕니다.
- 정복 : 각 부분을 순환적으로 정렬합니다.
- 합병 : nothing to do
- 기준값 : pivot (첫번째 값, 중간 값, 마지막 값)

### 이해

```r
- 정렬할 배열이 주어짐. 마지막 수를 기준(pivot)으로 합니다.
31 8 48 73 11 3 20 29 65 [15]
- 기준보다 작은 수는 기준의 왼쪽에 나머지는 기준의 오른쪽에 오도록 재배치(분할)합니다. [partition]
8 11 3 [15] 31 48 20 29 65 73
- 기준의 왼쪽과 오른쪽을 각각 순환적으로 정렬합니다.(정렬 완료)
3 8 11 15 20 29 31 48 65 73
```

### sudo

```r
quickSort(A[], p, r)	// A[p...r]을 정렬합니다.
{
	if (p<r) then {
		q = partition(A, p, r);	// 분할
		quickSort(A, p, q-1);	// 왼쪽 부분배열 정렬
		quickSort(A, q+1, r);	// 오른쪽 부분배열 정렬
	}
}

partition(A[], p, r)
{
	배열 A[p...r]의 원소들을 A[r]을 기준으로 양쪽으로 재배치하고
	A[r]이 자리한 위치를 return 합니다;
}
```

- q : pivot의 위치

### partition

- i : pivot보다 작은 값들 중 마지막 값
- j : 지금 검사하려는 값

```r
if A[j] >= x
	j <- j+1;
else
	i <- i+1;
	exchange A[i] and A[j];
	j <- j+1;
```

- 피봇보다 작은 값들과 큰 값들 분할 후,
- 마지막에 피봇보다 첫번째 큰 값 전에 피봇을 집어넣습니다.
- i 앞쪽 피봇보다 작은 값들, i 뒤쪽 피봇보다 큰 값들

```r
pivot: []
j: ()
i: <>
31 8 48 73 11 3 20 29 65 [15]
(31) 8 48 73 11 3 20 29 65 [15]
31 (8) 48 73 11 3 20 29 65 [15]
<8> 31 (48) 73 11 3 20 29 65 [15]
<8> 31 48 (73) 11 3 20 29 65 [15]
<8> 31 48 73 (11) 3 20 29 65 [15]
8 <11> 48 73 31 (3) 20 29 65 [15]
8 11 <3> 73 31 48 (20) 29 65 [15]
8 11 <3> 73 31 48 20 (29) 65 [15]
8 11 <3> 73 31 48 20 29 (65) [15]
8 11 <3> 73 31 48 20 29 65 ([15])
8 11 3 <[15]> 31 48 20 29 (65) (73)
```

```r
Partition(A, p, r)
{
	x <- A[r];						// pivot
	i <- p-1;						// i < pivot
	for j <- p to r - 1				// move j
		if A[j] <= x then			// p ~ i + i+1 ~ r - 1
			i <- i+1;
			exchange A[i] and A[j];
	exchange A[i+1] and A[r];		// move pivot
	return i+1;						// pivot index
}
```

### 최악의 경우

- 걸리는 시간 O(n) => n-1 비교 연산
- 퀵 정렬 최악의 경우 : 항상 한 쪽은 0개, 다른 쪽은 n-1개로 분할되는 경우  
  이미 정렬된 입력 데이터(마지막 원소를 피봇으로 선택하는 경우)
- 합병 정렬 시간 복잡도 T(n) = 2T(n/2) + n;
- 퀵 정렬 최악 시간 복잡도 : T(n) = T(0) + T(n-1) + O(n)  
							 = T(n-1) + O(n)  
							 = T(n-2) + T(0) + n-1 + n-2  
							 ...  
							 = n-1 + n-2 + n-3 + ... + 1  
							 = n(n-1) / 2 = O(n^2)
- 피봇이 항상 최대값이나 최소값인 경우, 항상 0개와 나머지 전체 분할

### 최선의 경우

- 항상 절반으로 분할되는 경우
- T(n) = 2T(n/2) + O(n)  
		= O(nlogn)
- 합병 정렬과 동일

### Balanced Partition

- 항상 한쪽이 적어도 1/9 이상이 되도록 분할된다면?

```r
1 : 9
O(n)

1/100 9/100 | 9/100 81/100
O(n)

1/100 9/100 | 9/100 81/100
O(n)

...

1

(9/10)^k * n = 1
k = log(10/9)n
O(logn)
```

=> O(nlogn)

- 0 : n-1 = n^2
- 1 : 9 = nlogn

## 평균 시간 복잡도

- "평균" 혹은 "기대값"이란?
- A(n) = (input instancr I of size n) p(I)T(I)
- p(I) : I가 입력으로 들어올 확률
- T(I) : I를 정렬하는데 걸리는 시간
- 그러나, p(I)를 모름

- p(I)에 관한 적절한 가정을 한 후 분석
- 예 : 모든 입력 인스턴스가 동일한 확률을 가진다면
- 1 ~ n 정수 (permutation)
- p(I) = 1 / n!(factorial)

```r
입력 : 1 ~ n 사이의 정수들의 permutation
피봇 : 맨 마지막 값

피봇 등수(최소값~)|  발생할 확률   | 	  분할 결과		   |  걸리는 시간
rank of pivot | probability | result of partition | running time
	1				1/n				0:n-1			A(0)+A(n-1)
	2				1/n				1:n-2			A(1)+A(n-2)
	3				1/n				2:n-3			A(2)+A(n-3)
	...								...
	n-1				1/n				n-2:1			A(n-2)+A(1)
	n				1/n				n-1:0			A(n-1)+A(0)

(걸리는 시간 * 확률) 합 = 평균 시간 복잡도

분할을 했다는 가정 하에, 추가적으로 걸리는 시간
1 / n { (sigma) }
2 / n { (n-1 (sigma) i=0) * A(i) }

분할하는데 걸리는 시간 = O(n)

결과 순환식
n개의 데이터를 퀵 정렬하는데 필요한 평균 시간
A(n) = (2 / n) * (n-1 (sigma) i=0) * A(i) + O(n) = O(nlog(2)n)
```

- 퀵 정렬
- O(n^2) = 매우 극단적인 경우
- O(nlogn) = 평균 시간

### 피봇 선택

- 첫번째 값이나 마지막 값을 피봇으로 선택
- 이미 정렬된 데이터 혹은 거꾸로 정렬된 데이터가 최악의 경우
- 현실의 데이터는 랜덤하지 않으므로 (거꾸로) 정렬된 데이터가 입력으로 들어올 가능성은 매우 높음
- 따라서 좋은 방법이라고 할 수 없음

- "Median of Three"
- 첫번째 값과 마지막 값, 그리고 가운데 값 중에서 중간값(median)을 피봇으로 선택
- 최악의 경우 시간복잡도가 달리지지는 않음

- Randomized Quicksort
- 피봇을 랜덤하게 선택
- no worst case instance(최악 입력 X), but worst case execution(최악 경우 O)
- 평균 시간복잡도 O(NlogN)

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

