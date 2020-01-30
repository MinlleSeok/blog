---
title: "알고리즘 - 트리와 이진트리"
date: 2020-01-30T11:45:59+09:00
---

# 알고리즘 - 트리와 이진트리

- 계층적인 구조를 표현
- 조직도
- 디렉토리와 서브디렉토리 구조
- 가계도

## 맨 위의 노드 : 루트(root)

- 트리는 노드(node)들과 노드들을 연결하는 링크(link)들로 구성됨
- 노드들을 연결하는 선을 "link", "edge", "branch"등으로 부름

## 부모-자식 관계

- 부모(parent) 노드 : animal
- 자식(child) 노드 : cat, fox, wolf

## 형제 관계

- 루트노드를 제외한 트리의 모든 노드들은 유일한 부모 노드를 가짐
- 부모가 동일한 노드들을 형제(sibling) 관계라고 부름

## 리프(leaf) 노드

- 리프노드가 아닌 노드들을 내부(internal)노드라고 부름
- 자식이 없는 노드들을 leaf노드라고 부름

## 조상 - 자손 관계

- 조상(ancestor) 노드 : animal
- 자손(descendant) 노드 : canine
- 부모 - 자식 관계를 확장한 것이 조상 - 자손 (ancestor - descendant) 관계입니다.

## 부트리 : Subtree

- 트리에서 어떤 한 노드와 그 노드의 자손들로 이루어진 트리를 부트리(subtree)라고 부릅니다.

## 레벨

- 루트 : 레벨1
- 루트의 자식 : 레벨2
- 손자 : 레벨3

## 높이

- 트리의 높이(height) : 3

## 트리의 기본적인 성질

- 노드가 N개인 트리의 링크의 개수는 N - 1개입니다.
- 노드가 N개인 트리는 항상 N-1개의 링크(link)를 가집니다.
- 트리에서 루트에서 어떤 노드로 가는 경로는 유일합니다.
- 또한 임의의 두 노드간의 경로도 유일합니다.
- (같은 노드를 두 번 이상 방문하지 않는 경우)

## 이진 트리 (binary tree)

- 이진 트리에서 각 노드는 최대 2개의 자식을 가집니다.
- 각각의 자식 노드는 자신이 부모의 왼쪽 자식인지 오른쪽 자식인지가 지정됩니다.
- 자식이 한 명인 경우에도 그렇습니다.

## 이진 트리 응용의 예 : Expression Tree

- (x + y) * ((a + b) / c)
- 이 수식을 계산할 때 이진 트리를 응용할 수 있습니다.

## 이진 트리 응용의 예 : Huffman Code

- 데이터 압축하는 기본적인 알고리즘
- 텍스트 파일을 구성하는 알파벳 a-z 적절하게 인코딩
- 최종적으로 파일의 길이가 최소화되도록 하는 알고리즘

## Full and Complete Binary Trees

- full binary tree : 모든 레벨의 노드가 꽉 차있는 트리
- Complete binary tree : 마지막 레벨 오른쪽 에서부터 거꾸로 연속되게 비어있어도 괜찮은 트리(heap 조건)
- 높이가 h인 full binary tree는 2^h - 1 개의 노드를 가집니다.
- 노드가 N개인 full 혹은 complete 이진 트리의 높이는 O(logN)입니다.

## 이진트리의 표현

- 연결구조(Linked Structure) 표현
- 각 노드에 하나의 데이터 필드와 왼쪽 자식(left), 오른쪽 자식(right),
- 그리고 부모노드(p)의 주소를 저장
- 부모노드의 주소는 반드시 필요한 경우가 아니면 보통 생략
- 노드 객체 (data, left, right, 필요에 따라 parent)
- 루트 노드의 주소는 따로 보관합니다.

## 이진트리의 순회 (traversal)

- 순회 : 이진 트리의 모든 노드를 방문하는 일
- 중순위(inorder) 순회
- 선순위(preorder) 순회
- 후순위(postorder) 순회
- 레벨오더(level-order) 순회

## 이진트리의 Inorder - 순회

- 1. 먼저 T(L)(서브트리)을 inorder로 순회하고,
- 2. r(루트)을 순회하고,
- 3. T(R)을 inorder로 순회
- 이진트리를 루트노드 r
- 왼쪽 부트리 T(L)
- 오른쪽 부트리 T(R)로 나누어 생각

## 수도 코드

```t
INORDER-TREE-WALK(x)
    if x =/ NULL(NIL)
        then INORDER-TREE-WALK(left[x])
            print key[x](node x의 데이터)
            INORDER-TREE-WALK(right[x])
            (노드 x를 루트로 하는 오른쪽 서브트리에 리커젼)
```

- x를 루트로 하는 트리를 inorder 순회
- 시간복잡도 O(n)

## Postorder와 Preorder 순회

```r
PREORDER-TREE-WALK(x)
    if x =/ NIL
    then    print key[x]
            PREORDER-TREE-WALK(left[x])
            PREORDER-TREE-WALK(right[x])

POSTORDER-TREE-WALK(x)
    if x =/ NIL
    then    POSTORDER-TREE-WALK(left[x])
            POSTORDER-TREE-WALK(right[x])
            print key[x]
```

- 루트, 루트의 왼쪽 서브트리, 루트의 오른쪽 서브트리

## Expression Trees

- Expression 트리를 inorder 순회하면 다음과 같이 출력됨:
- x + y * a + b / c
- 각 부트리를 순회할 때 시작과 종료시에 괄호를 추가하면 다음과 같이 올바른 수식이 출력됨:
- (x + y) * ((a + b) / c)
- Postorder 순회하면 후위표기식이 출력됨:
- x y + a b + c / *

## Level-Order 순회

- 레벨 순으로 방문, 동일 레벨에서는 왼쪽에서 오른쪽 순서로
- 큐(queue)를 이용하여 구현
- 큐에 루트를 넣고 꺼냅니다.
- 자식 노드를 방문하고 왼쪽부터 큐에 집어넣습니다.
- 반복

## 수도 코드

```r
LEVEL-ORDER-TREE-TRAVERSAL()
    visit the root;
    Q <- root;  // Q is a queue
    while Q is not empty do
        V <- dequeue(Q);
        visit children of v;
        enqueue children of v into Q;
    end.
end.
```

- 루트 노드 방문
- 루트 노드 큐에 넣습니다.
- 큐가 빌 때 까지
- 큐에서 하나를 꺼냅니다.
- 큐에서 꺼낸 노드의 자식 노드를 방문합니다.
- 그 자식 노드들을 다시 큐에 넣습니다.
- 반복
