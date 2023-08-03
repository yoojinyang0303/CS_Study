// 스택 구현 (1) - Node, Stack Class 구현
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
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.top = newNode;
      this.size++;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;

    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return;
    }
    let curr = this.top;
    this.top = this.top.next;
    this.size--;
    console.log(`pop의 curr :: ${curr.data}`);
  }
  // LIFO_Last In First Out
  print() {
    let curr = this.top;
    console.log(`크기:: ${this.getSize()}`);

    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return !this.size;
  }
}

const stack = new Stack();
stack.push(5);
// stack.print();
stack.push(4);
// stack.print();
stack.push(3);
// stack.print();
stack.push(2);
// stack.print();
stack.push(1);
// stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();

/*
//////////////////////////
스택 구현 (2) - Array로 구현
//////////////////////////
*/
let stack_arr = [];

stack_arr.push(5);
console.log(`stack_arr :: ${stack_arr}`);
stack_arr.push(4);
console.log(`stack_arr :: ${stack_arr}`);
stack_arr.push(3);
console.log(`stack_arr :: ${stack_arr}`);
stack_arr.push(2);
console.log(`stack_arr :: ${stack_arr}`);
stack_arr.push(1);
console.log(`stack_arr :: ${stack_arr}`);

stack_arr.pop();
console.log(`stack_arr pop() :: ${stack_arr}`);
stack_arr.pop();
console.log(`stack_arr pop() :: ${stack_arr}`);
stack_arr.pop();
console.log(`stack_arr pop() :: ${stack_arr}`);
stack_arr.pop();
console.log(`stack_arr pop() :: ${stack_arr}`);
stack_arr.pop();
console.log(`stack_arr pop() :: ${stack_arr}`);
