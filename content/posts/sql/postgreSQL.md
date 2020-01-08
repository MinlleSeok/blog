---
title: "PostgreSQL - 명령어 정리(Command)"
date: 2019-12-26T21:52:28+09:00
modified: 2020-01-08T16:03:00+09:00
categories: ["PostgreSQL"]
---

# PostgreSQL - 명령어 정리(Command)

## Install on Mac

<https://formulae.brew.sh/formula/postgresql>

### install Command

```bash
brew install postgresql
```

### Server start

```bash
pg_ctl -D /usr/local/var/postgres start
```

### Server stop

```bash
pg_ctl -D /usr/local/var/postgres stop
```

### status check

```bash
export PGDATA='/usr/local/var/postgres'
pg_ctl status
```

---

<p style="text-align: center">행복 코딩</p>
