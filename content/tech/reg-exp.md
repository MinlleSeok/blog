---
title: "정규식 표현 - Regular Expression"
date: 2020-01-15T14:27:36+09:00
draft: true
categories: ["tech"]
---

# 정규식 표현 - Regular Expression

[Test] : <https://regexr.com/>
[Reference] : <https://en.wikipedia.org/wiki/Regular_expression>

```js
> "문자열 ''' ' '속의 string ㄴ#$%ㄴㅇ' 그리고 '$또한 번 더 ㅇ@#'".match(/'[^']*'/g)
                                            .map(a => a.replace(/'/g,''))

< (4) ["", " ", "속의 string ㄴ#$%ㄴㅇ", "$또한 번 더 ㅇ@#"]
```

```js
const print = (a) => console.log(a);
const println = (a) => console.log(a);
const Program = {
  compare: (o1, o2) => {
    if(typeof(o1) === "object") {
      for(let i=0; i<o1.length; i++) {
        if(o1[i] !== o2[i])
          return false;
      }
      return true;
    } else {
      return o1 === o2;
    }
  },
  assertEqual: (func, target) => {
    const result = func;
    print(`assertEqual target=${target} result=${Program.compare(result, target)}`);
  }
}

function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;
  
  while(min <= max) {
    let guess = Math.round((min + max) / 2);
    if(array[guess] === target){
      return guess;
    } else if (array[guess] > target) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }
  return -1;
}

const A = [1,2,3,4,45,67];
const target = 45;
print(`target=${target} found=Array[${binarySearch(A, target)}]`);

print(`===========================`);
print(`===========================`);

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
const doSearch = function(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
  let guess;
  let count = 0;

    while (max >= min) {
        count++;
        guess = Math.floor((max + min) / 2);

        println(`guess=${guess}`);

        if(array[guess] === targetValue) {
            println(`count=${count}`);
            return guess;
        }

        if(array[guess] < targetValue){
            min = guess + 1;
        } else {
            max = guess - 1;
        }
        
    }
	return -1;
};

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = doSearch(primes, 41);
println("Found prime at index " + result);

print(`===========================`);
print(`===========================`);

Program.assertEqual(doSearch(primes, 73), 20);

print(`===========================`);
print(`===========================`);

Program.assertEqual(doSearch(primes, 41), 12);
// Program.assertEqual(doSearch(primes, 6), -1);
print(`===========================`);
print(`===========================`);

print(`git revert -m 1 HEAD`);

const doLinearSearch = function(array, targetValue) {
  for (let guess=0; guess<array.length; guess++) {
    if (array[guess] === targetValue) {
      return guess; // 찾은 경우
    }
  }
  return -1;  // 찾지 못한 경우
}

doLinearSearch(A, 12);

print(`===========================`);
print(`===========================`);

const swap = function(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

let testArray = [7, 9, 4];

swap(testArray, 0, 1);
Program.assertEqual(testArray, [9, 7, 4]);

var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    for(var i=minIndex+1; i<array.length; i++) {
        if(minValue > array[i]) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);
println(array);
index = indexOfMinimum(array, 1);
println(array);
Program.assertEqual(index, 1);
index = indexOfMinimum(array, 0);
println(array);
Program.assertEqual(index, 1);
```
