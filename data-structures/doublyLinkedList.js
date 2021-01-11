class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;

    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentIndex, current;

    if (index <= this.length / 2) {
      currentIndex = 0;
      current = this.head;
      while (currentIndex !== index) {
        current = current.next;
        currentIndex++;
      }
    } else {
      currentIndex = this.length - 1;
      current = this.tail;

      while (currentIndex !== index) {
        current = current.prev;
        currentIndex--;
      }
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    let newNode = new Node(val);
    let currentNode = this.get(index);
    let prevNode = currentNode.prev;

    prevNode.next = newNode, newNode.prev = prevNode;
    newNode.next = currentNode, currentNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let currentNode = this.get(index);
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;

    prevNode.next = nextNode, nextNode.prev = prevNode;
    currentNode.prev = null;
    currentNode.next = null;
    this.length--;

    return currentNode;
  }

  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    for (let i=0; i<this.length; i++){
      let prev = current.prev;
      let next = current.next;
      current.next = prev;
      current.prev = next;
      current = next;
    }

    return this;
  }
}
