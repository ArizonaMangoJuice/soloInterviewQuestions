'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    if (this.head === null) {
      this.head = new _Node(data, null);
    } else {
      let currNode = this.head;
      while (currNode) {
        if (currNode.next === null) {
          let node = new _Node(data, null);
          currNode.next = node;
          return;
        }
        currNode = currNode.next;
      }
    }
  }

  insertFirst(data) {
    if (this.head === null) {
      this.head = new _Node(data, null);
    } else {
      this.head = new _Node(data, this.head);
    }
  }

  insertBefore(data, key) {
    if (this.head === null) {
      this.head = new _Node(data, null);
    } else {
      let currNode = this.head;
      let prevNode = this.head;
      while (currNode) {
        if (currNode.data === key) {
          let node = new _Node(data, currNode);
          prevNode.next = node;
        }
        prevNode = currNode;
        currNode = currNode.next;
      }
      return null;
    }
  }

  insertAfter(data, key) {
    if (this.head === null) {
      this.head = new _Node(data, null);
    } else {
      let currNode = this.head;
      while (currNode) {
        if (currNode.data === key) {
          // console.log('current Node', currNode.data);
          let node = new _Node(data, currNode.next);
          currNode.next = node;
        }
        currNode = currNode.next;
      }
    }
  }

  insertAt(data, key) {
    if (this.head === null) {
      this.head = new _Node(data, null);
    } else {
      let currNode = this.head;
      let counter = 0;
      while (currNode) {
        if (counter === key - 2) {
          let node = new _Node(data, currNode.next.next);
          currNode.next = node;
        }
        counter++;
        currNode = currNode.next;
      }
    }
  }

  removeFirst() {
    if (this.head === null) return null;
    this.head = this.head.next;
  }

  remove(name) {
    if (this.head === null) return null;
    if (this.head.data === name) this.head = this.head.next;
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode) {
      // console.log(currNode);
      if (currNode.data === name) {
        // console.log('curr', currNode, 'prevNode', prevNode);
        prevNode.next = currNode.next;
        // console.log('curr', currNode, 'prevNode', prevNode);
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
}

let myLinkedList = new LinkedList();

myLinkedList.insert('Apollo');
myLinkedList.insert('Boomer');
myLinkedList.insert('Helo');
myLinkedList.insert('Husker');
myLinkedList.insert('Starbuck');
myLinkedList.insert('Tauhida');
myLinkedList.remove('squirrel');
myLinkedList.insertBefore('Athena', 'Boomer');
myLinkedList.insertAfter('HotDog', 'Helo');
myLinkedList.remove('Tauhida');
// myLinkedList.insertAfter('hello', 'Boomer');
// myLinkedList.removeFirst();
// myLinkedList.insertAt('hello', 3);
// myLinkedList.insert('helloAtEnd');
display(myLinkedList);


function display(ll) {
  let currNode = ll.head;
  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

function size(ll) {
  let counter = 0;
  let currNode = ll.head;
  while (currNode) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

// console.log(size(myLinkedList));

function isEmpty(ll) {
  return ll.head !== null ? false : true;
}
// console.log(isEmpty(myLinkedList));

function findPrev(ll, name) {
  let currNode = ll.head;
  let prevNode = ll.head;
  while (currNode) {
    if (currNode.data === name && currNode === ll.head) {
      return null;
    }
    if (currNode.data === name) {
      return prevNode.data;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
}

// console.log('FINDPREV');
// console.log(findPrev(myLinkedList, 'Apollo'));

function findLast(ll) {
  if (ll.head === null) return null;
  let currNode = ll.head;
  while (currNode) {
    if (currNode.next === null) {
      return currNode.data;
    }
    currNode = currNode.next;
  }
}

// console.log('FINDLAST');
// console.log(findLast(myLinkedList));

//reverse list
function reverseList(ll) {
  //need to create a variable to hold the previous
  let currNode = ll.head;
  let previous = null;
  //loop throuhg the arr
  while (currNode) {
    //create a variable to hold the next node 
    let saveNode = currNode.next;
    //set node.next to previous
    currNode.next = previous;
    //set previous to node
    previous = currNode;
    //set node to save
    currNode = saveNode;
  }
  ll.head = previous;
  return ll;
}

// let test = reverseList(myLinkedList);

// display(test);


//need to create a variable that will hold the 3 nexts from the current node
//loop through when its not null
function thirdFromEnd(ll) {
  let third = ll.head; // set the variable for the third
  let currNode = ll.head.next.next.next;//set currNode equalt o the third position of the linked list
  while (currNode !== null) {//while currNode is not equal to null
    third = third.next;//set the third to next
    currNode = currNode.next;//set currentNode to the next of currentNode
  }
  return third.data;//return the third from last
  //it creates 2 things one is stor the beginning which will be the third from last data
  //the second one creates a node that starts at the third spot 
  //its going to keep on looping until next is null
  //everytime we loop we set the third to the next pointer
  //then we set currNode to the next pointer
  //visual
  // third -> ll.head -> Apollo
  // currNode -> ll.head -> Apollo -> .next -> Athena -> .next -> Boomer -> .next -> Helo
}
console.log('/////thirdFromEnd/////')
console.log(thirdFromEnd(myLinkedList));

//middle of list
function middleOfList(ll) {
  //need to create a two variables a middle and an end
  let end = ll.head;
  let middle = ll.head;
  //loop through 
  while (end !== null && end.next !== null) {//for both even and odd lists
    //iterate end twice as fast as middle
    end = end.next.next;
    middle = middle.next;
  }
  //return middle
  return middle.data;
}

console.log('/////Middle Of List/////');
console.log(middleOfList(myLinkedList));