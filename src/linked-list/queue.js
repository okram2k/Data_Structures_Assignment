const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
    
  }

  dequeue() {
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

module.exports = Queue;
