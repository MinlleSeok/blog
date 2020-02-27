---
title: "알고리즘 - 선형 시간 정렬"
date: 2020-01-29T10:44:39+09:00
categories: ["algorithm"]
---

# 선형 시간 정렬

## Counting Sort

- n개의 정수를 정렬하세요. 단 모든 정수는 0에서 k 사이의 정수입니다.
- 길이 k인 배열에 각 정수의 개수를 count합니다.

```t
int A[n]; // 정렬할 데이터 0 ~ k
int C[k] = {0, };
for ( int i=1; i<=n; i++ )
    C[A[i]]++;
for ( int s=1, i=0; i<=k; i++ ) {
    for ( int j=0; j<C[i]; j++ ) {
        A[s++] = i;
    }
}
```

```t
COUNTING-SORT(A, B, k)
for i <- 0 to k
    do C[i] <- 0
for j <- 1 to length[A]
    do C[A[j]] <- C[A[j]] + 1
> C[i] now contains the number of elements equal to i.
for i <- 1 to k
    do C[i] <- C[i] + C[i - 1]
> C[i] now contains the number of elements less than or equal to i.
for j <- length[A] downto 1
    do B[C[A[j]]] <- A[j]
        C[A[j]] <- C[A[j]] - 1
```

- O(n+k), 또는 O(n) if k=O(n)
- k가 클 경우 비실용적
- Stable 정렬 알고리즘
- 입력에 동일한 값이 있을때 입력에 먼저 나오는 값이 출력에서도 먼저 나옵니다.
- Counting 정렬은 Stable 합니다.
- 입력에 나온 순서대로 출력에 나왔기 때문입니다.
