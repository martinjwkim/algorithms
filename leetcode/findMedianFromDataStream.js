class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  addNum(num) {
    let median = this.findMedian();

    num < median ? this.maxHeap.insert(num) : this.minHeap.insert(num);

    this.balance();
  }

  findMedian() {
    let maxLength = this.maxHeap.values.length;
    let minLength = this.minHeap.values.length;

    if (maxLength === minLength){
      return (this.minHeap.values[0] + this.maxHeap.values[0]) / 2
    }
    
    return maxLength > minLength ? this.maxHeap.values[0] : this.minHeap.values[0];
  }

  balance() {
    let maxLength = this.maxHeap.values.length;
    let minLength = this.minHeap.values.length;

    if (minLength < maxLength){
      this.minHeap.insert(this.maxHeap.removeMax());
    } else if (maxLength < minLength) {
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
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) this.values[0] = end;
    this.bubbleDown();

    return min;
  }

  bubbleDown() {
    let index = 0;
    let leftIndex, rightIndex, element, leftChild, rightChild, swap;

    while (index * 2 + 1 < this.values.length) {
      swap = null;
      leftIndex = index * 2 + 1;
      rightIndex = leftIndex + 1;
      element = this.values[index].val;
      leftChild = this.values[leftIndex].val;
      rightChild = this.values[rightIndex]?.val;

      if (leftChild < element) swap = leftIndex;
      if (rightChild !== undefined && rightChild < element && rightChild < leftChild) swap = rightIndex;
      if (!swap) break;

      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]]
      index = swap;
    }
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

  removeMax() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) this.values[0] = end;
    this.bubbleDown();

    return max;
  }

  bubbleDown() {
    let index = 0;
    let leftIndex, rightIndex, element, leftChild, rightChild, swap;

    while (index * 2 + 1 < this.values.length) {
      swap = null;
      leftIndex = index * 2 + 1;
      rightIndex = leftIndex + 1;
      element = this.values[index].val;
      leftChild = this.values[leftIndex].val;
      rightChild = this.values[rightIndex]?.val;

      if (leftChild > element) swap = leftIndex;
      if (rightChild !== undefined && rightChild > element && rightChild > leftChild) swap = rightIndex;
      if (!swap) break;

      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]]
      index = swap;
    }
  }
}