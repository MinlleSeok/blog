---
title: "알고리즘 - Radix Sort"
date: 2020-01-29T12:02:51+09:00
---

# Radix Sort

- n개의 d자리 정수들
- 가장 낮은 자리수부터 정렬

## Stable Sort

- 동일한 데이터가 2개 이상 있다면
- 정렬 후에도 입력 순서가 출력 순서로 유지되야 합니다.
- Radix Sort 같은 경우는 반드시 Stable 해야 합니다.

```t
RADIX-SORT(A, d)
for i <- 1 to d
    do use a stable sort to sort array A on digit i
```

- 시간 복잡도 O(d(n+k))
- 10진수 (k = 10)
- 알파벳 (k = 26)

## 정렬 알고리즘들

- Bubble sort : O(n^2)
- Insertion sort : O(n^2)
- Selection sort : O(n^2)
- Quick Sort : worst O(n^2) and average O(nlog2n)
- Merge sort : O(nlog2n)
- Heap sort : O(nlog2n)
- Counting sort : O(n+k)
- Radix sort : O(d(n+k))
