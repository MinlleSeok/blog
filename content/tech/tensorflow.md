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

```py
import tensorflow.compat.v1 as tf
tf.disable_v2_behavior()
xData = [1, 2, 3, 4, 5, 6, 7]
yData = [25000, 55000, 75000, 110000, 128000, 155000, 180000]
# 가설의 기울기(가중치) Weight
W = tf.Variable(tf.random_uniform([1], -100, 100))
# bias
b = tf.Variable(tf.random_uniform([1], -100, 100))
# 대표적인 형태
X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)
# 가설 정의
H = W * X + b
# 비용 함수 (예측값 - 실제값)의 제곱
cost = tf.reduce_mean(tf.square(H - Y))
# 경사 하강 스텝 크기
a = tf.Variable(0.01)
optimizer = tf.train.GradientDescentOptimizer(a)
train = optimizer.minimize(cost)
init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)
for i in range(5001):
    sess.run(train, feed_dict={X: xData, Y: yData})
    if i % 500 == 0:
        print (i, sess.run(cost, feed_dict={X: xData, Y: yData}), sess.run(W), sess.run(b))
print (sess.run(H, feed_dict={X: [8]}))
```
