class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    
    return ++this.size;
  }

  dequeue(){
    if (this.size === 0) return null;

    let poppedNode = this.first;
    
    if(this.first===this.last){
      this.last = null;
    }
    
    this.first = poppedNode.next;
    this.size--;

    return poppedNode.value;
  }
}