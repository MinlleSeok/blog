---
title: "Python"
date: 2019-12-23T21:24:34+09:00
---

Python 가상환경 관리 pyenv 설치
===

mac 기준,
Homebrew를 사용해서 설치합니다.

설치
```
% brew update
% brew install pyenv
```
환경설정
```
% echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
% echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
% echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
```

Python 원하는 버전 설치
```
% pyenv install [version_name]
% pyenv global [version_name]
% python --version
```

