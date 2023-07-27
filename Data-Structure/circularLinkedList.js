class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.size = 0;
  }

  insert(idx, data) {
    let newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.head.next = newNode;
      this.head.prev = newNode;

      newNode.next = this.head;
      newNode.prev = this.head;

      this.size++;
      return;
    }

    let curr = this.head;
    let count = 0;

    let isStart = false;
    while (!isStart || curr != this.head) {
      isStart = true;

      if (count == idx) {
        break;
      }

      curr = curr.next;
      count++;
    }

    newNode.next = curr;
    newNode.prev = curr.prev;

    curr.prev.next = newNode;
    curr.prev = newNode;

    this.size++;
  }

  search(data) {}

  print() {
    let curr = this.head;

    let isStart = false;
    while (!isStart || curr != this.head) {
      isStart = true;
      console.log(curr.data);
      curr = curr.next;
      count++;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return;
  }

  remove() {}
}
