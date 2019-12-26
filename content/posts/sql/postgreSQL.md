---
title: "PostgreSQL"
date: 2019-12-26T21:52:28+09:00
categories: ["PostgreSQL"]
---

PostgreSQL
===

Install on Mac
---

https://formulae.brew.sh/formula/postgresql
```
$ brew install postgresql
```

Server start
```
$ pg_ctl -D /usr/local/var/postgres start
```

Server stop
```
$ pg_ctl -D /usr/local/var/postgres stop
```

status check
```
$ export PGDATA='/usr/local/var/postgres'
$ pg_ctl status     
```