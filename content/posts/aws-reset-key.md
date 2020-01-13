---
title: "AWS 키 페어 복구하기 - AWS Reset Key Pair"
date: 2020-01-13T12:29:26+09:00
draft: true
---

# AWS 키 페어 복구하기 - AWS Reset Key Pair

[Reference] : <https://bactoria.github.io/2019/09/08/EC2-%ED%82%A4%ED%8E%98%EC%96%B4-%EB%B6%84%EC%8B%A4%ED%96%88%EC%9D%84-%EB%95%8C-%ED%95%B4%EA%B2%B0%EB%B2%95/>

## 1. 인스턴스 이미지 생성

- 인스턴스 카테고리의 인스턴스 메뉴 클릭 - 복구할 인스턴스 오른쪽 클릭 - 이미지 - 이미지 생성

## 2. 이미지 시작하기 (새 인스턴스 만들기)

- 이미지 카테고리의 AMI 메뉴 클릭 - 시작하기 - 검토 및 시작

이 때 만들어지는 key pair pem 파일을 잘 간수합니다.

## 3. 기존 EC2 인스턴스 중지

- 인스턴스 카테고리의 인스턴스 메뉴 클릭 - 복구할 인스턴스 오른쪽 클릭 - 인스턴스 상태 - 중지

## 4. 볼륨 분리

- ELASTIC BLOCK STORE 카테고리의 볼륨 메뉴 클릭 - 인스턴스와 연결되어있는 볼륨 오른쪽 클릭 - 볼륨 분리

## 5. 기존 볼륨을 새 인스턴스에 연결

- ELASTIC BLOCK STORE 카테고리의 볼륨 메뉴 클릭 - 방금 분리한 볼륨 오른쪽 클릭 - 볼륨 연결

인스턴스 : <새로운-인스턴스-id>
디바이스 : 기본값 (/dev/sdf)

## 6. 새 인스턴스의 터미널 접속

- 인스턴스 카테고리의 인스턴스 메뉴 클릭 - 새 인스턴스 클릭 - 인스턴스 시작 버튼 오른쪽에 "연결" 버튼 클릭
- mac 기준 터미널에 접속합니다.

```bash
chmod 400 <new-key-pair>.pem

ssh -i "<new-key-pair>.pem" ec2-user@ec2-15-164-205-129.ap-northeast-2.compute.amazonaws.com
```
