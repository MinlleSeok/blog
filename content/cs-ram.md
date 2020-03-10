---
title: "레지스터와 RAM 과 중앙처리장치 CPU"
date: 2020-03-02T15:59:54+09:00
---

# Arithmetic and Logic Unit(ALU)

- 이진수를 입력받아 계산

## 레지스터와 RAM

- AND-OR LATCH
- GATED LATCH
- 레지스터: 래치를 병렬로 사용하는 그룹

## 멀티플렉서

- 행 담당
- 열 담당
- 선택
- SRAM(Static Random Access Memory)

## Central Process Unit (CPU)

- MICRO-ARCHITECTURE
- RAM : 16공간 x 8bit
- Register : 8bit x 4개
- INSTRUCTION TABLE : id, opcode, address

## 레지스터 구성

- Instruction Address Register
- Instruction Register
- Register A
- Register B
- Register C
- Register D

## Instruction Table

- Instruction / Description / 4-Bit Opcode / Address or Registers
- LOAD_A    / Read RAM location (register A) / 0010 / 4-bit RAM address
- LOAD_B    / Read RAM location (register B) / 0001 / 4-bit RAM address
- STORE_A   / Write (register A) RAM location / 0100 / 4-bit RAM address
- ADD       / Add two registers, store result / 1000 / 2-bit register ID, 2-bit register ID

### FETCH PHASE (인출 단계)

- Instruction Address Register -> ADDRESS INPUT
- RAM -> DATA -> Instruction Register

## Decode Phase (해독 단계)

- opcode 첫 4bit
- RAM 주소 뒤 4bit
- Instruction Register control unit

## Execute Phase (실행 단계)

- Load_A : RAM의 write enable 켜기
- 주소값 : RAM에서 위치에 DATA 값 확인
- Load_A : Register A의 write enable 활성화
- RAM Data : Register A에 저장
- instruction 완성, 모든 연결선 종료
- instruction address 레지스터 1증가
- execute phase 종료
- 다음 instruction fetch 준비

## Control Unit

- Fetch Phase
    - Inst. Addr. Register = 1
    - RAM ADDRESS == 1
    - RAM DATA = 00011111
- Decode Phase
    - 0001 == LOAD_B Instruction
    - RAM data move into Register B
- Execute Phase
    - Control Unit RAM 15번지(1111) read
    - Register B, data 받을 수 있도록 설정
    - Register B = 00001110(RAM Data)
- Inst. Addr. Register += 1
    - 하나의 사이클 완료
- ADD 연산같은 경우 ALU를 통해 연산

## Clock

- 주기적으로 전기 신호를 보냄
- Clock Speed
- 1초에 할 수 있는 시간
- Hz로 표기
- 상황에 맞게 클럭 조절 : dynamic frequency scaling
- 동적 주파수 스케일링

## 새로운 명령어

- SUB : 뺄셈 연산
- JUMP : 초기화 Inst. Addr. Register 값 변경
- JUMP_NEG : ALU의 음수 flag가 true일 때 작동
- HALT : 프로그램 중단(명령어와 데이터 구분)

## Instruction Length

- 현대 CPU가 명령어 길이를 늘리거나
- Variable Length Instructions
- 가변 길이 명령어를 갖습니다.
- Immediate Value : JUMP 명령어 바로 다음 값 읽기

## Cache memory

- Cache Hits : 캐쉬 메모리에 있을 경우
- Cache Miss : 캐쉬 메모리에 없을 때
- Dirty Bit : 캐쉬가 꽉 차있고, 새로운 메모리 블럭 요청시
- dirty하면 오래된 블록을 저장

## pipelining

- parallelize 병렬처리
- 이전의 값 (데이터 의존성) 고려
- out-of-order(비순차적) 실행
- 거의 모든 프로세서 구현됨

## Conditional Jump Instrunctions

- 조건부 점프 명령어
- 프로그램 실행 흐름을 바꿀 수 있습니다.
- 이러한 명령어는 작업을 오래 지연시킬 수 있습니다.
- 해결법으로, 갈림길(branch)에서 예측 실행(speculative execution)
    - 이 추측을 바탕으로 파이프라인에 명령어를 채웁니다.
    - 추측이 틀리면, 파이프라인 플러시(모두 제거)합니다.
- 분기 예측(branch prediction) - 정교한 갈림길 추측 방법
    - 90% 이상의 정확도

## Superscalar 프로세서

- 매 클럭 한 개 이상의 명령어 실행 가능한 프로세서
