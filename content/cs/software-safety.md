---
title: "소프트웨어 안전 - Software Safety"
date: 2020-04-01T21:42:04+09:00
---

# 소프트웨어 안전

- 전자제어장치 ECU에 내장된 소프트웨어 결함
- KTX 사고 - 철도 제어 소프트웨어
- F4 팬텀 - 5% 기능 소프트웨어 제어
- F22 레프터 - 90% 이상의 기능이 소프트웨어에 의해서 제어
- 원자력의 모든 제어 시설이 소프트웨어에 의해서 자동적으로 제어

## 정의

- 아래의 것들을 보장하는 특징과 절차
	- Features and Procedure which ensure that
- 소프트웨어가 정상적, 비정상적인 환경 아래에서 예상대로 작동하는 것
	- A product performs predictably under normal and abnormal conditions
- 미리 계획하지 않은 사건 발생의 가능성 최소화 및 그 결과 통제와 방지
	- The likelihood of an unplanned event occurring is minimized and its consequences   		controlled and contained
- 고의든 무의지든 돌발적인 피해 혹은 사망 예방
	- Preventing accidental injury or death, whether intentional or unintentional

## 기능적인 안전 Functional Safety

- 위험 Risk
	- 개연성의 조합 및 예기치 않은 사건의 영향
	- Combination of the probability and impact of an unexpected event
- 안전 Safety
	-  물리적 침해의 받아들일 수 없는 위험에서의 자유 혹은 사람들의 건강에 대한 피해
	- Freedom from unacceptable risk of physical injury or of damage to the health of people
- 기능적인 안전 Functional Safety
	- 시스템에 의존하는 종합적인 안전 부분
	- The part of the overall safety that depends on a system
	- 입력에 대응하여 정확하게 운영되는 장비
	- Equipment operating correctly in response to its inputs
	- 위험해질 가능성이 있는 환경 발견
	- The detection of a potentially dangerous condition resulting in the activation of a protective

## IEC 61508

- IEC 61508
	- 전기, 전자 및 Programmable 전자 시스템의 기능 안전
- 적용과 관계없이 전기, 전자 및 Programmable  전자 시스템의 기능 안전을 다루는 일반 안전 표준으로 간주
	- 임베디드 시스템, 모든 전자 장비에 들어가 있는 소프트웨어 또는 하드웨어
- 제어 시스템의 기능 안전에 대한 주요 표준
- 안전에 있어 안전 시스템의 요구사항을 규정하는 데 사용
	- 제품을 만드는 데 개발 라이프사이클 동안 사용됨
- 기능적인 안전에 관련된 인증 표준

## 산업별 안전 표준 Safety Standards

- AUTOMOTIVE : ISO 26262
- RAILWAY APPLICATION : EN 50128, EN 50123, EN 50129, IEC 62278, IEC 62279
- MACHINERY : ISO 13849, IEC 62061 : Safety of machinery
- PROCESS INDUSTRY : IEC 61511 : Functional safety - Safety
	- Instrumented system for the process industry
- NUCLEAR : IEC 61513, IEC 60880
- MEDICAL
	- IEC 62304 : Medical device software
	- IEC 60601 : Medical Electrical Equipment
- OTHERS (AVIATION)
	- DO178B, 178C; 감항 인증 표준 airworthiness certification standard

## IEC 61508 Framework

- Part 0 : Functional Safety and IEC 61508
- Part 1 : General Requirements
- Part 2 : Requirements for Electrical / Electronic / Programmable Electronic Safety-related Systems
- Part 3 : Software Requirements
- Part 4 : Definitions and Abbreviations
- Part 5 : Examples of Methods for the Determination of Safety Integrity Levels(SILs)
- Part 6 : Guidelines on the Application of IEC 61508-2 and IEC 61508-3
- Part 7 : Overview of Measures and Techniques

## Overall Safety Lifecycle for E/E/PE systems

- Concept
- Overall Scope Definition
- Hazard & Risk Analysis
	- 발생 확률에 대한 위험요소를 분석
- Overall Safety Requirements
- Safety Requirements Allocation
	- 하드웨어적 또는 소프트웨어적으로 구성
- E/E/PES System Safety Requirements Specification

### 생명 주기

- 스펙에 따라 디자인 후 개선 및 향상
- 안전 요구사항 Testing
- Validation
- 제품 출시

### 소프트웨어 안전 생명 주기

- 소프트웨어 관련 안전 요구사항을 어떻게 스펙하는지
- 스펙에 따라 어떻게 개발하는지
- 개발 후 안전 관점에서 어떻게 테스팅 하는지
- 테스팅 후 통합되어 제품으로 나가는 전체적이고 일반적인 과정

## SILs Safety Integrity Levels

- 주어진 모든 조건하에 있는 안전관련 시스템이 주어진 시간 내에 요구되는  
	안전기능을 만족스럽게 수행할 수 있는 확률로 정의
- SIL레벨 1 ~ SIL 레벨 4
- High demand rate
	- dangerous failures/hr
- Low demand rate
	- Probability of failure on demand
- 자동차에 정의되는 안전 표준
	- ASIL (Auto Safety Integrity Levels)
	- 안전성을 보증하는 시스템을 만들 수 있음
