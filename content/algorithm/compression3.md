---
title: "압축 알고리즘 - 제 3단계 Huffman Tree"
date: 2020-03-12T18:12:12+09:00
---

# 압축 알고리즘 - 제 2단계 Huffman Tree

- 인코딩
- 데이터 파일을 압축하기 위해서는 데이터 파일을 다시 시작부터 읽으면서
- run을 하나씩 인식한 후 해당 run에 부여된 codeword를 검색합니다.
- Huffman트리에는 모든 run들이 리프노드에 위치하므로 검색하기 불편합니다.
- 검색하기 편리한 구조를 만들어야 합니다.

## Array of Linked Lists

- 크기가 256인 배열 chars['A', 'B', 'C', 'D', ...]
- symbol
- codeword
- freq
- runLen
- codewordLen
- next(right)
- 각 run의 right 필드를 다음 노드를 가리키는 링크필드로 사용합니다.
- symbol이 동일한 run들을 하나의 연결리스트로 저장합니다.

## store Runs Into Array

- C : Run * chars[256];

```java
private Run[] chars = new Run[256];

/* Huffman 트리의 모든 리프노드들을 chars에 recursion으로 저장합니다 */
private void storeRunsIntoArray(Run p) {
    if (p.left == null && p.right == null) {
        insertToArray(p);   // 배열 chars[(unsigned int)p.symbol]가 가리키는
                            // 연결 리스트의 맨 앞에 p를 삽입합니다.
    } else {
        storeRunsIntoArray(p.left);
        storeRunsIntoArray(p.right);
    }
}

public void compressFile(RandomAccessFile fIn) {
    collectRuns(fIn);
    createHuffmanTree();
    assignCodewords(theRoot, 0, 0);
    storeRunsIntoArray(theRoot);
}
```

## Run 검색하기

- symbol과 runLength가 주어질 때 배열 chars를 검색하여 해당하는
- run을 찾아 반환하는 메서드를 작성합니다.

```java
public Run findRun(byte symbol, int length) {
    /* 배열 chars에서 (symbol, length)에 해당하는 run을 찾아 반환합니다. */
}
```

## 제 5단계 인코딩 하기

- 인코딩
    - 압축파일의 맨 앞부분(header)에 파일을 구성하는 run들에 대한 정보를 기록합니다.
    - 이때 원본 파일의 길이도 함께 기록합니다(왜 필요할까?)
    - run과 frequency에 관한 정보를 기록,,

## outputFrequencies

```java
private void outputFrequencies(RandomAccessFile fIn,
            RandomAccessFile fOut) throws IOException {
    // fIn은 압축할 파일, fOut은 압축된 파일입니다.
    // 먼저 run의 개수를 하나의 정수로 출력합니다.
    fOut.writeInt(runs.size());
    // 원본 파일의 크기(byte단위)를 출력합니다.
    // collectRuns를 했기 때문에 포인터가 파일의 끝까지 가있는 상태
    fOut.writeLong(fIn.getFilePointer());

    // 각각의 run들을 출력합니다.
    for (int j = 0; j < runs.size(); j++) {
        Run r = runs.get(j);
        fOut.write(r.symbol);   // write a byte
        fOut.writeInt(r.runLen);
        fOut.writeInt(r.freq);
    }
}
```

## compressFile

```java
public void compressFile(String inFileName, RandomAccessFile fIn)
                                                throws IOException {
    // fIn은 압축할 파일, inFileName은 그 파일의 이름입니다.
    // 파일의 이름을 추가로 받는 이유는 압축된 파일의 이름을 정하기 위해서입니다.
    // 압축파일의 이름은 압축할 파일의 이름에 확장자를 .z를 붙인 것입니다.
    String outFileName = new String(inFileName + ".z");

    // 압축파일을 여기서 생성하여 outputFrequencies와 encode메서드에게 제공합니다.
    RandomAccessFile fOut = new RandomAccessFile(outFileName, "rw");

    collectRuns(fIn);
    outputFrequencies(fIn, fOut);
    createHuffmanTree();
    assignCodewords(theRoot, 0, 0);
    storeRunsIntoHashMap(theRoot);
    fIn.seek(0);    // 파일의 시작 위치로 돌아갑니다.
    encode(fIn, fOut);
}
```

## main

```java
public class HuffmanCoding {
    ...

    public void compressFIle(String inFileName, RandomAccessFile fIn)
                                                    throws IOException {
        ...
    }

    static public void main (String args[]) {
        HuffmanCoding app = new HuffmanCoding();
        RandomAccessFile fIn;

        try {
            fIn = new RandomAccessFile("sample.txt", "r");
            app.compressFile("sample.txt", fIn);
            fIn.close();
        } catch (IOException io) {
            System.err.println("Cannot open " + fileName);
        }
    }
}
```

## encode()

- encode를 위하여 하나의 buffer를 사용합니다.
- 실제로는 32비트 정수를 사용하여 구현합니다.
- 1. 버퍼가 다 찰 때까지 연달아 기록 후 파일에 출력합니다.
- 2. 반복합니다.
- 마지막 버퍼에 남은 비트 자리수가 있다면 끝에 0을 추가해서 바이트를 맞춥니다.

## encode

```java
private void encode(RandomAccessFile fIn, RandomAccessFile fOut) {
    while there remains bytes to read in the file {
        recognise a run;    // collectRuns과 비슷
        find the codeword for the run;  // HashMap (map.get(newRun.symbol, runLen))
        pack the codeword into the bufffer; // 기존 버퍼를 왼쪽에 쉬프트시키고 코드워드를 맨 오른쪽에 기록
        if the buffer becomes full
            write the buffer into the compressed file;
    }
    // 버퍼에 남은 비트가 있다면
    if buffer is not empty {
        apppend 0s into the buffer; // 0을 채워서 1바이트를 만듭니다.
        write the buffer into the compressed file;  // 압축파일에 써줍니다.
    }
}
```

## class HuffmanEncoder

```java
public class HuffmanEncoder {
    static public void main (String args[]) {
        String fileName = "";
        HuffmanCoding app = new HuffmanCoding();
        RandomAccessFile fIn;
        Scanner kb = new Scanner(System.in);
        try {
            System.out.print("Enter a file name: ");
            fileName = kb.next();
            fIn = new RandomAccessFile(fileName, "r");
            app.compressFile(fileName, fIn);
            fIn.close();
        } catch (IOException io) {
            System.err.println("Cannot open " + fileName);
        }
    }
}
```

## 제 6단계 디코딩하기

```java
public class HuffmanDecoder {
    static public void main (String args[]) {
        String fileName = "";
        HuffmanCoding app = new HuffmanCoding();
        RandomAccessFile fIn;
        Scanner kb = new Scanner(System.in);
        try {
            System.out.print("Enter a file name : ");
            fileName = kb.next();
            fIn = new RandomAccessFile(fileName, "r");
            app.decompressFile(fileName, fIn);
            fIn.close();
        } catch (IOException io) {
            System.err.println("Cannot open " + fileName);
        }
    }
}
```

## decompressFile

```java
public void decompressFile(String inFileName, RandomAccessFile fIn)
                                                throws IOException {
    String outFileName = new String(inFileName + ".dec");
    RandomAccessFile fOut = new RandomAccessFile(outFileName, "rw");
    inputFrequencies(fIn);
    createHuffmanTree();
    assignCodewords(theRoot, 0, 0);
    decode(fIn, fOut);
    // 디코딩에는 해쉬맵 만드는게 필요없습니다
    // prefix codewords이기 떄문에
    // 트리를 따라 내려가서 리프노드를 만나면 하나의 run입니다.
}
```

## inputFrequencies

- outputFrequencies와 같은 기능,
- 파일로부터 읽으면 됩니다.

```java
private void inputFrequencies(RandomAccessFile fIn)
                                    throws IOException {
    // runs의 개수 읽기
    int dataIndex = fIn.readInt();
    // 원본 파일의 길이
    charCnt = fIn.readLong();
    // 옵션 - 정해진 길이의 배열(ArrayList)로 설정합니다.
    runs.ensureCapacity(dataIndex);
    for (int j = 0; j < dataIndex; ++j) {
        Run r = new Run();
        r.symbol = (byte) fIn.read();
        r.runLen = fIn.readInt();
        r.freq = fIn.readInt();
        runs.add(r);
    }
}
```

## decode

```java
private void decode(RandomAccessFile fIn, RandomAccessFile fOut)
                                                throws IOException {
    
}
```
