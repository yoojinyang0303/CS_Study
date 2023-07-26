// 더미 노드 이중 연결 리스트 구현

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DummyNodeDoubleLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  insertAt(idx, data) {
    let newNode = new Node(data, null, null);

    let count = 0; // 몇 번째인지 확인하기 위함
    let curr = this.head;

    while (curr != null) {
      // curr != tail
      if (count == idx) {
        // 월, 수 있을 때 2번째에 '화'요일을 넣고자 한다.
        break;
      }

      curr = curr.next; // curr = 수
      count++;
    }

    newNode.prev = curr.prev; // curr.prev = 월
    newNode.next = curr;

    curr.prev.next = newNode;
    curr.prev = newNode;

    this.size++;
  }

  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    let curr = this.head;
    // data = '화'요일로 가정하여 작성
    while (curr != null) {
      if (curr.data == data) {
        curr.prev.next = curr.next; // curr.prev = '월', curr.next = '수'
        curr.next.prev = curr.prev;

        curr.next = null;
        curr.prev = null;
      }
      curr = curr.next;
    }
    this.size--;
  }

  search(data) {
    let count = 0;
    let curr = this.head;

    while (curr != null) {
      if (curr.data == data) {
        console.log(`${count}번째에 '${data}'이/가 있습니다.`);
        return;
      }

      curr = curr.next;
      count++;
    }

    console.log(`'${data}'이/가 존재하지 않습니다.`);
  }

  print() {
    let curr = this.head;

    console.log(`=== 크기 : ${this.getSize()} ===`);

    while (curr != null) {
      // curr != tail
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

const dummyNodeDoubleLinkedList = new DummyNodeDoubleLinkedList();

dummyNodeDoubleLinkedList.insertAt(1, "월");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(2, "수");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(2, "화");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(4, "목");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(5, "금");
dummyNodeDoubleLinkedList.print();

dummyNodeDoubleLinkedList.search("월");
dummyNodeDoubleLinkedList.search("토");

dummyNodeDoubleLinkedList.remove("수");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("화");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("목");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("금");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("월");
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove("일");
dummyNodeDoubleLinkedList.print();
