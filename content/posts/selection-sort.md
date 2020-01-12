---
title: "Selection Sort"
date: 2020-01-12T14:07:27+09:00
---

# Selection Sort

- 정렬만큼 알고리즘의 효율성 차이를 극명하게 보여주는 것이 없기 때문입니다.

## 다음의 숫자들을 오름차순으로 정렬하는 프로그램

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

## C

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

## 시간 복잡도

- 등차수열
- 10 + 9 + 8 + ... + 1

=> 10 * (10 + 1) / 2 = 55
=> n * (n + 1) / 2
=> n * n
=> 특정한 알고리즘의 간략한 시간 표기법 : O(n * n)

- 선택정렬의 시간 복잡도 : O (N * N)
- 제곱은 수가 커질 수록 기하급수적으로 올라갑니다.
