---
title: "Hugo로 개인 블로그 만들기 + submodule"
date: 2019-12-30T22:37:32+09:00
---

# Hugo Blog

> <https://gohugo.io/>

- Hugo는 "웹사이트를 만드는데 세계에서 가장 빠른 프레임워크"라고 단언하는  
  오픈소스 기반 정적 사이트(static site) 제작 툴입니다.

1. Hugo 설치 (Install Hugo)
2. git Command
3. Hugo Post

## 1. Hugo 설치 (Install Hugo)

> <https://gohugo.io/getting-started/quick-start/>

MacOS 기준 (for MacOS)

### Hugo 설치 (Install Hugo)

```bash
brew install hugo
```

### Hugo 버전 확인 (check Hugo's version)

```bash
hugo version
```

### Hugo 사이트 만들기 (Create a new Hugo site)

```bash
hugo new site quickstart
```

### Hugo 테마 추가하기 (Add a Theme)

```bash
cd quickstart
git init
git submodule add https://github.com/[user-name]/[theme-repository].git themes/[theme-name]
```

### Hugo 테마 설정하기 (Configure a Theme)

```bash
echo 'theme = "[theme-name]"' >> config.toml
```

### Hugo 글쓰기 (Add Some Content)

```bash
hugo new posts/my-first-post.md
```

### Hugo 서버 실행하기 (Start a Hugo Server)

```bash
hugo server -D
```

- -D : draft: true 되어있는 초안 게시물도 같이 보는 기능

### Hugo 테마 꾸미기 (Customize the Theme)

:: /config.toml 수정

```toml
baseURL = "https://example.org/"
languageCode = "en-us"
title = "New Hugo"
theme = "haha"
```

### Hugo 빌드 하기 (Build static pages)

```bash
hugo -D
```

### 자신의 원격 깃헙 저장소에 올리기 (Upload to my github remote repository)

1. github 에서 [blog] 저장소 만들기
2. [user-name].github.io 저장소 만들기
3. Hugo 전체 파일 관리 (2 중 택 1)
   1. ```bash git clone [blog.git] && cd [blog]```
   2. ```bash git init && git remote add origin [blog.git]```
4. git [~.io] 저장소 submodule 등록  
    ```bash git submodule add -b master git@github.com:[github-ID]/[user-name].github.io.git public```

:: /deploy.sh

```bash
#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
```

- 편리한 배포 쉘 스크립트 제공 (작동 안 되면, 권한 지정 ```bash chmod +x deploy.sh```)
- [github-ID]/[blog].git : Hugo 전체 파일 관리 저장소
- [github-ID]/[user-name].github.io.git : Hugo 빌드한 정적 페이지(/public) 관리 저장소
- [github-ID]/[theme-name].git (Forked) : 테마 Fork하여 관리하는 저장소
- 위와 같이 쓰면 좋다고 합니다.

## 2. 다른 컴퓨터에서 블로그 작업 시(In other computer environment)

```bash
> git clone https://github.com/[github-ID]/blog.git
```

### submodule 재구성 (re init submodule)

```bash
> git submodule update --init --recursive
```

## 3. 추가 Git 명령어

### git 당겨오기

```bash
> git pull
```

### submodule 갱신하기

```bash
> git submodule update --recursive --remote
```

---

> 행복 코딩  
> plus. 재밌는 애니메이션 : <https://particleslider.com/>
