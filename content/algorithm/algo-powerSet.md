---
title: "알고리즘 멱집합 구하기 - powerSet"
date: 2020-01-14T10:16:47+09:00
categories: ["algorithm"]
---

# 멱집합 구하기 - powerSet

```java
private static char data[] = {'a', 'b', 'c', 'd', 'e'};
private static int n = data.length;
private static boolean [] include = new boolean[n];

public static void powerSet(int k) {
    if (k==n) {
        for (int i=0; i<n; i++)
            if (include[i]) System.out.print(data[i] + " ");
        System.out.println();
        return;
    }
    include[k] = false;
    powerSet(k+1);
    include[k] = true;
    powerSet(k+1);
}
```
