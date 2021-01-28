// Given a linked list, swap every two adjacent nodes and return its head.

const swapPairs = (head) => {
  const swapNodes = (node) => {
    if (!node || !node.next) return node;

    let current = node.next
    let next = swapNodes(current.next);
    current.next = node;
    node.next = next;

    return current;
  }

  return swapNodes(head);
}