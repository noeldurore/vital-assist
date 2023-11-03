/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex and elaborate implementation of a data structure in JavaScript.
*/

// Create a blueprint for a doubly linked list node
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Create a doubly linked list class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  // Add a new node at the end of the list
  add(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;
  }

  // Insert a new node at a specific position
  insertAt(data, index) {
    if (index < 0 || index > this.size)
      return;
      
    const newNode = new Node(data);
    
    if (index === 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (index === this.size) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let count = 0;
      
      while (count < index) {
        current = current.next;
        count++;
      }
      
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }
    
    this.size++;
  }

  // Remove a node at a specific position
  removeAt(index) {
    if (index < 0 || index >= this.size)
      return null;
    
    let current = this.head;
    
    if (index === 0) {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    } else if (index === this.size - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    } else {
      let count = 0;
      
      while (count < index) {
        current = current.next;
        count++;
      }
      
      current.prev.next = current.next;
      current.next.prev = current.prev;
      current.prev = null;
      current.next = null;
    }
    
    this.size--;
    return current.data;
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }

  // Check if the list is empty
  isEmpty() {
    return this.getSize() === 0;
  }

  // Print the list in forward order
  printForward() {
    let current = this.head;
    let result = "";
    
    while (current) {
      result += `${current.data} `;
      current = current.next;
    }
    
    console.log(`Forward: ${result.trim()}`);
  }

  // Print the list in reverse order
  printReverse() {
    let current = this.tail;
    let result = "";
    
    while (current) {
      result += `${current.data} `;
      current = current.prev;
    }
    
    console.log(`Reverse: ${result.trim()}`);
  }
}

// Create an instance of the DoublyLinkedList class
const list = new DoublyLinkedList();

// Add nodes to the list
list.add(5);
list.add(10);
list.add(15);
list.add(20);

// Print the list in forward order
list.printForward();

// Insert a node at index 2
list.insertAt(12, 2);

// Print the list in forward order
list.printForward();

// Remove a node at index 1
const removedNode = list.removeAt(1);
console.log(`Removed Node: ${removedNode}`);

// Print the list in forward and reverse order
list.printForward();
list.printReverse();

// Get the size of the list
const size = list.getSize();
console.log(`Size: ${size}`);

// Check if the list is empty
const isEmpty = list.isEmpty();
console.log(`Empty: ${isEmpty}`);