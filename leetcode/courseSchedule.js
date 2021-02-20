var canFinish = function(numCourses, prerequisites) {
  function takePrereq(course, graph, count){
      if (count >  numCourses) return count;
      if (graph[course] === undefined || !graph[course].length) return 1;
      
      for (let prereq of graph[course]){
          count+=takePrereq(prereq, graph, count)
      }
      
      visited[course] = true;
      
      return count+1;
  }

  let adjList = {};
  let visited = {};

  for (let relation of prerequisites) {
      adjList[relation[0]] = relation.slice(1);
  }

  console.log(adjList)
  
  let num = 0;
  for (let node in adjList) {
      if (!visited[node]) num+=takePrereq(node, adjList, num);
  }
  
  return num > numCourses ? false : true;
};

console.log(canFinish(2,[[1,0]]))