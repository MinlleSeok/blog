---
title: "Maze"
date: 2020-01-10T22:06:14+09:00
---

# 미로찾기 - Recursive Thinking

현재 위치에서 출구까지 가는 경로가 있으려면

- 현재 위치가 출구이거나 혹은
- 이웃한 셀들 중 하나에서 현재 위치를 지나지 않고 출구까지 가능 경로가 있거나

## 미로찾기(Decision Problem - return yes or no)

```r
boolean findPath(x, y)
    if (x, y) is the exit
        return true;
    else
        for each neighbouring cell (x`, y`) of (x, y) do
            if (x`, y`) is on the pathway
                if findPath(x`, y`)
                    return true;
        return false;
```

- 인접한 셀이 초기값과 무한 루프에 빠질 수 있습니다.

```r
boolean findPath(x, y)
    if (x, y) is the exit
        return true;
    else
        mark(x, y) as a visited cell;
        for each neighbouring cell (x`, y`) of (x, y) do
            if (x`, y`) is on the pathway and not visited
                if findPath(x`, y`)
                    return true;
        return false;
```

- x, y 가 통로 이면서 이미 방문한 위치가 아닌 경우를 찾으면 됩니다.

```r
boolean findPath(x, y)
    if (x, y) is either on the wall or a visited cell
        return false;
    else if (x, y) is the exit
        return true;
    else
        mark(x, y) as a visited cell;
        for each neighbouring cell (x`, y`) of (x, y) do
            if findPatH(x`, y`)
                return true;
        return false;
```

- 가독성을 좋게 하는 대신 호출 횟수가 좀 더 많다.

```java
public class Maze {
    private static int N = 8;
    private static int [][] maze = {
        {0, 0, 0, 0, 0, 0, 0, 1},
        {0, 1, 1, 0, 1, 1, 0, 1},
        {0, 0, 0, 1, 0, 0, 0, 1},
        {0, 1, 0, 0, 1, 1, 0, 0},
        {0, 1, 1, 1, 0, 0, 1, 1},
        {0, 1, 0, 0, 0, 1, 0, 1},
        {0, 0, 0, 1, 0, 0, 0, 1},
        {0, 1, 1, 1, 0, 1, 0, 0}
    };

    private static final int PATHWAY_COLOUR = 0;    // white
    private static final int WALL_COLOUR = 1;       // blue
    private static final int BLOCKED_COLOUR = 2;    // red
    private static final int PATH_COLOUR = 3;       // green
}
```

```java
public static boolean findMazePath(int x, int y) {
    // N x N // 0 ~ N - 1 미로 범위 체크
    if (x < 0 || y < 0 || x >= N || y >= N)
        return false;
    // visited check // green(path), red(block)
    else if (maze[x][y] != PATHWAY_COLOUR)
        return false;
    else if (x == N - 1 && y == N - 1) {
        maze[x][y] = PATH_COLOUR;
        return true;
    } else {
        maze[x][y] = PATH_COLOUR;
        // 동, 서, 남, 북 체크
        if (findMazePath(x-1, y) || findMazePath(x, y+1)
            || findMazePath(x+1, y) || findMazePath(x, y-1)) {
                return true;
        }
        maze[x][y] = BLOCKED_COLOUR;    // dead end
        return false;
    }
}
```

```java
public static void main(String[] args) {
    printMaze();
    findMazePath(0, 0);
    printMaze();
}
```
