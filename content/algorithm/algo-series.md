---
title: "종이접기 algorithm javascript"
date: 2020-01-13T16:00:50+09:00
categories: ["algorithm"]
draft: true
---

- 종이접기 algorithm javascript

```js
function old_solution(n) {
    let result = [0];
    
    
    for (let i=0; i<n-1; i++) {
        let list = [];    
        
        for (let j=0; j<result.length; j++) {
            
            if (j%2 === 0) {
                list.push(0);
                list.push(result[j]);
                list.push([1]); 
            } else {
                list.push(result[j]);
            }
        }
        result = list;
    }
    return result;
}
function reverseString(num) {
    return num.toString().split("").reverse().join("");
}

function flipbits(str) {
    const result = str.split('').map(function (b) {
        return (1 - b).toString();
      }).join('');
      print("flip result=", result)
    return result;
}
    
function solution(n) {
    let result = [0];
    for (let i=0; i<n-1; i++) {
        result.push([0]);
        result.push(flipbits(reverseString(result[0])));
        result = [result.map(function (a) { return a.toString()}).join('')];
    }
    return result;
}

print(old_solution(4));
print(solution(4));
```

- Quick sort algorithm - java

```java
import java.util.*;

public class Main
{
    public static void custom_quick(String[] data, int l, int r) {
        int left = l;
        int right = r;
        String pivot = data[(left+right)/2];
        
        do {
            while (data[left].compareToIgnoreCase(pivot) < 0) left++;
            while (data[right].compareToIgnoreCase(pivot) > 0) right--;
        
            
            if (left <= right) {
                
                if (data[left].compareToIgnoreCase(pivot) == 0 && data[left].compareTo(pivot) < 0) {
                    String temp = data[left];
                    data[left] = data[right];
                    data[right] = temp;
                }
            
                String temp = data[left];
                data[left] = data[right];
                data[right] = temp;
                left++;
                right--;
            }
        } while (left <= right);
        
        if(l < right) custom_quick(data, l, right);
        if(r > left) custom_quick(data, left, r);
    }
    
    public static int getEqualSpaceCount(boolean[][] visited, int[][] picture, int value, int i, int j) {
        if (i < 0 || i >= picture.length || j < 0 || j >= picture[0].length || visited[i][j] == true || value != picture[i][j]) {
            return 0;
        } else {
            visited[i][j] = true;
            return 1 + getEqualSpaceCount(visited, picture, value, i-1, j)
                     + getEqualSpaceCount(visited, picture, value, i+1, j)
                     + getEqualSpaceCount(visited, picture, value, i, j-1)
                     + getEqualSpaceCount(visited, picture, value, i, j+1);
        }
    }
 
    public static int[] old_solution(int m, int n, int[][] picture) {
        int[] answer = new int[2];
        boolean[][] visited = new boolean[m][n];
        
        for(int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (picture[i][j] > 0) {
                    int count = getEqualSpaceCount(visited, picture, picture[i][j], i, j);
                    answer[0] = count > 0 ? answer[0] + 1 : answer[0];
                    answer[1] = Math.max(count, answer[1]);
                }
            }
        }
        return answer;
    }
    
    public static void plus(Stack stackX, Stack stackY, boolean[][] visited, int j, int i) {
        stackX.add(j);
        stackY.add(i);
        visited[i][j] = true;
    }
    
    // public static int[] solution(int m, int n, int[][] picture) {
    //     int[] answer = new int[2];
    //     boolean[][] visited = new boolean[m][n];
    //     Stack stackX = new Stack<>();
    //     Stack stackY = new Stack<>();
        
    //     for (int i=0; i<m; i++) {
    //         for (int j=0; j<n; j++) {
                
    //             int count = 0;
    //             if (picture[i][j] > 0 && visited[i][j] == false) {
    //                 plus(stackX, stackY, visited, j, i);
    //                 count++;
    //                 answer[0]++;
    //             }
                
    //             while(!stackX.isEmpty()) {
    //                 int x = stackX.pop();
    //                 int y = stackY.pop();
                    
    //                 // 위 이동
    //                 if(y > 0 && picture[y-1][x] == picture[i][j] && visited[y-1][x] == false) {
    //                     plus(stackX, stackY, visited, x, y-1);
    //                     count++;
    //                 }
                    
    //                 // 좌측 이동
    //                 if(x > 0 && picture[y][x-1] == picture[i][j] && visited[y][x-1] == false) {
    //                     plus(stackX, stackY, visited, x-1, y);
    //                     count++;
    //                 }
                    
    //                 // 아래 이동
    //                 if(y < m - 1 && picture[y+1][x] == picture[i][j] && visited[y+1][x] == false) {
    //                     plus(stackX, stackY, visited, x, y+1);
    //                     count++;
    //                 }
                    
    //                 // 우측 이동
    //                 if(x < n - 1 && picture[y][x+1] == picture[i][j] && visited[y][x+1] == false) {
    //                     plus(stackX, stackY, visited, x+1, y);
    //                     count++;
    //                 }
    //             }
    //             answer[1] = Math.max(answer[1], count);
    //         }
    //     }
    //     return answer;
    // }
    
	public static void main(String[] args) {
		String[] data = new String [] {"zz", "FFF", "FSD", "fff", "zxc"};
		custom_quick(data, 0, data.length-1);
		
		for(String dat : data) {
		    System.out.println(dat);
		}
	}
}

```

- 이미지 blobs algorithm(Recursion) - java

```java
public static int getEqualSpaceCount(boolean[][] visited, int[][] picture, int value, int i, int j) {
        if (i < 0 || i >= picture.length || j < 0 || j >= picture[0].length || visited[i][j] == true || value != picture[i][j]) {
            return 0;
        } else {
            visited[i][j] = true;
            return 1 + getEqualSpaceCount(visited, picture, value, i-1, j)
                     + getEqualSpaceCount(visited, picture, value, i+1, j)
                     + getEqualSpaceCount(visited, picture, value, i, j-1)
                     + getEqualSpaceCount(visited, picture, value, i, j+1);
        }
    }
 
    public static int[] old_solution(int m, int n, int[][] picture) {
        int[] answer = new int[2];
        boolean[][] visited = new boolean[m][n];
        
        for(int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (picture[i][j] > 0) {
                    int count = getEqualSpaceCount(visited, picture, picture[i][j], i, j);
                    answer[0] = count > 0 ? answer[0] + 1 : answer[0];
                    answer[1] = Math.max(count, answer[1]);
                }
            }
        }
        return answer;
    }
```

- 이미지 blobs algorithm(Stack) - java

```java
public static void plus(Stack stackX, Stack stackY, boolean[][] visited, int j, int i) {
        stackX.add(j);
        stackY.add(i);
        visited[i][j] = true;
    }
    
    public static int[] solution(int m, int n, int[][] picture) {
        int[] answer = new int[2];
        boolean[][] visited = new boolean[m][n];
        Stack stackX = new Stack<>();
        Stack stackY = new Stack<>();
        
        for (int i=0; i<m; i++) {
            for (int j=0; j<n; j++) {
                
                int count = 0;
                if (picture[i][j] > 0 && visited[i][j] == false) {
                    plus(stackX, stackY, visited, j, i);
                    count++;
                    answer[0]++;
                }
                
                while(!stackX.isEmpty()) {
                    int x = stackX.pop();
                    int y = stackY.pop();
                    
                    // 위 이동
                    if(y > 0 && picture[y-1][x] == picture[i][j] && visited[y-1][x] == false) {
                        plus(stackX, stackY, visited, x, y-1);
                        count++;
                    }
                    
                    // 좌측 이동
                    if(x > 0 && picture[y][x-1] == picture[i][j] && visited[y][x-1] == false) {
                        plus(stackX, stackY, visited, x-1, y);
                        count++;
                    }
                    
                    // 아래 이동
                    if(y < m - 1 && picture[y+1][x] == picture[i][j] && visited[y+1][x] == false) {
                        plus(stackX, stackY, visited, x, y+1);
                        count++;
                    }
                    
                    // 우측 이동
                    if(x < n - 1 && picture[y][x+1] == picture[i][j] && visited[y][x+1] == false) {
                        plus(stackX, stackY, visited, x+1, y);
                        count++;
                    }
                }
                answer[1] = Math.max(answer[1], count);
            }
        }
        return answer;
    }
```

- minimum algorithm - java 

```java
class Solution {
    /*
    전체 학생의 수 n
    체육복을 도난당한 학생들의 번호가 담긴 배열 lost
    여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
    체육수업을 들을 수 있는 학생의 최댓값을 return
    */
    private static int[] LOST = null;
    private static int[] RESERVE = null;
    
    
    int solve(int dont, int have) {
        System.out.println(dont + "," + have);
        System.out.println("value = " + LOST[dont] + "," + RESERVE[have]);
        // 배열 범위 체크
        if(dont >= LOST.length || have >= RESERVE.length) {
            return 0;
        // 여벌이 있거나 도둑든 학생인 경우   
        } else if (LOST[dont] < 1 && RESERVE[have] < 1) {
            return 0;
        // 여벌가지고 온 학생이 도난당한 경우
        } else if (Math.abs(LOST[dont] - RESERVE[have]) > 1) {
         return 0;
        } else {
           
            RESERVE[have] = -1;
            LOST[dont] = -1;
            return 1;
        }
    }
    
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        
        LOST = lost;
        RESERVE = reserve;
        answer = n - LOST.length;
        
        for(int i=0; i<LOST.length; i++)
            for (int j=0; j<RESERVE.length; j++) {
                if (LOST[i] == RESERVE[j] && LOST[i] != -1) {
                    LOST[i] = -1;
                    RESERVE[j] = -1;
                    answer++;
                }
            }

        for(int i=0; i<LOST.length; i++)
            for (int j=0; j<RESERVE.length; j++) {
                System.out.println("i=" + i + ", j=" + j);
                answer += solve(i, j);
            }
        
        return answer;
    }
}}
}
```

- dfs algorithm - java

```java
class Solution {
    public int solution(int[] numbers, int target) {
        int answer = 0;
        answer = dfs(numbers, 0, 0, target);
        return answer;
    }
    
    int dfs(int[] numbers, int n, int sum, int target) {
        if(n == numbers.length) {
            if (sum == target) {
                return 1;
            }
            return 0;
        }
        return dfs(numbers, n+1, sum+numbers[n], target) + dfs(numbers, n+1, sum-numbers[n], target);
    }
}

```

- budget minimum average algorithm - java

```java
import java.util.*;

public class Main
{
    
    public static int solution (int[] budgets, int M) {
        Arrays.sort(budgets);
        
        int start = 0, end = budgets[budgets.length - 1];
        int count = 0;
        
        while (start <= end)
        {
            System.out.println(++count);
            int sum = 0;
            int mid = (start + end) / 2;
            
            for (int element : budgets)
                sum = element > mid ? sum + mid : sum + element;
            if (sum > M) end = mid - 1;
            else
                start = mid + 1;
        }
        return end;
    }
    
	public static void main(String[] args) {
		System.out.println("Hello World");
		int result = solution(new int[] {120, 110, 140, 150}, 485);
		System.out.println(result);
	}
}
```

- budget minimum average algorithm - java

```java
class Solution {
    
    // 상한선 포함 계산하는 총 예산 리턴 함수
    private static long check(int[] budgets, int limit) {
        long totalBudget = 0L;
        
        for (int budget : budgets) {
            
            // 상한선을 넘으면
            if (budget > limit) {
                // 상한선으로 고정
                budget = limit;
            }
            
            // 모든 예산 집어넣기
            totalBudget += budget;
        }
        
        // 모든 예산 더한 값 리턴
        return totalBudget;
    }
    
    // 풀이 함수
    public static int solve(int[] budgets, int M) {
            
        // Budget 합이 총 예산을 넘지 않는 경우
        long totalBudget = 0L;
        int maxBudget = 0;
        for (int budget : budgets) {
            totalBudget += budget;
            maxBudget = Math.max(maxBudget, budget);
        }
        
        if (totalBudget <= (long)M) return maxBudget;
        
        // Budget 합이 총 예산을 넘는 경우에는 maxBudget을 최대 상한액으로 고려한
        // 상태에서 최적의 상한액을 찾는 binary search 수행
        int low = 0;
        int high = maxBudget;
        int targetLimit = 0;
        long maxTotal = Integer.MIN_VALUE;
        
        while (low <= high) {
            int mid = (low + high) / 2;
            
            // check함수에서 상한액 조건에 따라 total 값을 리턴한다.
            long total = check(budgets, mid);
            
            if (total == (long)M) {
                return mid;
            } else if (total < (long)M) {
                // 현재 설정한 상한액으로 구한 total 값이 총 예산보다 작은 경우에는
                // 상한액을 늘려서 시도하도록 세팅한다.
                // 현재 설정한 상한액이 최적의 경우일 수도 있으므로 이를 정답 후보로
                // 기록해둔다.
                low = mid + 1;
                
                // check() 한 total이 maxTotal보다 크면
                if (maxTotal < total) {
                    maxTotal = total;
                    targetLimit = mid;
                }
                
            } else {
                // 현재 설정한 상한액으로 구한 total 값이 총 예산을 넘어가므로 
                // 당연히 상한액을 줄여야 한다.
                high = mid - 1;
            }
        }
        return targetLimit;
    }
    
    public int solution(int[] budgets, int M) {
    
        int answer = 0;
        answer = solve(budgets, M);
        System.out.println(answer);
        return answer;
    }
}
```
