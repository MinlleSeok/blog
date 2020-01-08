---
title: "고로 작성해봐요 - Write in Go"
date: 2019-12-30T22:27:58+09:00
modified: 2020-01-08T16:03:00+09:00
---

# Go 언어 배우기 (Write in "Go")

## 안녕, 고 (Hello, Go)

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, Go")
}
```

### Go 언어 설치 (Install Go Language)

[https://golang.org/](https://golang.org/)

### Go 설치 후 go tour 시작 코드 (After installing, go tour code)

```bash
% go get code.google.com/p/go-tour/gotour
```

## 패키지 (Packages)

```go
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}

```

- 모든 Go 프로그램은 패키지로 구성 (Every Go Program is made up of packages)
- import () 형태로 패키지를 불러옵니다. ( imports packages with import() )
- 패키지 이름은 디렉토리 경로의 마지막 이름을 사용하는 것이 규칙! (the package name is the same as the last element of the import path!)
- import ("math/rand") => rand.func()

## 불러오기 (import)

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Now you have %g problems.", math.Nextafter(2, 3))
}
```

- 패키지를 불러올 때 소괄호로 감싸서 표현 (groups the imports into a parenthesized, "factored" import statement)
- 여러번 import 구문 사용 가능 (multiple import statements) 

```go
import "fmt"
import "math"
```

## 내보내기 (Export)

- 패키지를 import 하면 외부로 export 한 것들에 접근할 수 있습니다. (When importing a package, you can refer only to its exported name.)
- Go 에서는 첫 문자가 대문자로 시작하면 그 패키지를 사용하는 곳에서 접근할 수 있는exported name이  됩니다. (In Go, a name is exported if it begins with a capital letter.)

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(math.Pi)
	// Error : fmt.Println(math.pi)
}
```

## 함수 (Function)

- 함수는 매개변수를 가질 수 있습니다. (A function can take zero or more arguments.)

```go
package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```

- 매개변수 타입은 변수명 뒤에 명시합니다. (Notice that the type comes after the variable name)

- 두 개 이상의 매개변수가 같은 타입을 쓴다면 마지막에 한 번 명시합니다. (When two or more consecutive named function parameters share a type, you can omit the type from all but the last.)

```go
func add(x, y int) int {
	return x + y
}
```

## 여러 개의 결과 (Multiple results)

```go
package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```

- 하나의 함수는 여러 개의 결과를 반환할 수 있습니다. (A function can return any number of results.)

<!-- ## 이름이 정해진 결과 (Named Results) -->

---

> 행복 코딩
