---
title: "[알고리즘] Java에서의 정렬"
date: 2020-01-29T12:26:07+09:00
---

# [알고리즘] Java에서의 정렬

- Arrays클래스가 primitive타입 데이터를 위한 정렬 메서드를 제공

```java
int[] data = new int[capacity];
// data[0]에서 data[capacity - 1]까지 데이터가 꽉
// 차있는 경우에는 다음과 같이 정렬합니다.
Arrays.sort(data);
// 배열에 꽉 차있지 않고 data[0]에서 data[size - 1]까지
// size개의 데이터만 있다면 다음과 같이 합니다.
Arrays.sort(data, 0, size);
```

- int 이외의 다른 primitive 타입 데이터(double, char 등)에 대해서도 제공

## 객체의 정렬 : 문자열

```java
String [] fruits = new String[] { "Pineapple", "Apple", "Orange", "Banana" };
Arrays.sort(fruits);
for (String name: fruits) {
    System.out.println(name);
}
```

## ArrayList 정렬 : 문자열

```java
List<String> fruits = new ArrayList<String>();
fruits.add("Pineapple");
fruits.add("Apple");
fruits.add("Orange");
fruits.add("Banana");

Collections.sort(fruits);

for (String name : fruits)
    System.out.println(name);
```

## 객체의 정렬 : 사용자 정의 객체

```java
public class Fruit {
    public String name;
    public int quantity;
    public Fruit(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

// somewhere in your program
Fruit [] fruits = new Fruit[4];
fruits[0] = new Fruit("Pineapple", 70);
fruits[1] = new Fruit("Apple", 100);
fruits[2] = new Fruit("Orange", 80);
fruits[3] = new Fruit("Banana", 90);

Arrays.sort(fruits);
```

## 객체의 정렬 : Comparable Interface

```java
public class Fruit implements Comparable<Fruit> {
    public String name;
    public int quantity;
    public Fruit(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    public int compareTo(Fruit other) {
        return name.compareTo(other.name);
    }
}

// somewhere in your program
Fruit[] = fruits = new Fruit[4];
fruits[0] = new Fruit("Pineapple", 70);
fruits[1] = new Fruit("Apple", 100);
fruits[2] = new Fruit("Orange", 80);
fruits[3] = new Fruit("Banana", 90);

Arrays.sort(fruits);
```

## 만약 재고수량으로 정렬하고 싶다면?

```java
public class Fruit implements Comparable<Fruit> {
    public String name;
    public int quantity;
    public Fruit(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    public int compareTo(Fruit other) {
        return quantity - other.quantity;
    }
}

// somewhere in your program
Fruit[] = fruits = new Fruit[4];
fruits[0] = new Fruit("Pineapple", 70);
fruits[1] = new Fruit("Apple", 100);
fruits[2] = new Fruit("Orange", 80);
fruits[3] = new Fruit("Banana", 90);

Arrays.sort(fruits);
```

## 두 가지 기준을 동시에 지원하려면?

- 하나의 객체 타입에 대해서 2가지 이상의 기준으로 정렬을 지원하려면
- Comparator를 사용
- Comparator 클래스를 extends하며 compare 메서드를 overriding하는
- 새로운 이름없는 클래스를 정의한 후 그 클래스의 객체를 하나 생성합니다.

```java
Comparator<Fruit> nameComparator = new Comparator<Fruit>() {
    public int compare(Fruit fruit1, Fruit fruit2) {
        return fruit1.name.compareTo(fruit2.name);
    }
};

Comparator<Fruit> quantComparator = new Comparator<Fruit>() {
    public int compare(Fruit fruit1, Fruit fruit2) {
        return fruit1.quantity - fruit2.quantity;
    }
};

Arrays.sort(fruits, nameComparator);

Arrays.sort(fruits, quantComparator);
```

## Comparator 위치

```java
public class Fruit {
    public String name;
    public int quantity;
    public Fruit(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public static Comparator<Fruit> nameComparator = new Comparator<Fruit>() {
        public int compare(Fruit fruit1, Fruit fruit2) {
            return fruit1.name.compareTo(fruit2.name);
        }
    };

    public static Comparator<Fruit> quantComparator = new Comparator<Fruit>() {
        public int compare(Fruit fruit1, Fruit fruit2) {
            return fruit1.quantity - fruit2.quantity;
        }
    };
} 
```
