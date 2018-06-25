'use strict';

class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    if (this.head === null) {
      this.head = new _Node(data, null, null);
    } else {
      let otherNode = this.head;
      this.head = new _Node(data, this.head, null);
      otherNode.prev = this.head;
      otherNode.next = null;
    }
  }
}

let newDoubleLinkedList = new DoubleLinkedList();
newDoubleLinkedList.insertFirst(1);
newDoubleLinkedList.insertFirst(2);

display(newDoubleLinkedList);

function display(list) {
  let currNode = list.head;
  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}