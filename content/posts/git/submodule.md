---
title: "Submodule"
date: 2019-12-30T22:37:32+09:00
---

# Hugo Blog ��� ���� Git ��ɾ�

## 1. github.io �� ���� Hugo ��α�

- [github-ID]/blog.git
- [github-ID]/[github-ID].github.io.git
- [github-ID]/[theme-name].git (Fork �ؿ� �׸�)
- �� �� ���� ����ҷ� �

### 1-1. ���� Ŭ���ؿ��� ��� ��α� git �ּ� ����

```bash
> git clone https://github.com/[github-ID]/blog.git
```

### 1-2. submodule ����

```bash
> git submodule update --init --recursive
```

## 2. ���� git ���� �ٽ� �۾�

### 2-1. git �������� �޾ƿ���

```bash
> git pull
```

### 2-2. submodule �������� �޾ƿ���

```bash
> git submodule update --recursive --remote
```

## 3. hugo post �ۼ�

```bash
> hugo new posts/[category]/[post-name].md
```

---

�ູ �ڵ�!