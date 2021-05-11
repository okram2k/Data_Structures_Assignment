//const LinkedList = require("./linkedList");
/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  //console.log(sortedLinkedList.length);
  if (sortedLinkedList.length > 1){
    let current = sortedLinkedList.head;
    while (current.next != null){
      //console.log(current.value, current.next.value);
      if (current.value === current.next.value){
        sortedLinkedList.remove((node) => node === current);
        current.next = current.next.next
      } else {
        current = current.next;
      }
    }
  }

    // returns the linked list with no duplicates
    return sortedLinkedList  
}

module.exports = removeDuplicates;
