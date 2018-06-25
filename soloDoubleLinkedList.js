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
    let node = new _Node(data, this.head, null);

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;

    if (this.tail === null) {
      this.tail = node;
    }
  }

  insertLast(data) {
    let node = new _Node(data, null, this.tail);

    if(this.tail !== null){
      this.tail.next = node;
    }

    this.tail = node;

    if(this.head === null){
      this.head = node;
    }
  }

  remove(name){
    
  }
}

let newDoubleLinkedList = new DoubleLinkedList();
newDoubleLinkedList.insertFirst(1);
newDoubleLinkedList.insertFirst(2);
newDoubleLinkedList.insertFirst(3);
newDoubleLinkedList.insertLast(4);

display(newDoubleLinkedList);

function display(list) {
  let currNode = list.head;
  while (currNode) {
    // console.log(currNode);
    // console.log(currNode.next);
    // console.log(currNode.prev);
    console.log(currNode.data);
    currNode = currNode.next;
  }
}