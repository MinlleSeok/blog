---
title: "저장 프로시저와 함수: Stored Procedure and Function"
date: 2020-06-22T18:45:30+09:00
draft: true
---

# 저장 프로시저와 함수: Stored Procedure and Function

- 저장 프로시저: Oracle 등과 같은 DBMS에서 제공되는 프로그래밍 기능
    - 한마디로 쿼리문의 집합
    - 어떠한 동작을 일괄 처리하기 위한 용도로 사용
    - 이것을 모듈화 시켜서 필요할 때마다 호출만 하면 훨씬 편리함

## 기본 형식

```sql
    CREATE [ OR REPLACE ] PROCEDURE 저장_프로시저_이름( 파라미터 ) AS
        변수 선언 부분
    BEGIN
        프로그래밍 코딩...
    END [저장_프로시저_이름] ;
```

## 실행

``sql
    EXECUTE 저장_프로시저_이름(); 또는 EXEC 저장_프로시저_이름();
``


