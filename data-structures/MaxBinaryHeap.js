class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }


  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this.values;
  }

  extractMax() {
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

      if (leftChild > element) {
        swap = leftIndex;
      }
      if (rightChild !== null && rightChild > element && rightChild > leftChild) {
        swap = rightIndex;
      }
      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()

console.log(heap)

// [55,39,41,18,27,12,33]