---
title: "품질 속성 - Quality Attributes"
date: 2020-03-26T22:28:44+09:00
---

# 품질 속성 - Quality Attributes

## 이전 소프트웨어 개발자들의 생각

- 소프트웨어 가장 중요한 요소 - 구조 ?
- 기능적 요구 만족

## 결합된 수요 Combined Demand

- 성능 Performance
- 유효성 Availability
- 수정 가능성 Modifiability
- 신뢰성 Reliability
- 구조가 아닌 다른 의미에서 만족할 수 있는 속성
- 품질 속성

## 품질 속성

- 비기능 요구사항 Non-functional Requirement
- 구조에 따라 비기능 요구사항들이 달라지는 경우
	- Sort Program 알고리즘을 사용할 때
	- 알고리즘에 따라서 속도, Attribute이 달라지는 경우.
	- Non-Functional Requirement 단어가
	- Misleading Terminology(오해의 소지가 있는 전문 용어)로 인식됨
- 최근에는 Quality Attributes Requirement

## 품질 속성 목록

- 성능 Performance
- 수정 가능성 Modifiability
- 재사용 가능성 Reusability
- 안정성 Stability
- 보안 Security
- 신장성 Extendibility
- 이식성 Portability
- 유용성 Usability
- 사용자 친화적 User friendly
- 확장성 Scalability
- 자료 완전성 Data integrity & more
- wow 할만한 속성 Wowability
- 시공성 Buildability

## 품질 표준

- 품질속성을 측정하고 매트릭스를 만들어 관리할 수 있는 방법
- [국제표준]
	- ISO 9001 or ISO 14001 : 품질 관리 Quality Management
		- Management 관점, 품질 관리 관점에서의 국제표준
	- ISO/IEC 9126 : 품질 매트릭스 Quality Metrics
		- 품질을 측정할 수 있는 Quality Metrics를 정의한 표준
	- IEEE 730-2014 : 소프트웨어 품질 평가 Software Quality Assurance
		- 품질 개발 라이프사이클 동안 보증 시 속성에 대한 국제표준
	- ISO/IEC 25000 series : 시스템 & 소프트웨어 품질 요구사항
		- System and Software Quality Requirement (SQuaRE) series

## ISO/IEC 9126

- Information Technology Software Quality Characteristics and Metric
- 9126-1 Quality Model : 품질 모델에 대한 개략적인 것을 설명함
- 9126-2 External Metrics : 품질을 측정할 수 있는 단위들
- 9126-3  Internal Metrics : 품질을 측정할 수 있는 단위들
- 9126-4 Quality in Use Metrics : 소프트웨어 출시 후 사용함으로써 나타날 수 있는 Metrics 정의

## 용어

- Measure : 자연현상에서 직접적으로 측정할 수 있는 값
	- Number of faults : 직접 얻을 수 있음
- Measurement : 측정한 것을 수집하는 행위
- Metrics : 여러 가지 Measure를 합쳐서 새로운 형태의 Insight를 제공하기 위해서 만든 것
	- 100km/h은 시간과 거리를 합쳐서 속도를 나타내는 metrics
	- Fault Density : 단위 유닛 동안 유닛에 들어있는 Fault의 수

## ISO 9126 - External & Internal Quality Attributes

- 주속성
	- Functionality : 주어진 기능이 얼마나 잘 구현돼 있는지를 측정하는 Metrics
	- Reliability : 소프트웨어가 주어진 시간, 환경에서 얼마나 문제없이 잘 작동하는지 나타내는 				측정 단위
	- Usability : 일반 사용자가 얼마나 쉽게 배우고 이해하고 잘 사용할 수 있는지를 측정
	- Efficiency : 얼마나 리소스를 잘 사용하는지에 대한 효율성
	- Maintainability : 제품을 얼마나 쉽게 이해해서 고치고 분석, 변경하는지 측정
	- Portability : 하나의 플랫폼에서 개발된 제품이 쉽게 다른 플랫폼으로 이식될 수 있는지 측정
	- Installability, Replaceability, Adaptability

## 문제 공간에서 가장 중요한 속성 : Triage

- 문제 공간 Problem Space
- Quality
	- 품질을 높이기 위해서는 노력과 시간의 희생이 필요
- Effort
	- 노력을 아끼기 위해서는 품질과 시간의 허용이 필요
- Schedule

## 좋은 품질의 제품을 만들기 위해

- 많은 시간을 테스팅, 디자인, 요구사항 스펙(Requirement Spec) 검토
- 여러 가지 주속성 중 제품에 맞는 품질 속성 미리 파악
- 우선순위로 집중해야 할 품질 속성 요구사항을 정의
- 아키텍처에 반영하고 향상시켜 품질속성에 테스트됨
- 시스템 테스팅 단계 : Validity of Functional Quality Attributes

## ISO/IEC 25000 series organization

- ISO/IEC 2500n Quality Management Division : 어떻게 관리해야 하는지
	- 다른 표준들에 의해 참조된 일반적인 모델, 전문 용어, 정의를 분명히 밝힙니다.
	- Define all common models, terms and definitions referred further by all other 		standards from SQuaRE series
- ISO/IEC 2501n Quality Model Division : 모델의 개요나 용어들을 정의
	- 쓰이고 있는 품질, 자료 소프트웨어 및 컴퓨터 시스템을 위한 품질 모형들을 자세히 나타냅니		다.
	- Present detailed quality models for computer systems and software products, quality 		in use, and data
- ISO/IEC 2502n Quality Measurement Division : Metrics 정의 / Measure 방법
	- 품질 측정 참조 모형, 품질 방법의 수학적 정의, 실제적인 지침
	- Include a software product quality measurement reference model, mathematical 		definitions of quality measures, and practical guidance for their application
- ISO/IEC 2503n Quality Requirements Division : 품질 요구사항을 문서에 명시
	- 품질 요구사항을 구체화하는 것을 돕습니다. (문서화)
	- Helps specifying quality requirements.
- ISO/IEC 2504n Quality Evaluation Division : 품질 평가에 대한 설명
	- 소프트웨어 평가를 위한 요구사항, 권고사항, 지침
	- Provide requirements, recommendations and guidelines for software product 		evaluation

## 정리

- 국제적으로 쓰이고 있는 ISO 9126
- 25000 series
- Quality의 일반적인 Attributes
- ISO 9126의 주속성과 부속성
