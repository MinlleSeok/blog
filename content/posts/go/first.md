---
title: "First"
date: 2019-12-30T22:27:58+09:00
---

# Go ��� ���� (Write in "Go")

### �ȳ�, �� (Hello, Go)

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, Go")
}
```

### Go ��� ��ġ (Install Go Language)

[https://golang.org/](https://golang.org/)

### Go ��ġ �� go tour ���� �ڵ� (After installing, go tour code)

```bash
% go get code.google.com/p/go-tour/gotour
```

## ��Ű�� (Packages) 

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

- ��� Go ���α׷��� ��Ű���� ���� (Every Go Program is made up of packages)
- import () ���·� ��Ű���� �ҷ��ɴϴ�. ( imports packages with import() )
-  ��Ű�� �̸��� ���丮 ����� ������ �̸��� ����ϴ� ���� ��Ģ! (the package name is the same as the last element of the import path!)
- import ("math/rand") => rand.func()
 
## �ҷ����� (import)

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

- ��Ű���� �ҷ��� �� �Ұ�ȣ�� ���μ� ǥ�� (groups the imports into a parenthesized, "factored" import statement)
- ������ import ���� ��� ���� (multiple import statements) 

```go
import "fmt"
import "math"
```

## �������� (Export)

- ��Ű���� import �ϸ� �ܺη� export �� �͵鿡 ������ �� �ֽ��ϴ�. (When importing a package, you can refer only to its exported name.)
- Go ������ ù ���ڰ� �빮�ڷ� �����ϸ� �� ��Ű���� ����ϴ� ������ ������ �� �ִ�exported name��  �˴ϴ�. (In Go, a name is exported if it begins with a capital letter.)

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

## �Լ� (Function)

- �Լ��� �Ű������� ���� �� �ֽ��ϴ�. (A function can take zero or more arguments.)

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

- �Ű����� Ÿ���� ������ �ڿ� ����մϴ�. (Notice that the type comes after the variable name)

- �� �� �̻��� �Ű������� ���� Ÿ���� ���ٸ� �������� �� �� ����մϴ�. (When two or more consecutive named function parameters share a type, you can omit the type from all but the last.)

```go
func add(x, y int) int {
	return x + y
}
```

## ���� ���� ��� (Multiple results)

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

- �ϳ��� �Լ��� ���� ���� ����� ��ȯ�� �� �ֽ��ϴ�. (A function can return any number of results.)

## �̸��� ������ ��� (Named Results)
