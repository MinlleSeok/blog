---
title: "데이터에 대한 결정"
date: 2020-03-31T21:52:51+09:00
---

# 데이터에 대한 결정

- 기계 학습의 본질
	- 데이터로부터 배울 수 있는 능력, 예측 및 결정을 내릴 수 있는 알고리즘
- 인공 지능을 목표하는 단계

## 분류

- 결정 과정 : 분류 classification
- 알고리즘 : 분류자
- Feature : 특징화
- 훈련 데이터(Training Data)와 분류된 데이터(Labeled Data)

## 선점도 데이터 시각화

- 알고리즘의 목적 : 최적의 구분/분류를 찾는 것
- 분할 추가
- 의사 결정 경계 : Decision Boundary
- 오차 행렬 : Confusion Matrix

## 사용되는 알고리즘

- 결정 트리 Decision Tree
- 서포트 벡터 머신 (Support Vector Machines)

## 머신 러닝 문제

- HyperLane
- 통계학 Statistics 기반

## 인공 신경망 Artificial Neural Networks

> 입력 레이어(Input Layer) - 숨겨진 레이어(Hidden Layer) - 출력 레이어(Output Layer)

- 1. 특정 가중치를 곱합니다.
- 2. 입력 값을 합산 합니다. 
- 3. 바이어스 적용 (고정된 값을 더하거나 뻅니다)
	- 바이어스 및 입력 가중치는 초기 신경망이 만들어질 때 무작위 값으로 설정
- 4. 전달 함수(활성화 함수)
	- 값을 변경하지 않고 전달하는 선형 전달 함수

## Deep Learning

- 숨겨진 레이어(Hidden Layer) 가 다중 계층일 경우

## 약한 인공지능

- Weak AI
- Narrow AI
- 특정 업무에만 지능적

## 강한 인공지능

- Strong AI
- Reinforcement Learning
- 시행 착오를 통한 강화 학습

## Computer Vision

- 색상 마커 추적 및 유사 알고리즘

## patch

- 커널/필터 (Kernel/Filter)
	- -1 0 1
	- -1 0 1
	- -1 0 1
- 픽셀 단위의 곱셈에 대한 값을 포함
- 그 합은 중심 픽셀에 저장
- 픽셀 패치에 커널을 적용하는 작업
	- 회선 (convolution)
- Prewitt Operators
- Viola-Jones Face Detection

## 합성곱 신경망 Convolutional Neural Networks

- Biometric Data

## 자연어 처리

- 컴퓨터과학 + 언어학
- Natural Language Processing
- 간단한 문장으로 분해

## 단어 유형 - 품사 (parts of speech)

- 명사 Nouns
- 대명사 Pronouns
- 관사 Articles
- 동사 Verbs
- 형용사 Adjectives
- 부사 Adverbs
- 전치사 Prepositions
- 접속사 Conjunctions
- 감탄사 Interjections

## Phrase Structure Rules

- [Sentence] -> [Noun Phrase] [Verb Phrase]
	-  영어의 문장은 명사 구 뒤에 동사 구가 오도록 구성됩니다.
- [Noun Phrase] -> [Article] [Noun]
- [Noun Phrase] -> [Adjective] [Noun]
	- 명사구는 the와 같은 관사나 형용사가 명사 앞에 올 수 있습니다.
- [Noun Phrase] -> [Noun]
- [Verb Phrase] -> [Verb]
- [Verb Phrase] -> [Verb] [Noun Phrase]
- [Verb Phrase] -> [Verb] [Prepositional Phrase]
- [Verb Phrase] -> [Verb] [Noun Phrase] [Prepositional Phrase]
- [Verb Phrase] -> [Verb] [Noun Phrase] [Adverb]
- [Prepositional Phrase] -> [Preposition] [Noun Phrase]

## 구문 분석 트리 parse tree

- 문장이 어떻게 구성되어 있는지

### Knowledge Graph

### Dialog System

## 음성인식 Speech Recognition

- Waveforms
	- 음파가 발진할 때 마이크 내부 진동판의 변위 크기
	- 가로 축 - 시간
	- 세로 축 - 변위의 크기 또는 진폭
- 스펙트로그램 (Spectrogram)
	- 가로 축 - 시간
	- 세로 축 - 주파수 크기
- 고속 푸리에 변환 알고리즘 (Fast Fourier Transform)
	- 파형에서 주파수로 변환
- 시간의 경과에 따라 정보를 플로팅
- 갈비뼈 모양 패턴 - 소리 영역의 공명
	-  Formants

## 모음 소리 주파수 집중대 조합

- Vowel Sounds And their Formant Frequency Combinations
- Phonemes 음소

## 음성 합성 Speech Synthesis
