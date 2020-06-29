---
title: "SQL Case 표현"
date: 2020-06-29T23:12:47+09:00
---

# SQL Case 표현

- Switch / Case 표현과 동일합니다.
- 첫번째로 맞는 조건의 결과값을 반환합니다.
- else 부분이 없고 맞는 조건이 없을 경우 NULL을 반환합니다.

## CASE 문법

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
```

## 예제

```SQL
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

## 예제 2

```SQL
SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);
```
