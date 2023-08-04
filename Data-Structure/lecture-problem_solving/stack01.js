// 단어 뒤집기 문제
// 공백으로 이뤄진 단어들의 리스트가 있을 때, 이 단어 리스트를 반대 순서로 뒤집어보자.
// 예) LIFO -> OFIL

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.next = null;
  }
  push(data) {
    let newNode = new Node(data);
    if (this.top == null) {
      this.top = newNode;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
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
}

let arr = [
  "Javascript",
  "is",
  "the",
  "Programming",
  "Language",
  "for",
  "the",
  "Web",
];

const stack = new Stack();
console.log("[Input]");
console.log(arr.join(" "));
arr.forEach((elem) => stack.push(elem));
console.log();
console.log("[Output]");
stack.print();
