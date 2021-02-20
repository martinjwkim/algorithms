var canFinish = function(numCourses, prerequisites) {
  let visited = {};
  let adjList = {};

  for (let relation of prerequisites) {
    adjList[relation[0]] = relation.slice(1); 
  }

  for (let node of adjList) {
    if (!visited[node]){
      if (!traverse()) return false;
    }
  }

  return true;

};

console.log(canFinish(2,[[1,0]]))