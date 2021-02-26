const invertTree = (root, right=root?.right, left=root?.left) => {
  if (!root) return null;
  
  root.right = left ? invertTree(left) : null;
  root.left = right ? invertTree(right) : null;

  return root;
}