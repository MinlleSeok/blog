---
title: "압축 알고리즘 - 제 2단계 Huffman Tree"
date: 2020-03-10T13:27:05+09:00
---

# Huffman coding

- Huffman coding 알고리즘은 트리들의 집합을 유지하면서
- 매 단계에서 가장 frequency가 작은 두 트리를 찾아서
- 두 트리를 하나로 합칩니다.
- 이런 연산에 가장 적합한 자료구조는 최소 힙(minimum heap)입니다.
- 즉, 힙에 저장된 각각의 원소들은 하나의 트리입니다. (노드가 아니라요)

## 최소 힙

- 크기가 5인 힙, 5개의 트리가 저장되어 있습니다.
- 5개의 single node tree
- 각 트리는 오직 하나의 노드로 구성됩니다.

## class Run 수정하기

```java
class Run implements Comparable<Run> {
    public byte symbol;
    public int runen;
    public int freq;
}

/* 트리의 노드로 사용하기 위해서 왼쪽 자식과 오른쪽 자식 노드 필드를 추가합니다. */

/* 두 run의 크기 관계를 비교하는 compareTo 메서드를 overriding 하라. */
/* 비교의 기준은 freq입니다. */

```

- 3장에서 작성했던 Heap 클래스를 가져와서 사용합니다.
- Generics로 수정하고, heapify, insert, extractMin 등의 함수들을
- min heap 에 맞게 수정합니다.
- C로 구현한 사람들은 별개의 모듈로 min heap을 구현합니다.

```java
public class HuffmanCoding {
    private ArrayList<Run> runs = new ArrayList<Run>();

    private Heap<Run> heap; /* minimum heap 입니다. */
    private Run theRoot = null; /* root of the Huffman tree */

    private void createHuffmanTree() {
        heap = new Heap<Run>();

        /* 1. Store all runs into the heap. */
        /* 2. While the heap size > 1 do */
        /*      (1) perform extractMin two times  */
        /*      (2) make a combined tree */
        /*      (2) insert the combined tree into the heap. */
        /* 3. Let theRoot be the root of the tree. */
    }
}
```

## Huffman Tree 출력해보기

- class Run에 적절한 toString 메서드를 추가하여 트리를 출력해봅시다.

```java
private void printHuffmanTree() {
    preOrderTraverse(theRoot, 0);
}

private void preOrderTraverse(Run node, int depth) {
    for (int i = 0; i < depth; i++)
        System.out.print(" ");
    if (node == null) {
        System.out.println("null");
    } else {
        System.out.println(node.toString());
        preOrderTraverse(node.left, depth + 1);
        preOrderTraverse(node.right, depth + 1);
    }
}
```

## Codeword 부여하기

- Huffman 트리의 리프 노드에 위치한 run들에게 이진 codeword를 부여할 차례입니다.

```java
assignCodeword(prefix, node)
if node is a leaf
    assign prefix to the node;
else
    assignCodeword(prefix + `0`, node.left);
    assignCodeword(prefix + `1`, node.right);
```

- 임의의 길이의 이진수열
- 여기서 prefix를 하나의 32비트 정수로 표현합니다.
- 하지만 32비트 중에서 하위 몇 비트만이 실제 부여된 codeword입니다.
- 따라서 codeword의 길이를 따로 유지해야 합니다.

```java
class Run implements Comparable<Run> {
    public byte symbol;
    public int runLen;
    public int freq;

    /* 트리의 노드로 사용하기 위해서 왼쪽 자식과 오른쪽 자식 노드 필드를 추가합니다. */
    
    /* 노드에 부여된 codeword를 저장하기 위한 필드들을 다음과 같이 추가합니다. */
    public int codeword;    /* 부여된 codeword를 32비트 정수로 저장 */
    public int codewordLen; /* 부여된 codeword의 길이. 즉 codeword의 하위 codewordLen비트가 실제 codeword */
}
```

## Java에서의 비트(bit) 연산

```java
public class Test {
    public static void main(String args[]) {
        int a = 60; /* 60 = 0011 1100 */
        int b = 13; /* 13 = 0000 1101 */
        int c = 0;

        c = a & b;  /* 12 = 0000 1100 */
        System.out.println("a & b = " + c);

        c = a | b;  /* 61 = 0011 1101 */
        System.out.println("a | b = " + c);

        c = a ^ b;  /* 49 = 0011 0001 */
        System.out.println("a ^ b = " + c);

        c = ~a;  /* -61 = 1100 0011 */
        System.out.println("~a = " + c);

        c = a << 1;  /* 120 = 0111 1000 */
        System.out.println("a << 1 = " + c);

        c = (a << 1) + 1;  /* 121 = 0111 1001 */
        System.out.println("(a << 1) + 1 = " + c);

        c = a << 2;  /* 240 = 1111 0000 */
        System.out.println("a << 2 = " + c);
    }
}
```

## codeword 부여하기

```java
private void assignCodewords(Run p, int codeword, int length) {
    // assignCodewords(theRoot, 0, 0) 으로 호출합니다.
    // 노드 p에 부여된 codeword
    // 노드 p에 부여된 codeword의 길이

    if (p.left == null && p.right == null) {
        // 리프노드일 때

        p.codeword = codeword;
        p.codewordLen = length;
    }
    else {
        assignCodewords(    );
        assignCodewords(    );
        // 왼쪽 자식노드에게는 codeword의 뒤에 0을 추가하고
        // 오른쪽 자식에게는 1을 추가합니다.
        // 길이는 1 증가합니다.
    }
}
```

## main과 compressFile 메서드

```java
public class HuffmanCoding {
    ...

    public void compressFile(RandomAccessFile fIn) {
        collectRuns(fIn);
        createHuffmanTree();
        assignCodewords(theRoot, 0, 0);
    }

    static public void main (String args[]) {
        HuffmanCoding app = new HuffmanCoding();
        RandomAccessFile fIn;
        try {
            fIn = new RandomAccessFile("sample.txt", "r");
            app.compressFile(fIn);
            fIn.close();
        } catch (IOException io) {
            System.err.println("Cannot open " + fileName);
        }
    }
}
```
