---
title: "소프트웨어 프로세스 모델 - SW Process Model"
date: 2020-02-27T13:24:19+09:00
---

# 소프트웨어 프로세스 모델 - SW Process Model

- Process Model

## 1. Build-and-Fix Model

- 개발조직의 Process Model을 준수하지 않고, 요구사항 확인 후 바로 코딩으로 들어가는 경우
    - Ad-hoc Process Model
    - 1. 스펙이나 디자인이 없음
        - 유지보수 시 결함 위치를 발견하기 어려운 모델
        - 개발 시간 및 비용이 많이 듬
    - 2. 사용을 권하지 않으나 현재에도 많은 조직에서 활용 됨
- Build First Version : 요구사항으로 First Version을 만듦
- Modify until client is satisfied : Client 또는 Customer에게 보여주어 만족시킬 때까지 계속적으로 요구사항을 받아들임
- Maintenance : Release한 후 유지보수 함
- 프로젝트 매니지먼트 관점에서 예측하기 어려운 모델
    - 1. 과연 어떤 행위를 다음에 해야 하는가?
    - 2. 어느 정도 기간이 걸려서 해야 하는가?

## 2. Waterfall Model

- Winston Royce의 제안
- Software Intensive System을 만들기 위해
- 어떤 절차를 거쳐 어떤 Artifact를 만드는지
- 보고 있던 것을 문서화하여 발표한 것으로,
- Original Software Waterfall Lifecycle Model은
- 각각의 단계에서 feedback loop가 없음
    - 1. feedback loop: 현재 단계에서 잘못됐을 경우 그 잘못의 원인이 되는 이전 단계로 돌아가서 문제를 해결
    - 2. build-it-twice: core part of system을 두 번 개발
    - 개념을 포함시킴
    - 3. 각 단계 마지막에 artifact 생성
        - Document Driven Process Model이라 함
        - 문서화 요구 많음
    - 4. Dr. Barry Boehm(1976년)이 Verification and Validation 삽입
        - 각 단계 마지막에 이상이 없는지 확인하는 과정
    - 5. 각 단계 마지막에 testing 함
        - review 단계를 거쳐 각 단계의 artifact 평가
    - 6. Cascading Effect의 단점
        - 하나의 문제가 발생하면 그 문제가 다음 단계로 계속 이전
        - Requirements definition
        - System and Software Design
        - Implementation and Unit Testing
        - Integration and System Testing
        - Operation and Maintenance
    - 7. Waterfall Lifecycle Model을 적용 시 고려사항
        - 새로운 요구사항을 받아들이기 어려움
        - 초기 단계에서 요구사항에 대한 명확한 정의
        - 변동가능성이 상대적으로 적은 프로젝트인지 확인
        - Large Software System이 멀티사이트에서 개발되는 경우

## Evolutionary Development

- 1. Waterfall Lifecycle Model의 단점 보완
- 2. Operation Product의 Increment를 확장하는 개념 추가
- Outline description
    - Concurrent activities
        - Specification
            - Initial version : 코어 초기 개발
        - Development
            - Intermediate versions : 피드백 반복적 개발
        - Validation
            - Final version : 고객과 반복적으로 피드백하여 개발
- Prototyping
    - 시스템의 기능을 갖고 있지만 핵심 기능을 먼저 개발하여 제품을 만드는 것
    - Exploratory Prototyping : Add-on 발생, 스파게티코드
    - Throw-away Prototyping : 명확한 요구사항 수집하기 위한 타입
- 3.Evolutionary Development 적용하는 경우
    - 작거나 medium사이즈의 Interactive System
    - Large system의 일부분을 개발할 때
    - Short-lifetime system을 개발할 때

## 4. Component-Based S/W Development

- 소프트웨어공학에서 추구하는 것은 효율!
- 짧은 시간, 적응 비용, 고품질 S/W System 개발 목표
- 소프트웨어 re-use개념의 개발 Framework
    - Requirements specification
    - Component analysis
    - Requirements modification
    - System design with reuse
    - Development and integration
    - System validation
- 기능 및 장점
    - 체계적인 re-use를 support할 수 있게 하는 일 혹은 artifact들을 정의
    - 품질 보장 및 개발 시간 절약
        - 사용하는 re-use component는 이미 verification, testing으로 품질이 어느 정도 보증)
- glue code / glue component 접붙여서
- system integration 하게 됩니다.
