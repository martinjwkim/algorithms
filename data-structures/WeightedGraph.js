class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let current;

    for (let node in this.adjacencyList) {
      if (start === node) {
        distances[node] = 0;
        nodes.enqueue(start, 0);
      } else {
        distances[node] = Infinity;
        nodes.enqueue(node, Infinity);
      }
      previous[node] = null;
    }

    while (nodes.values.length !== 0) {
      current = nodes.dequeue().value;

      if (current === finish) {
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }
        break;
      } else {
        for (let neighbor of this.adjacencyList[current]) {
          let currentDistance = distances[current] + neighbor.weight;
          if (currentDistance < distances[neighbor.node]) {
            distances[neighbor.node] = currentDistance;
            previous[neighbor.node] = current;
            nodes.enqueue(neighbor.node, currentDistance);
          }
        }
      }
    }

    return path.concat(current).reverse();
  }
}

class Node {
  constructor(value, priority) {
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
      if (element.priority >= parent.priority) break;
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

      if (leftChild.priority < element.priority) {
        swap = leftIndex;
      }
      if (rightChild !== null && rightChild.priority < element.priority && rightChild.priority < leftChild.priority) {
        swap = rightIndex;
      }
      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
