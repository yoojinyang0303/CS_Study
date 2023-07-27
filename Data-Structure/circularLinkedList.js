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

  search(data) {
    let curr = this.head;
    let count = 0;

    let isStart = false;
    while (!isStart || curr != this.head) {
      isStart = true;

      if (curr.data == data) {
        console.log(`${count}번째에 '${data}'가 있습니다.`);
        return;
      }

      curr = curr.next;
      count++;
    }
    console.log(`'${data}'가 존재하지 않습니다.`);
  }

  print() {
    let curr = this.head;

    let isStart = false;
    while (!isStart || curr != this.head) {
      isStart = true;
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

  remove(data) {
    if (this.getSize() == 1) {
      this.head.next = this.head;
      this.head.prev = this.head;

      this.size--; //  (=) this.size = 0;
      return;
    }

    let curr = this.head;
    let isStart = false;
    while (!isStart || curr !== this.head) {
      isStart = true;

      if (curr.data == data) {
        break;
      }
      curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.size--;
  }
}

const circularLinkedList = new CircularLinkedList();

circularLinkedList.insert(1, "화");
circularLinkedList.print();
circularLinkedList.insert(1, "월");
circularLinkedList.print();
circularLinkedList.insert(3, "목");
circularLinkedList.print();
circularLinkedList.insert(3, "수");
circularLinkedList.print();

circularLinkedList.search("금");
circularLinkedList.search("수");

circularLinkedList.remove("목");
circularLinkedList.print();
circularLinkedList.remove("화");
circularLinkedList.print();
circularLinkedList.remove("월");
circularLinkedList.print();
circularLinkedList.remove("수");
circularLinkedList.print();
circularLinkedList.remove("금");
circularLinkedList.print();
