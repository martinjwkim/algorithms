const topKFrequent = (nums, k) => {
  let numsCount = {};
  let numsHeap = new Heap();
  let res = [];

  for (let num of nums) {
    numsCount[num] = numsCount[num]+1 || 1;
  }

  for (let num in numsCount){
    numsHeap.insert(num, numsCount[num]);
  }

  for (let i=0; i<k; i++){
    res.push(numsHeap.extractMax())
  }

  return res;

}

class Node {
  constructor(value, frequency) {
    this.value = value;
    this.frequency = frequency;
  }
}

class Heap {
  constructor() {
    this.values = [];
  }

  insert(value, frequency) {
    let node = new Node(value, frequency);
    this.values.push(node);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let index = this.values.length-1;
    let parentIndex = Math.floor((index-1)/2);

    while(parentIndex > 0 && this.values[parentIndex].frequency < this.values[index].frequency){
      [this.values[parentIndex],this.values[index]] = [this.values[index],this.values[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index-1)/2);
    }
  }

  extractMax() {
    if (!this.values.length) return;

    let max = this.values[0].value;
    let end = this.values.pop();
    this.values[0] = end;

    if (this.values.length>1) this.bubbleDown();

    return max;
  }

  bubbleDown() {
    let index = 0;
    let leftIndex, rightIndex, swap, frequency, leftFrequency, rightFrequency;

    while (index*2+1 < this.values.length){
      leftIndex = index*2+1;
      rightIndex = leftIndex+1;
      frequency = this.values[index].frequency;
      leftFrequency = this.values[leftIndex].frequency;
      rightFrequency = rightIndex < this.values.length ? this.values[rightIndex].frequency : null;
      if (frequency < leftFrequency) swap = leftIndex;
      if (frequency < rightFrequency  &&  rightFrequency > leftFrequency) swap = rightIndex;
      if (!swap) break;
      
      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
  }
}