const invertTree = (root) => {
  if (!root) return root;

  let temp = root.right;
  
  root.right = root.left ? invertTree(root.left) : null;
  root.left = temp ? invertTree(temp) : null;

  return root;
}