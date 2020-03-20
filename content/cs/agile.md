---
title: "애자일 방법론 - Agile Method"
date: 2020-03-20T08:58:55+09:00
---

# 애자일 방법론 - Agile Method

[1. eXtreme Programming(XP)](##-1.-eXtreme-Programming(XP))  
[2. Scrum](##-2.-Scrum)  
[프로세스 선택 시 고려해야 될 특징(Characteristic)](##-프로세스-선택-시-고려해야-될-특징(Characteristic))

## 1. eXtreme Programming(XP)

- 소규모 ~ 중간규모 팀이 빠른 요구사항 변화에 반응하여
    개발하는 경량 소프트웨어 개발 방법론
- 여러 practice를 적용하게 간단하게 개발할 수 있음.

### 12 Practices

- The Planning Game : 개발자와 고객 간 role game, 어떻게 이 시스템을 사용할 것인가?
- Small Releases : 짧은 개발 Lifecycle 동안 어떻게 scope를 정하여 소프트웨어를 인계할 것인가?
- Metaphor
- Simple Design
- Testing
- Refactoring : 인계한 뒤 문제가 있을 떄에 구조 변경
- Pair Programming : on-site에서 고객과 개발자가 같이 동시에 개발(핵심)
- Collective Ownership
- Continuous Integration
- 40-Hour Workweek : 짧고, 심플한 user feature를 사이클에 적용
- On-site Customer : 사이트에 고객이 없을 경우 가상 고객을 이용하여 여러 사람이 이해할 수 있게 함
- Coding Standards

### EXPLORATION PHASE

- 다른 소프트웨어 개발 방법론의 user requirement를 수집
- requirement를 형식적이게 스펙으로 적어 수집하는 것이 아님
- user story(짧은 설명), user가 시스템에 요구하는 기능적 요구사항을 모으는 것

### PLANNING PHASE

- EXPLORATION PHASE에서 수집된 story를 우선순위 작업
- 다음 반복 주기 동안 어떤 유저 스토리를 개발할 지 우선순위를 정함
- 다음 반복 주기에 들일 노력, 기간 결정
- 유연하게 결정된 유저 스토리 집합에 따라 노력, 기간 할당

### ITERATION TO RELEASE PHASE

- Pair Programming으로 유저 스토리, 요구사항 분석, 디자인, 테스팅
- Continuous Integration
    - 짧은 개발 ~ Testing 주기동안 매일 개발된 Working Software를
        DB에 저장하고 이전에 개발된 software와 지속적인 통합
- 문제 발생 시 Feedback
- 반복

### PRODUCTIONIZING PHASE

- Small Release(스몰 릴리즈)를 고객에게 보여주어 승인을 받음
- set of user story가 모두 만들어졌을 때 product 상품화

### MAINTENANCE PHASE

- product 상품화 후 operation을 통해 문제가 있을 경우
- Update Release

### DEATH PHASE

- 소프트웨어를 더 이상 사용하지 않음
- Final Release

## 2. Scrum

- Scrum의 어원 : 럭비경기에서 선수들이 중간에 반칙을 하여 경기 재개 전
    선수들끼리 어깨동무를 하고 다음 공격을 어떻게 할 것인지 이야기하는 것
- 요구사항 수집 / 우선순위 작업
- SPRINT BACKLOG - XP에서 user story와 같습니다.
    - list of user requirements 유저 요구사항 목록
    - 다음 주기(cycle) 동안에 개발해야 될 유저 요구사항 집합(user requirement set)
- Sprint(단거리 선수) : functional requirement, feature cycle
- Scrum sprint : 짧은 list of feature로 전력질주 하듯 소프트웨어 개발
- SPRINT : 2주 ~ 1달 동안 backlog 안에 할당된 요구사항을 할당된 팀을 통해 개발

### SPRINT

- 매일 아침 10~15분 정도 SCRUM MEETING
- 핵심적인 논의 사항
    - 진도 검사
    - 장애물 논의
    - 다음 계획
- Scrum master : sprint를 하는 동안 방해요소 차단
    - 멤버들이 할당된 요구사항을 문제없이 개발할 수 있도록 도와 줌
- burn out chart 매일 확인
    - 다른 Disciplined plan process는 마일스톤을 통해 진도 체크
- 전체적인 sprint 하나를 끝내게 되면
    - 그 sprint 동안 개발된 feature들이 고객에게 release되는 프로세스
    - Scrum Process

### Process Spectrum

- Light
    - 프로세스에서 코드에 비해 다른 활동들의 비중이 낮은 경우
    - 적은 노력으로 요구사항 적용 및 설계 가능하여 코드가 차지하는 비중이 높음
    - Ad Hoc 프로세스 : 고객으로부터 요구사항을 받자마자 요구사항 문서와
        설계 문서를 개발하지 않고 코드를 개발
- 중간 정도의 간접비를 갖는 프로세스
    - RUP, IBM UP 또는 마이크로스프트의 synchronization and stabilization 프로세스

### 프로세스 선택 시 고려해야 될 특징(Characteristic)

- Agile word (Agile Word Process)
    - 융통성(flexibility), 활력(dynamism) 많은 프로젝트
    - Team, Personal Skill 레벨 높은 프로젝트
    - In-House Project
    - 조직 문화 Chaos
- Plan-Driven word (Plan-Driven Heavy Weight Process)
    - critical system
    - Safety system
    - 요구사항을 받아들이는 유연성이 적은 프로젝트
    - 크고 거대하며 긴 시간의 프로젝트
    - 조직 문화 Order
