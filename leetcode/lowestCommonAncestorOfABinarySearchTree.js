const lowestCommonAncestor = (root, p, q) => {
  
  const traverse = (curr, node, lowest) => {

    if (ancestors[curr.val]) lowest = curr.val;

    ancestors[curr.val] = true;

    if (curr === node) return lowest;

    return node.val < curr.val ? traverse(curr.left, node, lowest) : traverse(curr.right, node, lowest);
  }

  let ancestors = {};

  let res = traverse(root, p, root.val);
  res = traverse(root, q, root.val);

  return res;
}