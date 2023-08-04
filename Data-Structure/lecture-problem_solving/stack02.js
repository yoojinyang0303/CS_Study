// 괄호
/*
'('와 ')'로만 이뤄진 문자열이 있을 때, 정상적인 괄호 구조로 이뤄져 있는지 판단해보자.
'()', '(())', '()(()())' 같은 경우는 괄호 구조가 정상적으로 이줘져 있다. ("O" 출력)
반면, '((', ')(', '((())' 같은 경우는 괄호 구조가 정상적으로 이뤄져 있지 않다. ("X" 출력)
*/
// 문제 풀이 영상의 코드에 오류가 있음. 일단 넘어가고 추후 해결하기.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data);

    if (this.top == null) {
      // this.size == 0, this.getSize() == 0, this.isEmpty()
      this.top = newNode;
      this.size++;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  getTop() {
    if (this.isEmpty) {
      return null;
    }
    return this.top.data;
  }
  pop() {
    let topData = this.getTop();
    this.top = this.top.next;

    this.size--;

    return topData;
  }
  print() {
    let curr = this.top;

    let result = "";
    while (curr != null) {
      result += curr.data + " ";
      curr = curr.next;
    }
    console.log(result);
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return !this.getSize();
  }
}

let arr = "(()(()))((()))";
// let arr = "(()((())()()(";

const stack = new Stack();

// 정상적인 괄호 구조이면 true, 그렇지 않다면 false
let isNormal = true;

[...arr].forEach((elem) => {
  if (stack.isEmpty()) {
    if (elem == ")") {
      isNormal = false;
    } else {
      stack.push(elem);
      console.log("(1) elem 추가: " + elem);
    }
    return;
  }

  if (elem == ")") {
    if (stack.getTop() == "(") {
      stack.pop();
    } else {
      isNormal = false;
      return;
    }
  } else {
    // "("
    stack.push(elem);
    console.log("(2) elem 추가: " + elem);
  }
});

// "(((" 이런 경우도 고려하기!!
if (!stack.isEmpty()) {
  isNormal = false;
}

console.log("== stack ==");
stack.print();
console.log(isNormal ? "O" : "X");

console.log("[Input]");
console.log("(()(()))((()))");
console.log("(()((())()()(");
console.log();
console.log("[Output]");
