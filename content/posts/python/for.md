---
title: "Python - for in 문법"
date: 2020-01-01T17:51:58+09:00
modified: 2020-01-08T16:03:00+09:00
---

# python for in 문법

Reference : <https://youtu.be/0wpYyDlAEIg>

- array, list, tuple, string 의 시퀀스를 출력

```py
days = ("Mon", "Tue", "Wed", "Thu", "Fri")

for day in days:
  print(day)

for day in [1, 2, 3, 4, 5]:
  print(day)

for day in days:
  if day is "Wed":
    break
  else:
    print(day)

for letter in "Nicolas":
  print(letter)
  ```

---

<p style="text-align: center">행복 코딩</p>
