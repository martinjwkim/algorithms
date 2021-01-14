class Node {
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }


  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this.values;
  }

  dequeue() {
    let removedElement = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;

    this.bubbleDown();
    return removedElement;
  }

  bubbleDown() {
    let index = 0;
    let element = this.values[0];
    let length = this.values.length;

    while (2 * index + 1 < length) {
      let leftIndex = 2 * index + 1;
      let rightIndex = leftIndex + 1;
      let leftChild = this.values[leftIndex];
      let rightChild = leftIndex + 1 < length ? this.values[rightIndex] : null;
      let swap = null;

      if (leftChild.priority > element.priority) {
        swap = leftIndex;
      }
      if (rightChild !== null && rightChild.priority > element.priority && rightChil.priority > leftChild.priority) {
        swap = rightIndex;
      }
      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}