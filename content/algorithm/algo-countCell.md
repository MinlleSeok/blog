---
title: "블롭 셀 카운팅 알고리즘 - Counting Cells in a Blob"
date: 2020-01-11T13:42:06+09:00
categories: ["algorithm"]
---

# 블롭 셀 카운팅 알고리즘 - Counting Cells in a Blob

[ Reference ] : <https://youtu.be/HHJFlVT1tBw>

- Binary 이미지
- 각 픽셀은 background pixel이거나      image pixel
- Blob - 서로 연결된 image pixel들의    집합을 blob이라고 부름
- 상하좌우 및 대각방향으로도 연결된      것으로 간주

입력 :

- N x N 크기의 2차원 그리드(grid)
- 하나의 좌표 (x, y)

출력 :

- 픽셀 (x, y)가 포함된 blob의 크기
- (x, y)가 어떤 blob에도 속하지 않는 경우에는 0

## Recursive Thinking

```r
현재 픽셀이 이 속한 blob의 크기를 카운트하려면
    현재 픽셀이 image color가 아니라면  // base case
        0을 반환한다
    현재 픽셀이 image color라면
        먼저 현재 픽셀을 카운트한다 (count=1)
        현재 픽셀이 중복 카운트되는 것을 방지하기 위해 다른 색으로 칠한다.
        현재 픽셀에 이웃한 모든 픽셀들에 대해서
            그 픽셀이 속한 blob의 크기를 카운트하여 카운터에 더해준다.
        카운터를 반환한다.
```

## 예제

0 1 2 3 4 5 6 7

1 0 0 0 0 0 0 1
0 1 1 0 0 1 0 0
1 1 0 0 1 0 1 0
0 0 0 0 0 1 0 0
0 1 0 1 0 1 0 0
0 1 0 1 0 1 0 0
1 0 0 0 1 0 0 1
0 1 1 0 0 1 1 1

### 1

- x=5, y=3 이라고 가정
- 즉, 이 픽셀이 포함된 blob의 크기를 계산하는 것이 목적
- count = 0

### 2

- 먼저 현재 cell을 다른 색으로 칠하고 count를 1 증가한다.
- 이렇게 색칠하는 것은 이 픽셀이 중복 count되는 것을 방지하기 위해서이다.
- count = 1

### 3

- 인접한 8개의 픽셀 각각에 대해서 순서대로 그 픽셀이 포함된 blob의 크기를 count한다.
- 북, 북동, 동, 동남, ... 이런 순서로 고려한다.

- 북쪽 픽셀이 포함된 blob의 크기는 0이다.
- 따라서 count 값은 변화 없다.
- count = 1

### 4

- 북동쪽 픽셀이 속한 blob을 count하고, count된 픽셀들을 색칠한다.
= count = 1

### 5

- 3개의 픽셀이 이 blob에 속한다.
- count = 1 + 3 = 4
- 동쪽과 남동쪽 픽셀이 포함된 blob의 크기는 0이다.
- 따라서 count값은 변화 없다.

### 6

- 이제 남쪽 픽셀이 속한 blob을 count할 차례이다.
- count = 4

### 7

- 남쪽 픽셀이 속한 blob의 크기는 9이다.
- 카운트하고 색칠한다.
- count = 4 + 9 = 13
- 남서, 서, 북서 방향의 픽셀이 속한 blob은 없거나 혹은 이미 카운트되었다.
- count = 13

## Algorithm for contCells(x, y)

```r
if the pixel (x, y) is outside the grid // 유효 범위 체크
    the result is 0;
else if pixel (x, y) is not an image pixel or already counted // 
    the result is 0;
else
    set the colour of the pixel (x, y) to a red colour;
    the result is 1 plus the number of cells in each piece of
        the blob that includes a nearest neighbour;
```

## Java

```java
private static int BACKGROUND_COLOUR = 0;
private static int IMAGE_COLOR = 1;
private static int ALREADY_COUNTED = 2;

public int countCells(int x, int y) {
    if (x<0 || x>=N || y<0 || y>=N)
        return 0;
    else if (grid[x][y] != IMAGE_COLOR)
        return 0;
    else {
        grid[x][y] = ALREADY_COUNTED;
        return 1 + countCells(x-1, y+1) + countCells(x, y+1)
                 + countCells(x+1, y+1) + countCells(x-1, y)
                 + countCells(x+1, y)   + countCells(x-1, y-1)
                 + countCells(x, y-1)   + countCells(x+1, y-1);
    }
}
```
