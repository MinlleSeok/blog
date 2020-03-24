---
title: "소프트웨어 품질 - Software Quality"
date: 2020-03-24T11:33:44+09:00
---

# 소프트웨어 품질 - Software Quality

- 품질 Quality
- 노력(수고) Effort
- 일정 Schedule

1. 소프트웨어 품질 정의
2. 품질 특성
3. 품질 표준
4. 품질 안전성 인증

## 소프트웨어 품질 정의

- 명백하게 또는 내포적으로 요구사항 및 기대사항을 부합한 정도

### 품질의 두 가지 형태

- 설계 품질(Quality of Design)
	- 요구사항 포함(Encompasses requirements), 사양(specifications),
        시스템 디자인(design of the system)
- 부합 품질 (Quality of Conformance)
	-  An issue focused primarily on implementation
	-  사양이나 설계가 얼만큼 부합하는지 측정

> 사용자 만족 User Satisfaction  
> = 부응하는 제품 Compliant Product +  
> 좋은 품질 Good Quality +  
> 예산과 일정 범위내에 인도 Delivery within budget & schedule

## 품질이란 무엇인가?

- 품질의 다른 관점들 (Different Views of Quality)
	- 선험적인, 초월적인 관점 (Transcendental view)
		- 참 좋게 인식이 되는데 표현하기 힘듬
 		- Something that you immediately recognize, but cannot explicitly define.
	- 사용자 관점 (User view)
		- 최종 사용자로서 구체적 목표가 충족 됬는지, 품질 표현
		- In terms of an end-user’s specific goals.
		- If a product meets those goals, it exhibits quality.
	- 제조자의 관점 (Manufacturer’s view)
		- 본래적인 기준에 얼만큼 잘 부합했는지 측정
		- In terms of the original specification of the product.
		- If the product conforms to the spec, it exhibits quality.
	- 생산물 관점 (Product view)
		- 생산물 자체가 가지고 있는 기능, 특징을 얼만큼 잘 표현하는지
		- Tied to inherent characteristics (e.g. functions and features) of a product. 
	- 가치 기반 관점 (Value-based view)
		- 얼마만큼 고객이 이 생산품에 돈을 지불할 의향이 있는지
		- Based on how much a customer is willing to pay for a product.
- 실제 품질은 이러한 관점들을 다 포함하고 있습니다.

### 기초 정의

- Error (실수, 오류)
	- 사람이 실수로 뭔가를 잘못 입력했을 때 나타나는 현상
	- 잘못된 용어 사용, 설계 시 잘못된 요구사항 반영
	- 구문 오류(syntax error) 또는 의미론적인 오류(semantic error)를 발생시키는 문제 삽입
- Defect (결함)
	- 에러가 검증 활동을 통해 다른 단계(phase)로 Escape됐을 때 발견
	- 요구 사항에 삽입된 에러가 설계 단계에서 발견
	- 요구 사항에서 삽입된 에러가 코딩 단계에서 발견
- Bug (버그, 벌레)
	- 일반적으로 Defect와 같은 의미로 많이 사용됨
- Fault (잘못, 책임, 결점)
	- Error 와 Defect를 모두 합친 것
- Failure (실패)
	- 시스템을 하드웨어에 올려서 운영을 하는 동안,
	- 시스템이 운영되는 동안에 다른 단계로 이전을 할 수 없는 상태

### 결함 유입 주기 Defect Introduction Cycle (Defect Insertion Cycle)

- Defect Insertion (결함 삽입)
	- 인공물을 창조하는 동안에 인간의 실수로 잘못 삽입했을 때 나타나는 문제점
- Defect Detection (결함 발견)
	- 창조된 인공물이 제대로 됐는지 확인하는 과정
- Defect Removal (결함 제거)
	- 걸러진 결함을 고치는 과정
- 순환하며 결함이 계속적으로 발견되고 줄어듦으로 좋은 품질의 제품을 만들 수 있음

### 오류 해결을 위한 상대적 비용

- 요구 사항 단계에서는 10,000원이면(기준) 될 것인데,
- 상품이 출시된 후에는 1,000,000~2,000,000원(100 ~ 200배) 이상이 든다
- 결함을 빠른 시기에 발견하여 수정하게 되면,
- 수고 절약 Effort Saving
- 일정 절약 Schedule Saving

### 품질 비용 Cost of Quality

- 6 sigma
- 품질을 향상시킬 수 있는 전략
- 1980년대 모토롤라에서 만든 소프트웨어 혹은 생산물 품질 개선 전략
- Cost of quality
	- 1 Cost of Good Quality(COGQ)
		- 품질을 높이기 위해서 드는 비용
		- 예방 비용 Prevent cost 또는 Prevention cost (교육을 통한 Error 삽입 방지 비용)
		- 평가 비용 Appraisal cost (Testing, Peer review, Verification)
			- 결함 발견 주기에 드는 비용
	- 2 Cost of Poor Quality(COPQ)
		- 나쁜 품질로 인해서 나타나는 비용
		- 내부의 실패 비용 Internal Failure Cost (출시 전 개발 사이클 동안 발견된 결함을 고치는 비용)
		- 외부의 실패 비용 External Failure Cost (출시 후 나타난 문제를 고치는데 드는 비용)
		- 품질 보증 비용 Warranty Cost

### SEI CMM vs. COQ

- SEI : 소프트웨어 공학 협회 Software Engineering Institute, 카네기 멜론 대학
- CMM : 역량 성숙 모델 Capability Maturity Model, SEI에서 만든 모델
- COQ : 품질 비용 Cost of Quality

> CMM 레벨 1 조직 - 품질 비용 중 60%가 예방, 평가, 내부/외부 비용에 투입  
> CMM 레벨 5 조직 - 약 20%로 감축  

- 프로세스가 최적화되어 적은 비용으로 좋은 품질의 소프트웨어 제품 생산 가능
- 약 6% 정도 비용이 내부 실패 비용 Internal Failure Cost와 외부 실패 비용 External Failure Cost에 들어감
- 생산품 품질은 프로세스 품질에 따라 향상 정도가 달라집니다.

### 좋은 제품 품질을 달성하기 위해서 (How to achieve software quality)

- 좋은 프로젝트 관리 실례를 실제 생명 주기 동안 적용
	- Through good project management and solid engineering practices
- 풀어야 할 문제, 요구 사항 명확히 제시, 요구사항에 따라 설계, 설계의 확정 부분만 개선
	- Good understanding of the problem to be solved
- 건축 상의 문제점 설계 단계에서 미리 발견해서 제거
	- Elimination of architectural flaws during design
- 전체 생명주기 동안 품질 통제 (다수의 점검, 동료간 검토, 여러 단계의 테스팅)
	- Quality control (Series of Inspections, Reviews, and Tests)
- 품질 보증 활동 (절차 감사 및 보고 절차)
	- Quality Assurance (Auditing and reporting procedure used to provide management data
		needed to make proactive decisions)
