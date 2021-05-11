const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }
  //enqueue inserts items to the end of the linked list
  enqueue(value) {
    this.linkedList.insert(value);
  }
  //dequque removes items from the head of the list, returning it's value
  dequeue() {
    let dequeued = this.linkedList.head;
    this.linkedList.remove((node) => node === dequeued);
    return dequeued.value;
  }
  //peek looks at the first item of the list, as long as it exists, otherwise returns null.
  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }
  //check if the linkedList.head has a value, otherwise the queue is empty.
  isEmpty() {
    return this.linkedList.head === null;
  }
}

module.exports = Queue;
