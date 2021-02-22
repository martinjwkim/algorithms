const canFinish = (numCourses, prerequisites) => {

  const traverse = (course, courseGraph, visited, courseMemo) => {
    if (visited[course]) return false;
    if (courseMemo[course]) return true;

    visited[course] = true;

    for (let neighbor of courseGraph[course]) {
      if (!traverse(neighbor, courseGraph, visited, courseMemo)) return false;
    }

    visited[course] = false;

    courseMemo[course] = true;

    return true;
  }

  let adjList = {};
  let memo = {};
  let obj = {};

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  for (let relation of prerequisites) {
    adjList[relation[0]].push(relation[1]);
  }

  for (let node in adjList) {
    if (!traverse(node, adjList, obj, memo)) return false;
  }

  return true;
};
