---
title: "DB 정규화"
date: 2019-12-19T21:10:08+09:00
categories: ["database"]
---

---
정규형 공부
===

[Reference] : https://mangkyu.tistory.com/28


![](../../images/a1.png)

제1정규형 - 원자값
---

![](../../images/a2.png)

제2정규형 - 기본키에 완전 함수 종속
---
![](../../images/a3.png)

제3정규형 - 기본키가 아닌 속성이 기본키에 비이행적으로 종속(직접 종속)
---
![](../../images/a4.png)

제4정규형 - BCNF (함수 종속성 X->Y 성립할 때 모든 결정자 X가 후보키인 정규형
---
![](../../images/a5.png)

이상 현상을 없애려면
---
![](../../images/a6.png)

함수 종속성
---
![](../../images/a7.png)


행복해요!