const hasCycle = (head, visited=[]) => {
  if (visited.indexOf(head) != -1) return true;
  if (!head) return false;
  
  visited.push(head);

  return hasCycle(head.next, visited)
}