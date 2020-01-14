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

## Selection Sort

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

## Bubble Sort

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

## Insertion Sort

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
