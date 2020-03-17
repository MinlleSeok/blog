---
title: "Develop Process"
date: 2020-03-02T14:50:40+09:00
categories: ["cs"]
---

# 주요 개발 프로세스

- Incremental Model
    - Divide and conquer
    - 장점 : Waterfall Lifecycle Model과 같은 방식의 한계 극복
    - value를 분해하여 높은 value의 functionality를 초기 단계에 Increment에 assign함
    - 각 Increment / build 개발 비용 및 기간 예측

## Icremental Model

- 1. Implement and test first build
    - 핵심 기능을 first increment에 넣어 개발
- 2. Implement, integrate and test successive build until product is complete
- 3. Maintenance

## Spiral Model

- 리스크가 많은 프로젝트를 개발하는 데 가장 적합한 모델
- Risk-Driven Model
    - 리스크의 결과에 따라서 여러 루프가 하나의 phase를 나타냄
- PROTOTYPE은 하나의 옵션일 뿐!
- 목표 결정
- 대안적 문제해결 사고
- 계획세우기

### 제2사분면

- 대안에 대한 리스크 분석
- 리스크 결과에 따라 개발 프로세스 결정

### 제3사분면 

- Loop에서 해야 할 일 결정

### 제4사분면

- 다음 Loop 계획 세우기

## Win-Win Spiral Model

- 각 stakeholder의 model(property, success, product)들 간 충돌 시 대안 제시
- 소프트웨어 개발 프로세스 안에 있는 stakeholder들의 모든 요구사항들을
- 만족할 수 있는 make everyone winner라는 개념을 Sprial Model에 적용
- 가장 적절한 대안을 선택하여 문제 해결

## MBASE Model

- Model Driven Software Development 반영
- MBASE Model에 적용되는 새로운 마일스톤
    - LCO(Life Cycle Objective)
        - Inception phase에서 정의한 요구사항이 잘 되는지 Review Board를 통해 확인
    - LCA(Life Cycle Architecture)
        - 소프트웨어 아키텍쳐를 Review Board를 통해 확인하는 마일스톤
    - IOC(Initial Operational Concept)
        - 구상한 시스템 오퍼레이션이 마지막 단계에 제대로 구현이 됐는지 확인

## IBM-UP(Unified Process) Model

- UML 기반 도구 Rational Rose 제작
- Unified Modeling Language
- STP, OMT, Booch Method 등 세 가지 툴 연합
- 각각의 단계에서 최고의 시스템 개발을 위해 여러 번 반복이 가능한 반면
- 툴 기반으로 만들어졌기 때문에 비용이 많이 든다는 단점이 있음.

## V Model

- 시스템 엔지니어링 환경에 적합한 모델로 S/W뿐만 아니라 H/W를 포함한 시스템을
- 개발하기 위해 필요한 stage, step들을 일반화한 모델
- Construction phase
    - Defect creation phase 또는
    - Defect insertion cycle 이라고도 함
    - System level requirement
    - Software level requirement
    - Software architecture
    - Detailed design 또는 Low-level design
    - Test case 갭라
- Destruction phase
    - low-level testing 또는 verification testing:
    - Component testing, Integration testing
    - Component testing:
    - Bottom~코딩 개발된 다음 low-level
    - design과 스펙이 맞는지 확인
    - Integration testing:
    - Software architecture에 부합하는지 testing
    - high-level testing 또는 validation testing:
    - System testing, Acceptance testing, Feild testing 등
    - 소프트웨어의 정의 사항과 시스템이 맞는지 확인하는 과정
    - Black-box testing strategy:
    - input, output만 가지고 testing해서 여러 가지를 요구사항에 맞는지
    - 확인하는 과정을 거침
- 사용 분야
    - embedded system(SW + HW)
    - Testing을 중요시하는 시스템 개발 (무기, 항공 시스템)
