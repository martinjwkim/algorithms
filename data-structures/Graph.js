class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(val){
    this.adjacencyList[val] = this.adjacencyList[val] || [];
    return this;
  }

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this;
  }

  removeEdge(v1,v2){
    this.adjacencyList[v1] = this.adjanceyList[v1].filter(v=>v!==v2);
    this.adjacencyList[v2] = this.adjanceyList[v2].filter(v=>v!==v1);
    return this;
  }

  removeVertex(vertex){
    while (this.adjacencyList[vertex].length){
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex,vertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  DFSRecursive(start){
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function traverse(vertex){
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return traverse(neighbor)
        }
      });
    }

    traverse(start);
    return result;
  }

  DFSIterative(start){
    let stack = [start];
    let result = [];
    let visited = {[start]:true};
    let current;

    while(stack.length){
      current = stack.pop();
      result.push(current);g
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor]=true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  BFS(start){
    let result = [];
    let visited = {[start]:true};
    let queue = [start];
    let current;

    while(queue.length){
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph;
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.BFS("A"));