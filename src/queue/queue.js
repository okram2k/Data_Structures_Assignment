/**
 * Node is used to store values in a Queue
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
//a queue class starts with a first and last as null.
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  //to enqueue onto the list we add new objects to the end of the  list.
  enqueue(value) {
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      // Set the node of the queue's next to be the new node
      this.first = newNode;
    }

    //make the new node the last item on the queue
    this.last = newNode;
  }

  //to dequeue from the list we remove the first item from the list and then set this.first the next item on the list, dequqed.next.

  dequeue() {
    if (this.first) {
      const dequeued = this.first;
      this.first = dequeued.next;
      //check to make sure we haven't reached the end of the queue, if we have make this.last=null
      if (dequeued === this.last) {
        this.last = null;
      }

      return dequeued.value;
    }
  }

  //peek at the first item of the list
  peek() {
    return this.first.value;
  }

  //see if the list is empty.
  isEmpty() {
    return this.first === null;
  }
}

module.exports = Queue;
