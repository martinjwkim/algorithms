const invertTree = (root, right=root?.right, left=root?.left) => {
  if (!root) return null;
  
  root.right = invertTree(left);
  root.left = invertTree(right);

  return root;
}