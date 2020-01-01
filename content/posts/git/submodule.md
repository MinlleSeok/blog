---
title: "Submodule"
date: 2019-12-30T22:37:32+09:00
---

# Hugo Blog

## 1. github.io

- [github-ID]/blog.git
- [github-ID]/[github-ID].github.io.git
- [github-ID]/[theme-name].git (Forked)
- 

### 1-1. git

```bash
> git clone https://github.com/[github-ID]/blog.git
```

### 1-2. submodule

```bash
> git submodule update --init --recursive
```

## 2. git

### 2-1. git

```bash
> git pull
```

### 2-2. submodule

```bash
> git submodule update --recursive --remote
```

## 3. hugo post

```bash
> hugo new posts/[category]/[post-name].md
```

---

행복 코딩!