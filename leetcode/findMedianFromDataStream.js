class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  addNum(num) {
    let median = this.findMedian();

    num < median ? this.minHeap.insert(num) : this.maxHeap.insert(num);

    this.balance();
  }

  findMedian() {

  }

  balance() {
    let maxLength = this.maxHeap.values.length;
    let minLength = this.minHeap.values.length;

    if (minLength < maxLength){
      this.minHeap.insert(this.maxHeap.removeMax());
    } else if (maxLength > minLength) {
      this.maxHeap.insert(this.minHeap.removeMin());
    }
  }
}

class MinHeap {
  constructor() {
    this.values = [];
  }

  insert(num) {
    this.values.push(num);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] < this.values[index]) break;
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
    }
  }

  removeMin() {
    
  }

  bubbleDown() {

  }
}

class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(num) {
    this.values.push(num);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] > this.values[index]) break;
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
    }
  }
}