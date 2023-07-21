// 단일 연결 리스트 구현 연습

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertLast(data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  // 연결 리스트에서 가장 중요
  insertAt(idx, data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    } else if (idx == 1) {
      this.insertFirst(data);
      return;
    }

    // 2번째 이상의 인덱스에 넣고 싶은 경우
    let current = this.head;
    let count = 1;

    while (current != null) {
      if (count + 1 == idx) {
        break;
      }

      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return;
    }

    let current = this.head;
    this.head = this.head.next;
    current.next = null;

    this.size--;
  }

  removeLast() {
    if (this.isEmpty()) {
      return;
    } else if (this.getSize() == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;

    while (current != null) {
      if (current.next == this.tail) {
        break;
      }

      current = current.next;
    }

    current.next = null;
    this.tail = current;

    this.size--;
  }

  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    let current = this.head;
    // (=) if(this.head.data == data) {
    if (current.data == data) {
      this.head = current.next;
    } else {
      while (current != null) {
        if ((current.next.data = data)) {
          break;
        }

        current = current.next;
      }

      current.next = current.next.next;
    }

    this.size--;
  }

  search(data) {
    let idx = 1;
    let current = this.head;

    while (current != null) {
      if (current.data == data) {
        console.log(`${idx}번째에 '${data}'이/가 있습니다.`);
        return;
      }

      current = current.next;
      idx++;
    }

    // 연결 리스트 내에 data가 존재하지 않는 경우
    console.log(`'${data}'이/가 존재하지 않습니다.`);
  }

  print() {
    let current = this.head;

    console.log(`=== 크기: ${this.getSize()} ===`);

    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst("화");
linkedList.print();
linkedList.insertFirst("월");
linkedList.print();
linkedList.insertLast("금");
linkedList.print();
linkedList.insertAt(3, "목");
linkedList.print();
linkedList.insertAt(3, "수");
linkedList.print();

linkedList.search("월");
linkedList.search("화");
linkedList.search("수");
linkedList.search("목");
linkedList.search("금");
linkedList.search("토");
linkedList.search("일");
linkedList.search("뿅");

linkedList.removeFirst();
linkedList.print();
linkedList.removeFirst();
linkedList.print();

linkedList.remove("수");
linkedList.print();
linkedList.search("뿅");
linkedList.print();
linkedList.removeLast();
linkedList.print();
