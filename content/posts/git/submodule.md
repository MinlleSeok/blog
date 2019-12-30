---
title: "Submodule"
date: 2019-12-30T22:37:32+09:00
---

# Hugo Blog 운영을 위한 Git 명령어

## 1. github.io 의 개인 Hugo 블로그

- [github-ID]/blog.git
- [github-ID]/[github-ID].github.io.git
- [github-ID]/[theme-name].git (Fork 해온 테마)
- 총 세 개의 저장소로 운영

### 1-1. 새로 클론해오는 경우 블로그 git 주소 복제

```bash
> git clone https://github.com/[github-ID]/blog.git
```

### 1-2. submodule 복제

```bash
> git submodule update --init --recursive
```

## 2. 기존 git 에서 다시 작업

### 2-1. git 변동사항 받아오기

```bash
> git pull
```

### 2-2. submodule 변동사항 받아오기

```bash
> git submodule update --recursive --remote
```

## 3. hugo post 작성

```bash
> hugo new posts/[category]/[post-name].md
```

---

행복 코딩!