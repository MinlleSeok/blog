---
title: "텐서플로우 - Tensorflow"
date: 2020-07-08T22:05:31+09:00
---

# 텐서플로우 Tensorflow

```py
import tensorflow.compat.v1 as tf
tf.disable_v2_behavior()
hello = tf.constant('Hello World!')
sess = tf.Session()
print(sess.run(hello))
```

## 선형 회귀 Linear Regression

- 변수 사이의 선형적인 관계를 모델링한 것
- 직선적이다
- 주어진 데이터를 학습시켜서 합리적인 직선 찾아내는 것
- 데이터가 3개 이상일 떄 의미가 있다
- 선형 회귀 모델을 구축한다

## 비용 Cost

- 가설이 얼마나 정확한지 판단하는 기준
- (예측값 - 실제값)의 제곱의 평균

## 경사 하강 Gradient Descent

- H(x) = Wx로 식을 단순화
- (Wx - y)^2
- 텐서플로우는 경사 하강 라이브러리를 제공합니다
