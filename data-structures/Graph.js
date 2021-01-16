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
}