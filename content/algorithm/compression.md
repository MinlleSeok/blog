---
title: "압축 알고리즘 - Compression"
date: 2020-03-04T10:28:37+09:00
---

# 압축 알고리즘 - Compression

- Huffman Coding

## Huffman Coding

- 가령 6개의 문자 a, b, c, d, e, f 로 이루어진 파일이 있다고 합니다.
- 문자의 총 개수는 100,000개이고 각 문자의 등장 횟수는 다음과 같습니다.
- 고정길이 코드를 사용하면 각각의 문자를 표현하기 위해서 3비트가 필요하며,
- 따라서 파일의 길이는 300,000비트가 됩니다.
- 테이블의 가변길이 코드를 사용하면 224,000바이트가 됩니다.

### 테이블

-                       a   b   c   d   e   f
- Frequency(천단위)     45  13  12  16  9   5
- Fixed-length code    000  110 010 011 100 101
- Variable-length       0   101 100 111 1101 1100

## Prefix code

- 어떤 codeword도 다른 codeword의 prefix가 되지 않는 코드
- 여기서 codeword란 하나의 문자에 부여된 이진코드를 말합니다.
- 모호함이 없이 decode가 가능합니다.
- prefix code는 하나의 이진트리로 표현 가능합니다.
- 모든 문자 node들이 leaf 노드라면 prefix 코드입니다.

## 원리

- Two Huffman trees created for five letters A, B, C, D, and E
- with probabilities .39, .21, .19, .12, and .09
- 빈도 수가 작은 두 값끼리 트리를 만들어갑니다.

## Run-Length Encoding

- 런(run)은 동일한 문자가 하나 혹은 그 이상 연속해서 나오는 것을 의미합니다.
- 예를 들어 스트링 s = "aaabba"는 다음과 같은 3개의 run으로 구성됩니다.
- "aaa", "bb", "a"
- run-length encoding에서는 각각의 run을 "그 run을 구성하는 문자"와
- "run의 길이"의 순서쌍 (n, ch)로 encoding합니다.
- 여기서 ch가 문자이고 n은 길이입니다.
- 가령 위의 문자열 s는 다음과 같이 코딩됩니다: 3a2b1a
- Run-length encoding은 길이가 긴 run들이 많은 경우에 효과적입니다.

## Huffman Method with Run-Length Encoding

- 무손실 압축 구현
- 파일을 구성하는 각각의 run들을 하나의 super-symbol로 봅니다.
- 이 super-symbol들에 대해서 Huffman coding을 적용합니다.
- 예를 들어 문자열 AAABAACCAABA은 5개의 super-symbol들
- AAA, B, AA, CC, 그리고 A로 구성되며, 각 super-symbol의 등장횟수는 다음과 같습니다.
- symbol        A   C   A   B   A
- run length    3   2   1   1   2
- frequency     1   1   1   2   2

## 제1단계 Run과 frequency 찾기

- 압축할 파일을 처음부터 끝까지 읽어서 파일을 구성하는 run들과 각 run들의 등장횟수를 구합니다.
- 먼저 각 run들을 표현할 하나의 클래스 class Run을 정의합니다.
- 클래스 run은 적어도 세 개의 데이터 멤버 symbol, runLen, 그리고 freq를 가져야 합니다.
- 여기서 symbol은 byte타입이고, 나머지는 정수들입니다.
- 인식한 run들은 하나의 ArrayList에 저장합니다.
- 적절한 생성자와 equals 메서드를 구현합니다.

### Run과 frequency 찾기

- 데이터 파일을 적어도 두 번 읽어야 합니다.
- 한 번은 run들을 찾기 위해서, 그리고 다음은 실제로 압축을 수행하기 위해서 입니다.
- 여기서는 RandomAccessFile을 이용하여 데이터 파일을 읽어봅니다.

```java
/* 읽을 데이터 파일을 엽니다 */
RandomAccessFile fIn = new RandomAccessFile(fileName, "r");

/* 한 byte를 읽어 옵니다. 읽어온 byte는 0~255사이의 정수로 반환됩니다. */
/* 파일의 끝에 도달하면 -을 반환합니다 */
/* 4자리 바이트의 마지막 한 바이트가 읽은 값 */
int ch = fIn.read();

/* 필요하다면 byte로 casting해서 저장합니다. */
byte symbol = (byte)ch;
```

## Run 인식하기

- 1. 파일의 첫 byte를 읽고 이것을 start_symbol이라고 합니다.
- 2. 파일의 끝에 도달하거나 혹은 start_symbol과 다른 byte가 나올 때까지
-    연속해서 읽습니다. 현재까지 읽은 byte 수를 count라고 합니다.
-    이 예에서는 지금 byte=4입니다.
- 3. (start_symbol, count-1)인 run이 하나 인식되었습니다.
-    이 run을 저장하고 가장 마지막에 읽은 byte를 start_symbol로,
-    count=1로 reset하고 다시 반복합니다.

```java
class Run {
    public byte symbol;
    public int runLen;
    public int freq;

    /* 적절한 생성자와 equals 메서드를 완성하세요 */
}
```

```java
public class HuffmanCoding {
    /* 인식한 run들을 저장할 ArrayList를 만듭니다 */
    private ArrayList<Run> runs = new ArrayList<Run>();

    private void collectRuns(RandomAccessFile fIn) throws IOException {
        /* 데이터 파일 fIn에 등장하는 모든 run들과 각각의 등장횟수를 count하여 */
        /* ArrayList runs에 저장합니다. */
    }

    static public void main (String args[]) {
        HuffmanCoding app = new HuffmanCoding();
        RandomAccessFile fIn;
        try {
            fIn = new RandomAccessFile("sample.txt", "r");
            app.collectRuns(fIn);
            fIn.close();
        } catch (IOException io) {
            System.err.println("Cannot open " + fileName);
        }
    }
}
```

## Implement in C

```c
typedef struct run Run;

typedef struct run {
    unsigned char symbol;
    int run_length;
    int freq;
};

Run *runs[MAX];
int number_runs = 0;

vold collectRuns(FILE *fIn) {
    /* 데이터 파일 fIn에 등장하는 모든 run들과 각각의 등장횟수를 count하여 */
    /* 배열 runs에 저장합니다. */
    /* Run객체들을 동적메모리할당으로 생성하여 배열 runs에 객체의 주소를 저장하고 */
    /* 배열의 크기가 부족할 경우 array doubling을 하도록 구현하세요. */
}
```