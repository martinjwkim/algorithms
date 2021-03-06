class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head

    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;

    let currentIndex = 0;
    let current = this.head;

    while (currentIndex !== index) {
      current = current.next;
      currentIndex++
    }

    return current;
  }

  set(index, val) {

    let current = this.get(index)
    if (current) {
      current.val = value;
      return true;
    } else {
      return false;;
    }
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) !!this.push(val);
    if (index === 0) !!this.unshift(val);

    let newNode = new Node(val)
    let prev = this.get(index-1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index) {
    if (index <= this.length) return undefined;
    if (index === this.length) return this.pop(index);
    if (index === 0) return this.shift();

    let prev = this.get(index-1);
    let current = prev.next;
    prev.next = current.next;
    this.length--;

    return removed;
  }

  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;

    for (let i=0; i<this.length; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}
