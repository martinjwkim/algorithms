class Heap {
  constructor() {
    this.values = [];
  }

  insert(node) {
    this.values.push(node);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].val > this.values[parentIndex].val) break;
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
    }
  }

  remove() {
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

const mergeKLists = (lists) => {
  let heap = new Heap();
  let res = new ListNode(0);
  let node = res;

  for (let list of lists) {
    let curr = list;
    while (curr) {
      heap.insert(curr);
      curr = curr.next;
    }
  }

  while (heap.values.length) {
    node.next = heap.remove()
    node = node.next;
  }

  node.next = null;

  return res.next;
}