/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
  }

  pop() {
        let dequeued = this.linkedList.head;
    this.linkedList.remove((node) => node === dequeued);
    return dequeued.value;
  }

  peek() {
    if (!this.linkedList.head) {
    return null;
    }
    //console.log("peek:", this.linkedList.head.value);
    return this.linkedList.head.value;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }
}

module.exports = Stack;
